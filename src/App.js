import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "k5sSIJGot1xNH0t5AafhbkAW49Cb6MyJ8YHZ1OTD";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
  const [data, setData] = useState();

  useEffect(()=>{
    axios.get(`${API_URL}${API_KEY}`).then(({data})=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <h1>NASA APOD</h1>
    </div>
  );
}

export default App;
