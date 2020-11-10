import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Park Jimin", age: 25 },
      { name: "Min Yoongi", age: 28 },
      { name: "Hwasa", age: 25 },
    ],
  });

  const [otherState, setOtherState] = useState('twit');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Paige", age: 25 },
        { name: "Caity", age: 29 },
        { name: "Hwasa", age: 25 },
      ],
    });
  }

  return (
    <div className="App">
      <h1>hey</h1>
      <button onClick={switchNameHandler}>switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default App;

// constructor() {
//     super();
//     this.state = {
//   persons: [
//     { name: 'Park Jimin', age: 25 },
//     { name: 'Min Yoongi', age: 28 },
//     { name: 'Hwasa', age: 25 },
//   ],
//   otherState: 'some other thing'
// }
//   }

//   switchNameHandler = () => {
//     // console.log('clicked');
    // this.setState({
    //   persons: [
    //     { name: "Paige", age: 25 },
    //     { name: "Caity", age: 29 },
    //     { name: "Hwasa", age: 25 },
    //   ],
    // });
//   }
