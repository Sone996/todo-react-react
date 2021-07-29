import React, { useState, useEffect } from 'react';
import List from './List';
import NewItem from './newItem/NewItem';

const initItems = [
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

]

const Home = () => {

    const [taskList, setTaskList] = useState([
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
    
    ]);

    // useEffect(() => {
    //     console.log('efferct')
    // }, [taskList])

    const onSave = (item) => {
        if(Object.keys(item).length > 0) {
            setTaskList([item, ...taskList])
        }
    }

    const deleteFunction = (id) => {
        setTaskList(taskList.filter(item => item.id != id));
    }

    return (
        <div className="items-center flex flex-col w-full pt-10">
            <span className="text-5xl text-green-300">To-Do List</span>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow">
                {/* <Card> */}
                    <NewItem onSave={onSave} />
                    <List collection={taskList} deleteHandler={deleteFunction} />
                {/* </Card> */}
            </div>
        </div>
    );
}
export default Home;