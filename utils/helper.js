import axios from "axios"

const fetchAlbum = async (id,genre) =>{
  try {
    const albumDetails = await axios({
      method: 'post',
      url: `api/album`,
      data: {
        albumIds : `${id.join('%2C')}`
      }
    })
    albumDetails.data.albums.map((albums,id)=>albums.genre = genre[id])
    return albumDetails?.data?.albums
  } catch (e) {
    console.log(e);
  }
  
}

const accessToken = async () => {
  const accessToken = await axios.get('https://46thmile.prismic.io/api/v2')
  return accessToken.data.refs[0].ref
}

const rj = async (ref,artistName) => {
  const albumPredicates = `[at(document.tags, [${artistName}])]`
  const album = await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${albumPredicates}]&pageSize=50`)
  return {
    results : album.data.results.map((releases)=>({catalogue: releases.uid, albumName: releases.data.release_details[0].text}))
  }
}

const podcast = async (ref,order) => {
  const albumPredicates = '[at(document.type,"podcast")]'
  const albumOrdering = `[my.podcast.release_date ${order}]`
  const podcastData = await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${albumPredicates}]
  &orderings=${albumOrdering}`)

  //&pageSize=${pageSize}&page=${pageNumber}
  // currentPage : album.data.total_pages,
  // totalPages : album.data.total_pages,

  return {
    id : podcastData.data.results.map((podcasts)=>podcasts.data.details[1].text),
    uid : podcastData.data.results.map((podcasts)=>podcasts.uid),
    result : podcastData.data.results.map((podcasts)=>podcasts),
  }
}

const podcastSearch = async (ref, uid) => {
  const podcastPredicates = `[at(my.podcast.uid,"${uid}")]`
  const podcastData = await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${podcastPredicates}]`)
  return{
    id : podcastData.data.results.map((podcasts)=>podcasts.data.details[1].text),
    result : podcastData.data.results.map((podcasts)=>podcasts.data)
  }
}

const events = async (ref) => {
  const eventPredicates = '[at(document.type, "events")]'
  const eventsData =  await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${eventPredicates}]`)
  return{
    uid : eventsData.data.results.map((events)=>events.uid),
    result : eventsData.data.results.map((events)=>events),
  }
}

const eventSearch = async (ref, uid) => {
  const eventPredicates = `[at(my.event.uid,"${uid}")]`
  const eventData = await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${eventPredicates}]`)
  return{
    result : eventData.data.results.map((events)=>events)
  }
}

const fetchAboutPage = async (ref) =>{
  const predicates = '[at(document.type, "about_us")]'
  const data =  await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${predicates}]`)
  return{
    result : data.data.results.map((events)=>events)
  }
}

const fetchHomePageSlider = async (ref) =>{
  const predicates = '[at(document.type, "home")]'
  const data =  await axios.get(`https://46thmile.prismic.io/api/v2/documents/search?ref=${ref}&q=[${predicates}]`)
  return{
    result : data.data.results.map((events)=>events)
  }
}

export {accessToken, podcast, events, fetchAlbum, podcastSearch,eventSearch, fetchAboutPage, fetchHomePageSlider, rj}