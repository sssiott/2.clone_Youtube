import axios from "axios";

export default class FakeYoutube {

  async mostPopular() {
    return axios.get('/mock/mostPopular.json')
    .then(res=>res.data.items);
  }

  async videoDetails() {
    return axios.get('/mock/videoDetails.json')
    .then(res=>res.data.items[0]);
  }

  async channelDetails(id) {
    return axios.get('/mock/channelDetails.json')
    .then(res=>res.data.items[0]);
  }

  async search(keyword) {
    return axios.get('/mock/search.json')
    .then(res=>res.data.items)
    .then(videos=>videos.map((item)=>
      ({...item,id: item.id.videoId})
    ))
  }

  async getChannelThumbnail(id) {
    const channelDetail = await this.channelDetails(id);
    return channelDetail.snippet.thumbnails.default.url;
  }

  async relatedVideos(id) {
    return axios.get('/mock/related.json')
    .then(res=>res.data.items)
    .then(videos=>videos.map((item)=>
    ({...item,id: item.id.videoId})
    ))
  }
}