const filter = () => {
    return (
    <div className="Filter">
        <h2>Filter</h2>
        <div className="Filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Imcompleted</option>
                </select>
            </div>
            <div>
                <p>Alphabetical order:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
    )
}

export default filter