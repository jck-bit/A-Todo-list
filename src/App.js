import DoitContextProvider from "./context/DoitContext";
import Navbar from './components/Navbar'
import Todlist from "./components/Todlist";
import DoitForm from "./components/DoitForm";


function App() {
  return (

    <div className="App">
      <DoitContextProvider>
        <Navbar/>
        <Todlist/>
        <DoitForm/>
      </DoitContextProvider>
    </div>
  );
}

export default App;
