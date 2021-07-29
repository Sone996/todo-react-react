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

]

const Home = () => {

    const [taskList, setTaskList] = useState(initItems);
    const [forEdit, setForEdit] = useState({
        title: '',
        comment: ''
    });

    const onSave = (item) => {
        if(Object.keys(item).length > 0) {
            setTaskList([item, ...taskList])
        }
    }

    const deleteFunction = (id) => {
        setTaskList(taskList.filter(item => item.id !== id));
    }

    const sendEdit = (data) => {
        if (!data) {
            return;
        }
        setForEdit(data)
    }

    const editedItem = (data) => {
        if(Object.keys(data).length > 0) {
            var edited = [];
            taskList.map((item, index) => {
                if(item.id === data.id){
                    edited[index] = data;
                } else {
                    edited[index] = item;
                }
            })
            setTaskList(edited);
        }
    }

    return (
        <div className="items-center flex flex-col w-full pt-10">
            <span className="text-5xl text-green-300">To-Do List</span>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow">
                {/* <Card> */}
                    <NewItem onSave={onSave} forEdit={forEdit} editedItem={editedItem}/>
                    <List collection={taskList} deleteHandler={deleteFunction} editHandler={sendEdit}/>
                {/* </Card> */}
            </div>
        </div>
    );
}
export default Home;