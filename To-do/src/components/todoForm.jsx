import {useState} from "react"

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(value, category)
        if(!value || !category) return;
        addTodo(value,category)
        setValue("");
        setCategory("")
    };

    return <div className='todo-form'>
        <h2> New Task:</h2>
        <form onSubmit={handelSubmit}>
            <input
                type="text" 
                placeholder='Type the title' 
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
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