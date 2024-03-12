// Left.js
import React from 'react';
import { useWriteContext } from '../Context/Context';

function Left({ createTab }) {
    const { write, setWrite, itemIndex, setItemIndex } = useWriteContext();
    console.log(itemIndex);

    const deleteTab = (index) => {
        console.log(index);
        const updatedWrite = write.filter((_,idx) => index!== idx);
        setWrite(updatedWrite);
    };

    const checkTab = (index) => {
        setItemIndex(index);
    };

    return (
        <div className='left'>
            <div className='left-head'>
                <h1>NOTES</h1>
                <span onClick={createTab} className="material-symbols-outlined plus">add</span>
            </div>
            <div className='left-items-box'>
                {write.map((note, index) => (
                    <div className='left-items' key={note.id} onClick={() => checkTab(index)}>
                        
                        <p>{note.title}</p>
                        {
                            console.log('aman')
                        }
                        <span onClick={() => deleteTab(index)} className="material-symbols-outlined delete-icon">delete</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Left;
