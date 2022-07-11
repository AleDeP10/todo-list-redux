import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/item';

import './style.css';

const AddItem = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        console.log('handleChange', { event });
        setTitle(event.target.value);
    }

    const handleClick = (event) => {
        console.log('handleClick', { event, title });
        dispatch(addItem(title));
        setTitle('');
    }

    return <div>
        <input
            type='text'
            value={title}
            placeholder='Enter your task here'
            onChange={handleChange}>
        </input>
        <input
            className='button'
            type='button'
            onClick={handleClick}
            value='Add To List'>
        </input>
    </div>
}

export default AddItem;