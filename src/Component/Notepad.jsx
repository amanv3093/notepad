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
                        {/* <button >Create one now</button> */}
                        <button className='empty-btn' onClick={createTab}>
                            <span class="span-mother">
                              <span>C</span>
                              <span>r</span>
                              <span>e</span>
                              <span>a</span>
                              <span>t</span>
                              <span>e</span>
                              <span className='sp'> </span>
                              <span>o</span>
                              <span>n</span>
                              <span>e</span>
                              <span className='sp'> </span>
                              <span>n</span>
                              <span>o</span>
                              <span>w</span>
                            </span>
                            <span class="span-mother2">
                              <span>C</span>
                              <span>r</span>
                              <span>e</span>
                              <span>a</span>
                              <span>t</span>
                              <span>e</span>
                              <span className='sp'> </span>
                              <span>o</span>
                              <span>n</span>
                              <span>e</span>
                              <span className='sp'> </span>
                              <span>n</span>
                              <span>o</span>
                              <span>w</span>
                            </span>
                        </button>

                    </div>
                </>
            )}
        </div>
    );
}

export default Notepad;
