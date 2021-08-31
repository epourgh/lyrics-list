export interface LyricInterface { 
  id: number,
  text: string 
  song: {
    id: number,
    name: string
  },
  album: {
    id: number,
    name: string
  }
}

export interface apiParamsInterface {
  backendUrl: string, 
  setLyrics: Function, 
  setFilteredLyrics: Function
}