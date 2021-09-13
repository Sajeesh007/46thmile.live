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
    result : podcastData.data.results.map((podcasts)=>podcasts.data),
  }
}

const podcastSearch = async (ref, search) => {
  const podcastPredicates = '[at(document.type, "releases")]'
  const podcastOrdering = '[my.releases.release_date desc]'
  const searchItem = `[fulltext(document,"${search}")]`
  const podcast = await axios.get(`https://ommm-website.prismic.io/api/v2/documents/search?ref=${ref}&q=[${albumPredicates}]&q=[${searchItem}]
  &orderings=${albumOrdering}`)
  return{
    id : album.data.results.map((releases)=>releases.data.release_details[3].text),
  }
}

const events = async (ref) => {
  const playlistPredicates = '[at(document.type, "playlists_page")]'
  const playlist =  await axios.get(`https://ommm-website.prismic.io/api/v2/documents/search?ref=${ref}&q=[${playlistPredicates}]`)
  const playlistDetails = Object.values(playlist.data.results[0].data)
  return playlistDetails
}

export {accessToken, podcast, events, fetchAlbum, podcastSearch, rj}