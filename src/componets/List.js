import React from 'react';
import ItemList from './ItemList';
import Scroll from './UI/Scroll';

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
    {
        title: 'Item 6',
        comment: 'Test Test'
    },
    {
        title: 'Item 7',
        comment: 'Test Test'
    },
    {
        title: 'Item 8',
        comment: 'Test Test'
    },

]

const List = () => {
    return (
        <div className="relative flex flex-grow">
            <Scroll>
                <div>
                    <ItemList data={itemData[0]}/>               
                    <ItemList data={itemData[1]}/>
                    <ItemList data={itemData[2]}/>
                    <ItemList data={itemData[3]}/>
                    <ItemList data={itemData[4]}/>
                    <ItemList data={itemData[5]}/>
                    <ItemList data={itemData[6]}/>
                    <ItemList data={itemData[7]}/>
                </div>
            </Scroll>
        </div>
    )
}

export default List;