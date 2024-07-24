import React, { useRef, useState } from "react";

export default function Captcha({ initialIsOpen, setcapsolved, imgs, ans }) {
    
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    if (inputValue ===ans) {
        console.log(inputValue);
    setcapsolved(false); 
    setIsOpen(false);
    }else{
        window.location.reload();

    }
    
  };

  if (isOpen) {
    return (
        <div className="no-dot"  id="captcha">
          <div id="div">
            <img src={imgs} alt="" />
            <div className="width" id="textarea">
            <input className="width"  type="text" ref={inputRef} placeholder="Captcha" required/>
            <button className="width"  onClick={handleButtonClick}>Submit</button>
            </div>
          </div>
        </div>
    );
  }

  return null;
}
