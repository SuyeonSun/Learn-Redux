import React, {useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  // useState 배열 안에 객체
  let [items, setItems] = useState([]);
  let [inputValue, setInputValue] = useState('');

  // 개수
  let [totalItemCount, setTotalItemCount] = useState(0);

  // 함수 handleAddButtonClick
  let handleAddButtonClick = () => {
    const newItem = {
      itemName : inputValue,
      quantity: 1,
      isSelected: false,
    };
    const newItems = [...items, newItem]; // items를 newItems에 deep copy
    setItems(newItems);
    setInputValue(''); // Input창 초기화

    calculateTotal();
  }

  // 함수 handleQuantityIncrease
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);

    calculateTotal();
  }

  // 함수 handleQuantityDecrease
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);

    calculateTotal();
  }

  // 함수 toggleComplete 
  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  }

  // 함수 calculateTotal
	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

  return (
    <div className='app-background'>
      <div className='main-container'>

        {/* input 값 입력 */}
        <div className='add-item-box'>
          <input className='add-item-input' placeholder='장 볼 상품을 입력하세요!'
          value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddButtonClick()}></FontAwesomeIcon>
        </div>

        {/* list 보여주기 */}
        <div className='item-list'>
          {items.map((item, idx) => (
          <div className='item-container'>
            <div className='item-name' onClick={()=>toggleComplete(idx)}>
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
            {/* 수량 */}
            <div className='quantity'>
              <button>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(idx)}></FontAwesomeIcon>
              </button>
              <span>{item.quantity}</span>
              <button>
                <FontAwesomeIcon icon={faChevronRight} onClick={()=> handleQuantityIncrease(idx)}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        ))}
      {/* 총 수량 */}
      </div>
        <div className='total'>Total : {totalItemCount}</div>
      </div>
    </div>
  );
}

export default App;
