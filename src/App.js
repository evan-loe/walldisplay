import "./App.css";
import Background from "./components/Background";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App">
      <Background></Background>
      <div className="flex flex-row md:flex-col items-center">
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
      </div>
    </div>
  );
}

export default App;
