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

  async hot() {
    return this.client
      .get("/videos", {
        params: { part: "snippet", maxResults: 25, chart: "mostPopular" },
      })
      .then((res) => res.data.items);
  }

  async search(keyword) {
    return this.client.get("/search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    });
  }

  async channelDetail(keyword) {
    const result = await this.client.get("/channels", {
      params: {
        part: "snippet",
        id: keyword,
      },
    });
    const data = await result.data.items[0];
    return data;
  }
}
