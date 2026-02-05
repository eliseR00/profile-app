const Filters = ({titles, title, handleChange, handleSearch, handleClick}) => {
    return (
        <div className="fliter-container">
            <div className="filter-dropdown">
                <label htmlFor="title">Select a title: </label>
                <select id="title" onChange={handleChange}>
                    <option value="">ALL</option>
                    {
                        titles.map(title => <option key={title} value={title}>{title}</option>)
                    }
                </select>
            </div>
            <div className="filter-search">
                <label htmlFor="search">Search a name</label>
                <input id="search" onChange={handleSearch} />
            </div>
            <button className="clear-button" onClick={handleClick}>Clear Filters</button>
        </div>
    )
}
export default Filters;