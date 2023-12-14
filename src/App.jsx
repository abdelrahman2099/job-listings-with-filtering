import Header from './Components/Header.jsx'
import './App.css'
import data from "../data.json";
import Content from "./Components/content.jsx";
import {useState} from "react";

function App() {
  const [arr,setArr]=useState([]);
  function add(a){
      if(!arr.includes(a))
          setArr(()=>arr.concat(a));

  }
  function remove(a){
      setArr(()=>{
          let newArr=[];
          for(let i=0;i<arr.length;i++){
              if(i!==a)
                newArr.push(arr[i]);
          }
          return newArr;
      })
  }
  function clear(){
      setArr([]);
  }
  return (
    <div className="d-flex flex-column">
        <Header arr={arr} remove={remove} clear={clear} ></Header>
        <div id="content" className="d-flex flex-column align-items-center content-width mobile-width" style={{margin:"auto"}}>
            {data.map(item=> {
                    let dummy= item.languages.concat(item.tools);
                    dummy.push(item.level);
                    dummy.push(item.role);
                    let flag=true;
                    for(let i of arr){
                        if(!dummy.includes(i)){
                            flag=false;
                            break;
                        }
                    }
                    if(flag)
                        return (<Content key={item.id} item={item} add={add}></Content>);
                })
            }
        </div>
    </div>
  )
}

export default App
