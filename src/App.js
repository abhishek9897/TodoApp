import './App.css';
import React, { useState } from 'react';
import ToDoList from './TodoList';

function App(props) {

  const [item, updateitem] = useState("");
  const [List, SetListData] = useState([]);
  const events = (obj) => {
    updateitem(obj.target.value);
  }

  const additem = () => {
    if(item==="")return;
   const update=[...List,item];
   
   SetListData(update);
    updateitem("");
  }

  
  const remove = (id) =>{
    console.log("deleted");
   const Update=List.filter((ele,index)=>{

    return id!=index;
   });
   SetListData(Update)
   
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <span><h1>ToDo List</h1></span>
          <div className="inner_div">
            <input className="inp" type="text" placeholder="Add an item" onChange={events} value={item}></input>
            <button id="btn1" onClick={additem}> + </button>
          </div>
          <br /><br />
          <ul>
            {
              List.map(function (itemvalue, index) {
                return (<ToDoList
                  itm={itemvalue}
                  key={index}
                  id={index}
                  deleteitem={remove}
                />)
              })
            }


          </ul>
        </div>
      </div>
    </>
  );
}

export default App;