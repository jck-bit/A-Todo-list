import Do_itContextProvider from "./context/Do_itContext";
import Navbar from './components/Navbar'
import Todlist from "./components/Todlist";
import DoitForm from "./components/DoitForm";


function App() {
  return (

    <div className="App">
      <Do_itContextProvider>
        <Navbar/>
        <Todlist/>
        <DoitForm/>
      </Do_itContextProvider>
    </div>
  );
}

export default App;
