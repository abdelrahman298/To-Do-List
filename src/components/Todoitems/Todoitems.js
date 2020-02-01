import React, { Component } from "react";
const Todoitems = (props) => {
    const { items, deleteItem } = props;
    let length = items.length;

    const ListOfItems = length ? (
        items.map(items => {
            return (
                <div key={items.id}>
                    <span className="name">{items.name}</span>
                    <span className="age">{items.age}</span>
                    <span className="action icon" onClick={() => deleteItem(items.id)}>&times;</span>
                </div>
            )

        })
    ) : (
            <p>there's no items here</p>
        )

    return (
        <div className="list-items">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListOfItems}
        </div>
    )
}

export default Todoitems