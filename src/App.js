import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['글제목1', '글제목2', '글제목3']);
  let [modal, setModal] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>

      {
        title.map(function(element, i){
          return (
            <div onClick={()=>{누른제목변경(i)}}>{element}</div>
          )
        })
      }

      <button onClick={()=>{누른제목변경(0)}}>1</button>
      <button onClick={()=>{누른제목변경(1)}}>2</button>
      <button onClick={()=>{누른제목변경(2)}}>3</button>

      {/* button */}
      <button onClick={() => {setModal(!modal)}}>열고닫기</button>
      {
        modal === true
        ? <Modal title={title} 누른제목={누른제목}></Modal>
        : null
      }

    </div> 
  );
}

function Modal(props) {
  return(
    <div className="modal">
      {props.title[props.누른제목]}
    </div>
  )
}

export default App;
