import React, { useState } from 'react';

export const AddTodo = (props) => {
    let formStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div style={formStyle}>
            <h3 className='my-3 py-1'>Todos List</h3>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='title' className="form-label">Add a task</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label htmlFor='desc' className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    <div id="desc" className="form-text my-1">Add a description for the given task.</div>
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">ADD TASK</button>
            </form>
        </div>
    )
}

export default AddTodo
