import { useEffect, useState } from 'react';

import HeaderComponent from './components/header';
import DropdownComponent from './components/dropdown';
import SearchComponent from './components/search';
import TableComponent from './components/table';

import { LyricInterface } from './interface';

import GetAPIRequest from './api';

import './styles/App.css';

function App() { 

  const [ lyrics, setLyrics ] = useState([]);
  const [ filteredLyrics, setFilteredLyrics ] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  let [ toggleNumberListed, setToggleNumberListed] = useState(25);

  const backendUrl = 'http://localhost:8000/swiftlyrics';

  useEffect(() => {
    GetAPIRequest({ backendUrl, setLyrics, setFilteredLyrics });
  }, [])

  useEffect(() => {
    let temp = lyrics?.slice(0, toggleNumberListed)
                      .filter((lyric: LyricInterface) => 
                          lyric.text.toLowerCase().replace(/[^a-zA-Z ]/g, '').includes(searchedText.toLowerCase().replace(/[^a-zA-Z ]/g, '')) 
                          || lyric.song.name.toLowerCase().includes(searchedText.toLowerCase()) 
                          || lyric.album.name.toLowerCase().includes(searchedText.toLowerCase())
                      )

    setFilteredLyrics(temp);

  }, [toggleNumberListed, searchedText, lyrics])

  return (
    <div className="App">

      {/* @TODO: could add Context API or Redux store to avoid prop drilliing */}
      
      <HeaderComponent />
      <div className="search-filter-grid">
        <SearchComponent searchedText={searchedText} setSearchedText={setSearchedText} />
        <DropdownComponent toggleNumberListed={toggleNumberListed} setToggleNumberListed={setToggleNumberListed} />
      </div>
      <TableComponent filteredLyrics={filteredLyrics} setFilteredLyrics={setFilteredLyrics} />
    </div>
  );
}

export default App;
