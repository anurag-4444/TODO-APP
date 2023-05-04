import React from 'react'

const TodoItem = ({ title, description, isCompleted, updateHandler, deleteHandler, id }) => {
    // console.log(isCompleted)
    return (
        <div className='todo'>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                <input onChange={()=>updateHandler(id)} type="checkbox" checked={isCompleted}/>
                <button className="btn" onClick={()=>deleteHandler(id)}>Delete0</button>
            </div>
        </div>
    )
}

export default TodoItem