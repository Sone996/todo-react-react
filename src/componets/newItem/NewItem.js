const NewItem = () => {

    const addItem = () => {
        console.log('adding item');
    }
    return (
        <div className="flex flex-col p-2 bg-lightGray my-4">
            <span>Title: </span>
            <input className="input" type="text" />
            <span>Description: </span>
            <input className="input" type="text" />
            <div className="flex w-1/12 my-2">
                <span className="bg-lightBlue button" onClick={addItem}>Add</span>
            </div>
        </div>
    )
}

export default NewItem;