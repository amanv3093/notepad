// Left.js
import React from 'react';
import { useWriteContext } from '../Context/Context';

function Left({ createTab }) {
    const { write, setWrite ,itemIndex,setItemIndex} = useWriteContext();
    

    const deleteTab = (index) => {
        const updatedWrite = write.filter((_,idx) => index!== idx);
        if(index<=updatedWrite.length-1){
            setItemIndex(index);
            
        }else{
            setItemIndex(0);
         
        }
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
                    <div className='left-items' key={note.id} >
                        
                        <p onClick={() => checkTab(index)}>{note.title}</p>
                        
                        <span  onClick={() => deleteTab(index)} className="material-symbols-outlined delete-icon">delete</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Left;
