import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Step 1
// Add the words array here as a const
// const words = .......
// Make a sensible git commit

class App extends React.Component {
  randomWord() {
    // Step 2
    // choose a random word from the words const
    // assign the randomly chosen word to this variable below
    // Make a sensible git commit
    let word

    // Step 3
    // fill out the h2 headings below with properties of the word
    // for example: { word.word } { word.meaning }
    // Make a sensible git commit
    return(
      <>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      </>
    )
  }

  render() {
    return(
      <>
      <h1>Hello World</h1>
      {/* Step 4
       Call the randomWord function here like this
       { this.randomWord() }
       Make a sensible git commit
        */}
      </>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
