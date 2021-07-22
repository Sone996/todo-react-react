import React from 'react';
import ItemList from './ItemList';

const itemData = [
    {
        title: 'Item 1',
        comment: 'Test Test'
    },
    {
        title: 'Item 2',
        comment: 'Test Test'
    },
    {
        title: 'Item 3',
        comment: 'Test Test'
    },
    {
        title: 'Item 4',
        comment: 'Test Test'
    },
    {
        title: 'Item 5',
        comment: 'Test Test'
    },

]

const List = () => {
    return (
        <div className="flex flex-col">
            <ItemList data={itemData[0]}/>
            <ItemList data={itemData[1]}/>
            <ItemList data={itemData[2]}/>
            <ItemList data={itemData[3]}/>
            <ItemList data={itemData[4]}/>
        </div>
    )
}

export default List;