import React from "react"

const todo = ({ todo }) => {
    return (
    <div className="todo">
    <div className="content">
        <p>{todo.text}</p>
        <p className="category"> ({todo.category})</p>
    </div>
    <div>
        <button className="Complete">Complete</button>
        <button className="Remove">X</button>
    </div>
    </div>
    )
}

export default todo;
