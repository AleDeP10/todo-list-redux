import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './style.css';

const Header = () => {
    const items = useSelector(store => store.items);
    const total = items.length;

    const [todo, setTodo] = useState(0);

    useEffect(() => {
        let count = 0;
        items.map(item => {
            if (!item.done) {
                count++;
            }
        });
        setTodo(count);
    }, [items])

    return <h3 className='title'>
        TODO LIST ({todo}/{total})
    </h3>
}

export default Header