import React, { useState } from 'react';
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

    const [taskList, setTaskList] = useState(initItems);

    const onSave = (item) => {
        if(Object.keys(item).length > 0) {
            setTaskList([item, ...taskList])
        }
    }

    const deleteFunction = (id) => {
        let deleting = taskList;
        taskList.map((item, index) => {
            if(item.id === id) {
                return deleting.splice(index, 1);
            }
        });
        setTaskList(deleting);
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