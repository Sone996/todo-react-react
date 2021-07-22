import React from 'react';
import Card from './UI/Card';

const ListItem = (props) => {
    return (
        <Card bg="bg-lightBlue">
            <span className="text-green-300 text-2xl py-2">{props.data.title}</span>
            <span className="text-green-300">{props.data.comment}</span>
            <div className="flex"></div>
        </Card>
    )
}

export default ListItem;