const search = ({search, setSearch}) => {
    return <div className="Search">
        <h2>Search:</h2>
        <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Type for search..." />
        </div>
}

export default search