import '../styles/App.css';

const SearchComponent = (props: any) => {
    return (
        <div>
            <input type="text" className="searchInput" value={props.searchedText} onChange={(e) => props.setSearchedText(e.target.value)} />
            {(props.searchedText)?<p>Search results for <b>{props.searchedText}</b></p>:<></>}
        </div>
    )
}

export default SearchComponent
