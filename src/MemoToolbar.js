import React from "react";
function MemoToolbar({IsTyping,setIsTyping}){
return(
    <div className="toolbar">
        <button onClick={()=>{setIsTyping(true)}} >
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512"><path d="M416 416h-25.81L253.1 52.76c-4.688-12.47-16.57-20.76-29.91-20.76s-25.34 8.289-30.02 20.76L57.81 416H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32H126.2l17.1-48h159.6l17.1 48H320c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32S433.7 416 416 416zM168.2 304L224 155.1l55.82 148.9H168.2z"/></svg>
        </button>
        
        <button onClick={()=>{setIsTyping(false)}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 576 512"><path d="M143.1 320V248.3C143.1 233 151.2 218.7 163.5 209.6L436.6 8.398C444 2.943 452.1 0 462.2 0C473.6 0 484.5 4.539 492.6 12.62L547.4 67.38C555.5 75.46 559.1 86.42 559.1 97.84C559.1 107 557.1 115.1 551.6 123.4L350.4 396.5C341.3 408.8 326.1 416 311.7 416H239.1L214.6 441.4C202.1 453.9 181.9 453.9 169.4 441.4L118.6 390.6C106.1 378.1 106.1 357.9 118.6 345.4L143.1 320zM489.4 99.92L460.1 70.59L245 229L330.1 314.1L489.4 99.92zM23.03 466.3L86.06 403.3L156.7 473.9L125.7 504.1C121.2 509.5 115.1 512 108.7 512H40C26.75 512 16 501.3 16 488V483.3C16 476.1 18.53 470.8 23.03 466.3V466.3z"/></svg>
        </button>
        
        <button onClick={()=>{console.log(IsTyping)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 15H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm.5 15h-17c-.28 0-.5.22-.5.5s.22.5.5.5h17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"/></svg>
        </button>

        <button onClick={()=>{console.log("")}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/></svg>
        </button>
    </div>
    
)    

}
export default MemoToolbar;