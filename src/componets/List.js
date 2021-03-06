import React from 'react';
import ItemList from './ListItem';
import Scroll from './UI/Scroll';


const List = ({collection, deleteHandler, editHandler}) => {

    return (
        <div className="relative flex flex-grow">
            <Scroll>
                <div>
                    {
                    collection.map(item => (
                        <ItemList
                            key={item.id}
                            data={item}
                            deleteHandler={deleteHandler}
                            editHandler={editHandler}
                        />
                    ))
                    }
                </div>
            </Scroll>
        </div>
    )
}

export default List;