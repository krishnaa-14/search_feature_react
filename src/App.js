import React from "react";
import {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [myList, setMyList] = useState(["Apple", "Samsung", "Motorola", "Oppo", "Real me", "IQ", "Pineapple"]);
  const [filteredList, setFilteredList] = useState(["Apple", "Samsung", "Motorola", "Oppo", "Real me", "IQ", "Pineapple"]);
  const [searchText, setSearchText] = useState("");

  function getFilteredItems(searchText) {

    if(searchText === "") {
      return myList;
    }

    return myList.filter((item) => 
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="container">
    <h1 className="text-center my-3">Search Feature React</h1>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Here"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setFilteredList(getFilteredItems(e.target.value));
        }}
      />
      {/*
      <div className="input-group-append">
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => setFilteredList(getFilteredItems(searchText))}
        >
          Search
        </button>
      </div>
      */}
    </div>
    {filteredList.map((item) => {
      return (
        <div key={item}>
          <ul className="list-group">
            <li className="list-group-item">{item}</li>
          </ul>
        </div>
      );
    })}
  </div>
  );
}

export default App;
