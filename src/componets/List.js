import React, { useState } from 'react';
import ItemList from './ListItem';
import Scroll from './UI/Scroll';


const List = (props) => {

    console.log(props)


    const deleteHandler = (id) => {
        props.deleteHandler(id)
    }

    return (
        <div className="relative flex flex-grow">
            <Scroll>
                <div>
                    {
                    props.collection.map(item => (
                        <ItemList key={item.id} data={item} deleteHandler={deleteHandler} />
                    ))
                    }
                </div>
            </Scroll>
        </div>
    )
}

export default List;