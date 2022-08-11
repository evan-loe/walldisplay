import "./App.css";
import Background from "./components/Background";
import Clock from "./components/Clock";
import Widget from "./components/Widget";
import Fadable from "./components/Fadable";
import { useState, useEffect } from 'react'

function App() {

  const [showFadable, setShowFadable] = useState(true)
  
  const keyboardActions = []

  function keyDownHandler(e) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setShowFadable(!showFadable)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [showFadable])
  
  return (
    <div className="App w-screen h-screen relative">
      <Fadable showFadable={showFadable}></Fadable>
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
