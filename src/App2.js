import logo from './logo.svg';
import './App.css';
import React, { useState} from "react";
import { LangChain } from "langchain";
import { OpenAI } from "langchain/llms/openai";

import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';



function App() {
  const [AIMessage, setAIMessage] = useState("you haven't clicked on the page yet");
  const [Answer, setAnswer] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;


  async function myFunction() {
    const model = new OpenAI({ openAIApiKey: apiKey, temperature: 0.9 });
    console.log(model)
    let x = "Regarding the following input, create a useable .json file with categories based on ocular anatomy; "

//     Please provide a comprehensive report of the patient's ocular anatomy. Include any abnormalities, diseases, or conditions that are relevant to their ocular health.

// The report should cover the following anatomical structures:

// Cornea
// Iris
// Lens
// Retina
// Optic Nerve
// For each structure, please provide the following information:

// General appearance
// Any relevant measurements (e.g. corneal thickness, lens power)
// Any abnormalities, diseases, or conditions
// Treatment plans (if applicable)
// Please format your report as a JSON string, with each structure as a separate object and the relevant information as key-value pairs within each object. The overall JSON object should be an array of the individual structure objects.

// For example:
// [
// {
// "Structure": "Cornea",
// "General Appearance": "Clear and smooth",
// "Thickness": "560 microns",
// "Abnormalities": [
// {
// "Name": "Keratoconus",
// "Severity": "Mild",
// "Treatment": "Topical eye drops"
// }
// ]
// },
// {
// "Structure": "Iris",
// "General Appearance": "Brown with no abnormalities",
// "Pupil Size": "3mm",
// "Abnormalities": []
// },
// // ...and so on for each structure
// ]
    let userquestion = "Left Cornea is clear, right retina is healthy"
    let prompt = x + userquestion
  
    const res = await model.call(
        prompt
      );
    console.log("response: " + res);
    setAIMessage(res)

  }

  async function parks3Step(){

    let RSR = 0
    let RSO = 0
    let LSO = 0
    let LSR = 0
    let RIR = 0
    let RIO = 0
    let LIO = 0
    let LIR = 0
    
    console.log('test')

    setAnswer(RSR)


// Which eye is hyper deviated in primary gaze?
// Is the vertical deviation greater in right gaze or left gaze?
// Is the vertical deviation greater with right head tilt or left head tilt?

  }

  return (
    <div className="App">
      <button onClick={parks3Step}></button>
      <header onClick={myFunction}  className="App-header">
        <h1>Isolated Muscle: {Answer}</h1>
        <h1>Here is the response: {AIMessage}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
