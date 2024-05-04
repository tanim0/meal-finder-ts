import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"

const App = () => {
  const [mealName, setMealName] = useState("") // <useStateの型情報>
  return (
    <div>
      <Header/>
      <h1>こんにちは</h1>
      <Form setMealName={setMealName}/>
    </div>
  )
}

export default App