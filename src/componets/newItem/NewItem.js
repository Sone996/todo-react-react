import React, { useState } from 'react';

const NewItem = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const descriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    }


    const addItem = () => {
        let data = {
            title: enteredTitle,
            comment: enteredDescription,
            id: Math.random()
        };
        // data.title.length > 0 ? props.onSave(data) : null;
        props.onSave(data)
    }
    return (
        <div className="flex flex-col p-2 bg-lightGray my-4">
            <span>Title: </span>
            <input className="input" type="text" value={enteredTitle} onChange={titleHandler} />
            <span>Description: </span>
            <input className="input" type="text" value={enteredDescription} onChange={descriptionHandler} />
            <div className="flex w-1/12 my-2">
                <span className="bg-lightBlue button" onClick={addItem}>Add</span>
            </div>
        </div>
    )
}

export default NewItem;