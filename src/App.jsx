import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from './UsernameForm'
import SignUpForm from './SignUpForm'
import BetterSignupForm from "./BetterSignupForm"
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BetterSignupForm /> */}
      <ShoppingList />


    </>
  )
}

export default App
