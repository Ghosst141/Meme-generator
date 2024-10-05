import React, { useState, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image'
import Text from "../components/Text"

function EditPage() {
    const [search] = useSearchParams();
    const url = search.get("url")
    const [count, setCount] = useState(0);

    const memeref = useRef();

    const addText = () => {
        setCount(count + 1);
    }
    return (
        <div className='edit-box'>
            <div className='img-box' ref={memeref}>
                <img className="edit-img" src={url} alt="" />
                {
                    Array(count).fill(0).map((i) => {
                        return <Text key={i} />

                    })
                }
            </div>
            <div className="buttons">
                <button onClick={addText} className='add-text'>Add text</button>
                <button onClick={() => (exportComponentAsJPEG(memeref))} className='save'>Save</button>
            </div>

        </div>
    )
}

export default EditPage