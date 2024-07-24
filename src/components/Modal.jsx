import { background, position } from '@chakra-ui/react';
import { color, transform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';


const BACKGROUND_STYLE ={
position: 'fixed',
top: '0',
bottom:'0',
left:'0',
right:'0',
backgroundColor:'rgb(0,0,0,0.7)',
zIndex:1000,
}

export default function Modal({isOpen, string}){
    if (isOpen) {
        
        return(
            <div style={BACKGROUND_STYLE}>
                <div id='stringmodal'>{string}</div>
            </div>
        )
    }
    return null;
    
}