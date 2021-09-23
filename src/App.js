import logo from "./logo.svg";
import Header from "./MyComponent/Header"
import { Footer } from "./MyComponent/Footer";
import { TODOs } from './MyComponent/TODOs'

function App() {
  return ( <>

    <Header title="TODOs"/>
    <TODOs/>
    <Footer/>
  
  </>);
}


export default App;