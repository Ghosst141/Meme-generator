import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getMemes } from "../api/index"

function MemeCard() {
    const [meme, setMeme] = useState([]);
    useEffect(() => {
        getMemes().then(data => setMeme(data.data.memes))
    }, [])

    return (
        <div className='container'>
            {
                meme.map((data, index) => {
                    return <Card key={index} title={data.name} url={data.url} />
                })
            }
        </div>
    )
}

export default MemeCard