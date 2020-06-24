import React, {useState, useEffect} from "react";
import axios from "axios";
import styledComponents from "styled-components";
import "./App.css";

import SelectImage from "./components/SelectImage";
import Title from './components/Title';
import Date from './components/Date';
import Media from './components/Media';
import Copyright from './components/Copyright';
import Description from './components/Description';

const API_KEY = "k5sSIJGot1xNH0t5AafhbkAW49Cb6MyJ8YHZ1OTD";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

const AppContainer = styledComponents.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Space Mono;
`;

const AppTitle = styledComponents.h1`
  font-family: Ultra;
  font-size: 4rem;
  letter-spacing: -20px;
  word-spacing: 20px;
  text-align: center;
  margin: 2vh 0;
`;

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState("");

  useEffect(()=>{
    axios.get(`${API_URL}${API_KEY}&date=${date}`).then(({data})=>{
      setData(data);
    }).catch(err=>{
      console.log(err);
    })
  }, [date]);

  return (
    <AppContainer className="App">
      {!data && <p>Loading...</p>}
      {data &&
      <>
        <SelectImage changeDate={setDate}/>
        <AppTitle>NASA APOD</AppTitle>
        <Title title={data.title}/>
        <Date date={data.date}/>
        <Media mediaType={data.media_type} mediaLink={data.hdurl || data.url} owner={data.copyright}/>
        <Description description={data.explanation}/>
      </>}
    </AppContainer>
  );
}

export default App;
