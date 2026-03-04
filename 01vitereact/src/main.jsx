import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function Myapp() {
  return (
    <div>
      <h3>custom app | react</h3>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank"
//   },
//   children: "click me to  visit google"
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">click me to visit google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     reactElement
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)


