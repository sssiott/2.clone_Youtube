import FakeYoutube from "./fakeYoutube";
import Youtube from "./youtube";

const client = new FakeYoutube();
// const client = new Youtube();

export function getURL(id) {

  return ({ 
    queryKey: ['channel','url',id],
    queryFn: async ()=> client.getChannelThumbnail(id),
    // options: {refetchOnWindowFocus: false},
})
}

export function mostPopularQuery() {
  return ({
    queryKey: ['videos','mostPopular'],
queryFn: async ()=> client.mostPopular(),
// options: {refetchOnWindowFocus: false},
})
}

export function searchQuery(keyword) {
  return ({
    queryKey: ['videos','search', keyword],
    queryFn: async ()=> client.search(keyword),
  })
}

export function getRelatedVideos(id) {
  return ({
    queryKey: ['videos','related',id],
    queryFn: async ()=> client.relatedVideos(id)
  })
}

export function getVideoDetail(id) {
  return ({
    queryKey: ['videos','details',id],
    queryFn: async ()=> client.videoDetails(id).then(res=>res.statistics.viewCount),
    options: {refetchOnWindowFocus: false},
  })
}
