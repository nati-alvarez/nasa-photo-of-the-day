import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import SelectImage from "./components/SelectImage";
import Title from './components/Title';
import Date from './components/Date';
import Media from './components/Media';
import Copyright from './components/Copyright';
import Description from './components/Description';

const API_KEY = "k5sSIJGot1xNH0t5AafhbkAW49Cb6MyJ8YHZ1OTD";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState();
  console.log(date);

  useEffect(()=>{
    axios.get(`${API_URL}${API_KEY}`).then(({data})=>{
      setData(data);
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      {!data && <p>Loading...</p>}
      {data &&
      <>
        <SelectImage changeDate={setDate}/>
        <h1>NASA APOD</h1>
        <Title title={data.title}/>
        <Date date={data.date}/>
        <Media mediaType={data.media_type} mediaLink={data.hdurl || data.url}/>
        <Copyright owner={data.copyright}/>
        <Description description={data.explanation}/>
      </>}
    </div>
  );
}

export default App;
