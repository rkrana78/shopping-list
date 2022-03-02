import React, { useEffect, useState } from 'react';
import './../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons'



const listData = [
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
]
const Home = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setItems(listData);
    }, [])

    const handleAdd = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');
    }
    return (
        <div className="app-background">
            <div className="main-container">
                <div className="add-item-box">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item..' type="text" />
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleAdd()} />
                </div>
               
                <div className="item-list">
                    {
                        items.map((item, index) =>
                            <div className="item-container">
                                <div className="item-name">
                                    {item.isSelected ? (
                                        <>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                            <span className='completed'>{item.itemName}</span>
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faCircle} />
                                            <span>{item.itemName}</span>
                                        </>
                                    )}
                                </div>
                                <div className="quantity">
                                    <button>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <span> {item.quantity} </span>
                                    <button>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>)
                    }
                </div>
                <div className="total"> Total: 6</div>
            </div>
        </div>
    );
};

export default Home;