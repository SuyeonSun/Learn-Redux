import React, {useState} from 'react';
import './App.css';

function App() { // React는 jsx 사용

  // var [a, b] = [10, 100]; // a에는 10, b에는 100을 담기
  let [title, setTitle] = useState (['강남 맛집 후기', '강남 카페 추천']);
  let [like, setLike] = useState(0);
  let [hate, setHate] = useState(0);

  // function titleChange() {
  //   var newTitle = [...title];
  //   newTitle[0] = '신촌 맛집 후기';
  //   setTitle(newTitle);
  // }

  {/* Modal */}
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>

      <div className="list">
        <h3> {title[0]} 
          <span onClick={()=> {setLike(like+1)}}> 👍 </span> {like} 
          <span onClick={()=> {setHate(hate+1)}}> 👎 </span> {hate} 
        </h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {title[1]} 
        </h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>

      {/* Modal */}
      <button onClick={ ()=>{ modal변경(!modal) } }> 열기닫기 </button>
      { 
         modal === true 
         ? <Modal />
         : null
      }

    </div> 
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2> 제목 </h2>
      <p> 날짜 </p>
      <p> 상세내용 </p>
    </div>
  )
}

export default App;