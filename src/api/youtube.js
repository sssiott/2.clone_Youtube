import axios from "axios";

export default class Youtube {
  constructor() {
    this.client = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    });
  }

  async mostPopular() {
    return this.client
      .get("/videos", {
        params: { part: "snippet,statistics", maxResults: 20, chart: "mostPopular" },
      })
      .then((res) => res.data.items);
  }

  async search(keyword) {
    return this.client.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        type: "video",
        q: keyword,
      },
    })
    .then(res=>res.data.items)
    .then(videos=>videos.map((item)=>
      ({...item,id: item.id.videoId})
    ));
  }

  async channelDetails(id) {
    const result = await this.client.get("/channels", {
      params: {
        part: "snippet,statistics",
        id,
      },
    });
    const data = await result.data.items[0];
    return data;
  }

  async videoDetails(id) {
    const result = await this.client.get("/videos", {
      params: {
        part: "snippet,statistics",
        id,
      }
    });
    return result.items[0];
  }
  
  async relatedVideos(id) {
    return this.client.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 5,
        type: "video"
      }
    })
    .then(res=>res.data.items)
    .then(videos=>videos.map((item)=>
    ({...item,id: item.id.videoId})
    ))
  }

  async getChannelThumbnail(id) {
    const channelDetail = await this.channelDetails(id);
    return channelDetail.snippet.thumbnails.default.url;
  }
}
