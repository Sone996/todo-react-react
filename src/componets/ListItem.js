import React from 'react';
import Card from './UI/Card';

const ListItem = (props) => {

    const editItem = () => {
        console.log('edit')
    }

    const deleteItem = () => {
        props.deleteHandler(props.data.id)
    }


    return (
        <Card bg="bg-lightGray">
            <span className="text-green-300 text-2xl py-2">{props.data.title}</span>
            <span className="text-green-300">{props.data.comment}</span>
            <div className="flex justify-end">
                <span 
                    className="button bg-lightBlue"
                    onClick={editItem}
                >Edit</span>
                <span 
                    className="button bg-darkRed ml-3"
                    onClick={deleteItem}
                >Delete</span>
            </div>
        </Card>
    )
}

export default ListItem;