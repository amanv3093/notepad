import React, { createContext, useContext, useState } from "react";


export const WriteContext = createContext(0);

export const useWriteContext = () => {
    return useContext(WriteContext);
}


export const WriteContextProvider = (props) => {
   
    const [write, setWrite] = useState([]);
    const [itemIndex,setItemIndex]=useState(0);

    return (
        <WriteContext.Provider value={{ write, setWrite,itemIndex,setItemIndex}}>
            {props.children}
        </WriteContext.Provider>
    );
}


