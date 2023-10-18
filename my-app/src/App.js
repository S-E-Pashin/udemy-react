import {Component} from "react";
import './App.css';

const Header = () => {
  return <h2>Текст первого компонента</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styleField = {
//     width: '300px'
//   };
//
//   return <input
//           placeholder={holder}
//           type="text"
//           style={styleField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter hereооо';
    const styleField = {
      width: '300px'
    };

    return <input
      placeholder={holder}
      type="text"
      style={styleField}/>
  }
}


const Btn = () => {
  const text = 'Log in';
  const logged = true;

  // const res = () => {
  //   return 'Log in';
  // }

  return <button>{logged ? 'Enter' : text}</button>
}


function App() {
  return (
    <div className="App">

      <Header/>
      <Field/>
      <Btn/>

    </div>
  );
}

export {Header}
export default App;
