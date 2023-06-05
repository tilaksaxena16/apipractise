import React from 'react'
import './user.css'

const User = ({ id, email, name, onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button type="button" className="btn btn-success button">Edit</button>
                <button type="button" className="btn btn-primary button" onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
}

export { User };