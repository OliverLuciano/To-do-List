import React from "react"

function TodoForm() {
    return <div className='todo-form'>
        <h2> New Task:</h2>
        <form>
            <input type="text" placeholder='Type the title' />
            <select>
                <option value = "">Select a category </option>
                <option value = "Work">Work</option>
                <option value = "Personal">Personal </option>
                <option value = "Studies">Studies </option>
            </select>
            <button type="submit">New Task</button>
        </form>
    </div>
}

export default TodoForm