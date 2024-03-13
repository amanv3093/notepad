import React, { useState } from 'react';
import { useWriteContext } from '../Context/Context'; // Assuming the correct case for the imported hook
import Left from './Left';
import Right from './Right';

function Notepad() {
   
    
    
    const { write, setWrite } = useWriteContext(); 
    
    const createTab = () => {
        setWrite([...write, { 
            title: '# Enter title here',
            data:[]
            
            
            
         }]);
    };

   

    return (
        
        <div>
            {write.length > 0 ? (
                <>
                <div className='main'>
                    <Left createTab={createTab}/>
                    <Right />
                </div>
                   
                </>
            ) : (
                <>
                
                    <div className='empty'>
                        <h2>You have no notes</h2>
                        <button onClick={createTab}>Create one now</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Notepad;
