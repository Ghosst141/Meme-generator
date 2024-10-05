import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

function Text() {
    const [fontSize, setFontSize] = useState(24); // Default font size
    const [isSelected, setIsSelected] = useState(true); // To track selection state
    const [val, setval] = useState("Double click to edit");
    const [isEditable, setEditable] = useState(true);
    const [isVisible, setIsVisible] = useState(true); // Track visibility

    const handleResize = (newWidth) => {
        const newFontSize = Math.min(Math.max(newWidth / 10, 16), 64); // Keep within bounds
        setFontSize(newFontSize);
    };

    const toggleBorder = () => {
        setIsSelected(!isSelected); // Toggle selection state
    };

    const toggleEditable = () => {
        setEditable(!isEditable);
    }
    const handleRemove = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }


    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 200,
                height: 50,
            }}
            onResizeStop={(e, direction, ref) => {
                handleResize(ref.offsetWidth);
            }}
            bounds="parent"
            enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
            }}
            style={{
                border: isSelected ? '1px dashed #ccc' : 'none', // Toggle border style based on selection
                padding: '5px',
                cursor: 'pointer', // Change cursor to indicate clickability
            }}
            onClick={toggleBorder} // Toggle border on click
            onDrag={() => (setIsSelected(true))}
        >
            <div onClick={toggleBorder} onDoubleClick={toggleEditable} > {/* Toggle border when text is clicked */}
                {isEditable ? (<>
                    <input type="text" value={val} onChange={(e) => setval(e.target.value)} style={{
                        width: "90%",
                        height: "90%" // Change cursor to indicate clickability
                    }} />
                    <button onClick={() => setEditable(false)}>Done</button>
                    <button onClick={handleRemove}>remove</button>
                </>) :
                    (<h1 style={{ margin: 0, fontSize: `${fontSize}px` }}>{val}</h1>)}
            </div>

        </Rnd>
    );
}

export default Text;
