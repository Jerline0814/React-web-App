import './App.css';
import {useState} from "react";
import { Users } from "./users";
import table from "./table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["Id","First Name","Last Name","Email"]
  console.log(Users[0])
  
  const search = (data)=>{
    return data.filter(
      (item)=>
      item.Id.tolowerCase().includes(query)||
      item.first_nme.tolowerCase().includes(query)||
      item.last_name.tolowerCase().includes(query)||
      item.Email.tolowerCase().includes(query)||
    );
  };

  return (
    <div className="App">
      <input type="text"
       placeholder="Search..." 
       className="search" 
       onChange={(e) => setQuery(e.target.value)}/>
      <table data={search(Users)}></table>
      </div>
  );
}

export default App;