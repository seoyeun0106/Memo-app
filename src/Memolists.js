import React, { useRef, useState, useEffect } from "react";
import './App.scss';

function Board({IsTyping,setIsTyping}){
    
    const [memolist,setMemolist]= useState([]);
    const id=useRef(0);
    function createMemo(){
        let memo={
            text:'',
            id:id.current,
            color:id.current%4
        }        
    setMemolist(memolist.concat(memo));
    id.current++;
    } 

    return (
        <div onClick={()=>{console.log(memolist)}} className="end">
        <button className="plusBtn" onClick={()=>{createMemo();}}>
            <svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/>
            </svg>
        </button>
        <Memolists memolist={memolist} setMemolist={setMemolist} IsTyping={IsTyping} setIsTyping={setIsTyping}>  
        </Memolists>
        </div>
        )
}

//canvas에 className을 줄 수 있는가?
function Memolists({memolist,setMemolist,IsTyping,setIsTyping}){
    const canvasRef=useRef(null);
    const [ctx, setCtx] = useState();
    const [painting, setPainting] = useState(true);
    const selection=useRef();
    const draw = ({nativeEvent}) => {
        if(ctx){
            const {offsetX,offsetY}= nativeEvent;
            if(!painting){
            ctx.beginPath();
            ctx.moveTo(offsetX,offsetY);
                }
            else{
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
                }
        }
    }
    function finishDraw(){ 
        setPainting(false);  
    }
    function initDraw(event){
        event.persist();
        setPainting(true);        
       }

        
    useEffect(() => {
    if(!IsTyping){
        const canvas = canvasRef.current;
        const context= canvas.getContext('2d');  
        canvas.width=180;
        canvas.height=180;  
        context.strokeStyle="red";
        context.lineWidth="2";
        setCtx(context);
    }
    },[IsTyping]); 
    
    function DeleteItem(id){
        setMemolist(
        memolist.filter((memo)=>{return memo.id!==id})
        );
            console.log(ctx)
        }
    function modifyItem(value,i){
        let copy=[...memolist];
        copy[i].text=value;
        return copy;
    }
    function underline(){
            //선택 영역 찾기
            const text = window.getSelection().toString();
            const range=window.getSelection().getRangeAt(0);
            //태그 생성
            const node = document.createElement('u');
            node.innerText=text;
            //태그 내부에 선택영역의 text 넣기
            console.log(node);
            console.dir(range.deleteContents);
            range.insertNode(node);

            //선택영역을 지우고 생성한 태그를 넣어 바꾸기
            
        }
    return(
        <div className="flex">
        {memolist.map((memo,i)=>{
            return(
            <div key={memo.id} className={'memo_'+memo.color} >
            {/*value에 굳이 왜 state 값을 넣어주는지?? */} 
            <button className="closeBtn" onClick={()=>{DeleteItem(memo.id)}}>X</button> 
                <textarea value={memo.text} key={memo.id}  
                    onChange={(e)=>{setMemolist(modifyItem(e.target.value,i));}} className={IsTyping?"z-index text":"text"}>
                </textarea>
                <canvas className="canvas" ref={canvasRef} onMouseDown={(e)=>{initDraw(e); }} onMouseMove={draw} onMouseLeave={finishDraw} onMouseUp={()=>{finishDraw();}}></canvas>
            </div>
                    )
                }
            )
        }   
        </div>
    )

}
export default Board;