import './App.css';
import Header from './components/header/header.js'
import Body from './components/body/body.js'

function App() {
  return (
    <div className="container" 
    style={{
      margin:"auto",
      width: "65%",
      border : "3px solid black",
      padding : "8px",
      fontWeight:"bold"
    }}>
     <Header name="Deepak Sarkar" />
     <Body />
    </div>
  );
}

export default App;
