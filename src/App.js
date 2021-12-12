import Do_itContextProvider from "./context/Do_itContext";
import Navbar from './components/Navbar'





function App() {
  return (
    <div className="App">
      <Do_itContextProvider>
       <Navbar/>
      </Do_itContextProvider>
      </div>
  );
}

export default App;
