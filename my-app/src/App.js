import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Текст первого компонента</h2>
}

const Field = () => {
  return <input placeholder="Type here" type="text"/>
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

export default App;
