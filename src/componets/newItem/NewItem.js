import React, { useState, useEffect } from 'react';

const NewItem = ({onSave, forEdit, editedItem}) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const descriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    useEffect(() => {
        setEnteredTitle(forEdit.title);
        setEnteredDescription(forEdit.comment);
    }, [forEdit])


    const addItem = () => {
        let data = {
            title: enteredTitle,
            comment: enteredDescription,
            id: Math.random()
        };
        onSave(data)
        setEnteredTitle('');
        setEnteredDescription('');
    }

    const editItemHandler = () => {
        let data = {
            title: enteredTitle,
            comment: enteredDescription,
            id: forEdit.id
        };
        editedItem(data)
        setEnteredTitle('');
        setEnteredDescription('');
    }

    // const setEditData = (forEdit) => {
    //     setEnteredTitle(forEdit.title);
    //     setEnteredDescription(forEdit.comment);
    // }

    //     console.log(forEdit);

    return (
        <div className="flex flex-col p-2 bg-lightGray my-4">
            <span>Title: </span>
            <input className="input" type="text" value={enteredTitle} onChange={titleHandler} />
            <span>Description: </span>
            <input className="input" type="text" value={enteredDescription} onChange={descriptionHandler} />
            <div className="flex w-1/12 my-2">
                <span className="bg-lightBlue button" onClick={forEdit.title.length > 0 ? editItemHandler : addItem}>Add</span>
            </div>
        </div>
    )
}

export default NewItem;