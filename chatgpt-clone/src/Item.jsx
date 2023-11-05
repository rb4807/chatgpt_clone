import React, { useState } from 'react';

function Item() {
    const [items, setItems] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'What is React Dom' },
        { id: 3, text: 'React basics' },
        { id: 4, text: 'JavaScript' },
     
    ]);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        setSelectedItem(id);
    };
  

    return (
        <>
        <div>
            <ul className='p-2'>
                {items.map((item) => (
                <li className='p-2 hover:bg-grays hover:rounded-md hover:p-2' key={item.id}>
                    <svg className="icon-sm inline-block mr-4" stroke="#ffffff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    {item.text}
                    <button className='' onClick={() => handleEdit(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block hover:stroke-white icon icon-tabler icon-tabler-pencil-minus" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c5c5d2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                            <path d="M16 19h6" />
                        </svg>
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 inline-block hover:stroke-white icon icon-tabler icon-tabler-trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c5c5d2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </button>                    
                </li>
                ))}
            </ul>
        </div>
        
        </>
  );
}

export default Item;
