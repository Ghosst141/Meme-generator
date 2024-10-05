import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className='card'>
            <div className='card-img'>
                <img className="meme-img" src={props.url} alt="" />
            </div>
            <div className='card-title'>
                <h2 className='meme-title'>{props.title}</h2>
                <button
                    onClick={() => (navigate(`/edit?url=${props.url}`))}
                    className='edit'>Edit
                    </button>
            </div>
        </div>
    )
}

export default Card