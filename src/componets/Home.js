import React, { useState } from 'react';
//import Card from './UI/Card';
import List from './List';
import NewItem from './newItem/NewItem';

const itemData = [
    {
        id: 1,
        title: 'Item 1',
        comment: 'Test Test'
    },
    {
        id: 2,
        title: 'Item 2',
        comment: 'Test Test'
    },
    {
        id: 3,
        title: 'Item 3',
        comment: 'Test Test'
    },
    {
        id: 4,
        title: 'Item 4',
        comment: 'Test Test'
    },
    {
        id: 5,
        title: 'Item 5',
        comment: 'Test Test'
    },
    {
        id: 6,
        title: 'Item 6',
        comment: 'Test Test'
    },
    {
        id: 7,
        title: 'Item 7',
        comment: 'Test Test'
    },
    {
        id: 8,
        title: 'Item 8',
        comment: 'Test Test'
    },

]

const Home = () => {

    const [newTask, setNewTask] = useState(itemData);

    const onSave = (item) => {
        if(Object.keys(item).length > 0) {
            setNewTask([item, ...itemData])
        }
    }

    return (
        <div className="items-center flex flex-col w-full pt-10">
            <span className="text-5xl text-green-300">To-Do List</span>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow">
                {/* <Card> */}
                    <NewItem onSave={onSave} />
                    <List collection={newTask} />
                {/* </Card> */}
            </div>
        </div>
    );
}
export default Home;