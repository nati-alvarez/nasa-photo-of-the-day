import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";

//Material UI
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import SelectImage from "./components/SelectImage";
import Title from './components/Title';
import Date from './components/Date';
import Media from './components/Media';
import Description from './components/Description';

const API_KEY = "k5sSIJGot1xNH0t5AafhbkAW49Cb6MyJ8YHZ1OTD";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="


const useStyles = makeStyles(theme=>({
  h1: {
    marginTop: "1rem"
  },
  card: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },
  container: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  useEffect(()=>{
    axios.get(`${API_URL}${API_KEY}&date=${date}`).then(({data})=>{
      setData(data);
    }).catch(err=>{
      console.log(err);
    })
  }, [date]);

  const classes = useStyles();

  return (
    <CssBaseline>
      <Container className={"App " + classes.container}>
        {!data && <p>Loading...</p>}
        {data &&
        <>
          <SelectImage changeDate={setDate}/>
          <Typography className={classes.h1} gutterBottom={true} color="primary" component="h1" variant="h3">NASA APOD</Typography>
          <Title title={data.title}/>
          <Date date={data.date}/>
          <Card className={classes.card}>
            <Media mediaType={data.media_type} mediaLink={data.hdurl || data.url} owner={data.copyright}/>
            <Description owner={data.copyright} description={data.explanation}/>
          </Card>
        </>}
      </Container>
    </CssBaseline>
  );
}

export default App;
