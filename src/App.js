import React, {useState} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  // useState 배열 안에 객체
  // const [items, setItems] = useState([
  //   { itemName: 'item 1', quantity: 1, isSelected: false },
  //   { itemName: 'item 2', quantity: 3, isSelected: true },
  //   { itemName: 'item 3', quantity: 2, isSelected: false },
  // ]);
  let [items, setItems] = useState([{itemName: 'item1', quantity: 1, isSelected: false}]);
  let [inputValue, setInputValue] = useState('');

  let handleAddButtonClick = () => {
    const newItem = {
      itemName : inputValue,
      
    }
  }

  return (
    <div className='app-background'>
      <div className='main-container'>
        <div className='add-item-box'>
          <input className='add-item-input' placeholder='장 볼 상품을 입력하세요!'
          value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </div>
        <div className='item-list'>
          {items.map((item, idx) => (
          <div className='item-container'>
            <div className='item-name'>
              {item.isSelected ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                  <span className='completed'>{item.itemName}</span>
                </>
              ) : (
                <>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                <span>{item.itemName}</span>
                </>
              )}
            </div>
            <div className='quantity'>
              <button>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </button>
              <span>1</span>
              <button>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className='total'>Total : 6</div>
      </div>
    </div>
  );
}

export default App;
