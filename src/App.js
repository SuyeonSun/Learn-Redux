import React, {useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  // items 
  let [items, setItems] = useState([]);
  let [inputValue, setInputValue] = useState(''); // useState 배열 안에 객체
  // 총개수
  let [totalItemCount, setTotalItemCount] = useState(0);
  // 금액
  let [inputValuePrice, setInputValuePrice] = useState(0);
  // 총금액
  let [totalItemPrice, setTotalItemPrice] = useState(0);

  // 함수 handleAddButtonClick
  let handleAddButtonClick = () => {
    const newItem = {
      itemName : inputValue,
      quantity: 1,
      isSelected: false,
      itemPrice : inputValuePrice, // # added
    };
    const newItems = [...items, newItem]; // items를 newItems에 deep copy
    setItems(newItems);
    setInputValue(''); // Input창 초기화
    setInputValuePrice(''); // InputPrice창 초기화

    calculateTotal();
    calculateTotalPrice();
  }

  // 함수 handleQuantityIncrease
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);

    calculateTotal();
    calculateTotalPrice();
  }

  // 함수 handleQuantityDecrease
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);

    calculateTotal();
    calculateTotalPrice();
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

  // 함수 calculateTotalPrice
  const calculateTotalPrice = () => {
    const totalItemPrice = items.reduce((totalPrice, item) => {
      return totalPrice + (item.quantity * item.itemPrice);
    }, 0);
    setTotalItemPrice (totalItemPrice);
  }

  return (
    <div className='app-background'>
      <div className='main-container'>
      <div className='title'>
        <div className='title-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></div>
        <div><b>Today's Shopping List</b></div>
      </div>
        <div className='add-item-box'>
          <div>
            {/* input 값 입력 */}
            <input className='add-item-input' placeholder='상품을 입력하세요'
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            ></input>
          </div>
          <div>
            {/* inputPrice 값 입력 */}
            <input className='add-item-input' placeholder='상품의 금액을 입력하세요'
            value={inputValuePrice} onChange={(e) => setInputValuePrice(e.target.value)}
            ></input>
          </div>
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
                    <span className='completed'> / </span>
                    <span className='completed' id='item-price'>{item.itemPrice}원</span>
                </>
              ) : (
                <>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                <span>{item.itemName}</span>
                <span> / </span>
                <span id='item-price'>{item.itemPrice}원</span>
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
      </div>
        {/* 총 수량 */}
        <div className='total'>Total : {totalItemCount}개</div>
        {/* 총 금액 */}
        <div className='price'>Price : {totalItemPrice}원</div>
      </div>
    </div>
  );
}

export default App;
