import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const add_value = () => {
    //counter = counter + 1
    if (counter >= 20) {
      alert("counter value should not be greater than 20")
      return
    }
    else {
      setCounter(counter + 1)
      // console.log("clicked counter", counter)
    }
  }

  const remove_value = () => {
    //counter = counter - 1
    if (counter <= 0) {
      alert("counter value should not be less than 0")
      return
    }
    else {
      setCounter(counter - 1)
      // console.log("clicked counter", counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={add_value}>add value : {counter}</button>
      <br />
      <button onClick={remove_value}>remove value : {counter}</button>

    </>
  )
}

export default App
