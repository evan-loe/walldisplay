import "./App.css";
import Background from "./components/Background";
import Clock from "./components/Clock";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App w-screen h-screen relative">
      <Background></Background>
      <div className="flex flex-row md:flex-col items-center">
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
      </div>
      <Clock className="fixed bottom-8 right-8"></Clock>
    </div>
  );
}

export default App;
