import React from 'react';
//import Card from './UI/Card';
import List from './List';
import NewItem from './newItem/NewItem';

const Home = () => {
    return (
        <div className="items-center flex flex-col w-full pt-10">
            <span className="text-5xl text-green-300">To-Do List</span>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow">
                {/* <Card> */}
                    <NewItem />
                    <List />
                {/* </Card> */}
            </div>
        </div>
    );
}
export default Home;