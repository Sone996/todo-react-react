import React, { useState } from 'react';
import ItemList from './ItemList';
import Scroll from './UI/Scroll';


const List = ({ collection }) => {

    // const [expenses, setExpenses] = useState(props.addItemHandler);

    // console.log(props)

    // const addItemHandler = (data) => {
    //     console.log('sasjaskasjk', data)
    //     return expenses;
    // }

    return (
        <div className="relative flex flex-grow">
            <Scroll>
                <div>
                    {
                    collection.map(item => (
                        <ItemList key={item.id} data={item}/>
                    ))
                    }
                </div>
            </Scroll>
        </div>
    )
}

export default List;