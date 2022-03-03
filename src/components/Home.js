import React, { useEffect, useState } from 'react';
import './../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons'



/*{const listData = [
    { itemName: 'item 1', quantity: 0, isSelected: false },
    { itemName: 'item 2', quantity: 0, isSelected: true },
    { itemName: 'item 3', quantity: 0, isSelected: false },
]}*/
const Home = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);

    // useEffect(() => {
    //     setItems(listData);
    // }, [])

    const handleAdd = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');

        calculateTotal()
    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;
        setItems(newItems);

        calculateTotal()

    }

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;
        setItems(newItems);
        calculateTotal();

    }

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected

        setItems(newItems);

    }

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity
        }, 0);

        setTotalItemCount(totalItemCount)
    }

    const handleDelete = (index) => {
        const newItems = items.splice( 1)
        
        setItems(newItems)
        console.log(newItems)
        calculateTotal()
        
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
                                <div className="item-name" onClick={() => toggleComplete(index)}>
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
                                        <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                                    </button>
                                    <span> {item.quantity} </span>
                                    <button>
                                        <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                                    </button>
                                </div>
                                <button >
                                    <FontAwesomeIcon className='remove' icon={faRemove} onClick={() => handleDelete(item.index)} />
                                </button>
                            </div>)
                    }
                </div>
                <div className="total"> Total: {totalItemCount}</div>
            </div>
        </div>
    );
};

export default Home;