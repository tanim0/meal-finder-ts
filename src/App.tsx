import { useState } from "react"
import Layout from "./components/Layout"
import Form from "./components/Form"
import Recipe from "./components/Recipe"
import Loading from "./components/Loading"
import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(false)
  const [mealName, setMealName] = useState("") // <useStateの型情報>
  const [mealData, setMealData] = useState({ // getMealDataで取得したデータを保管するstate
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  })

  const getMealData = async(e: React.FormEvent<HTMLFormElement>) => { // formとonSubmitに由来するイベントなのでReact.FormEventになる ＋ <>で具体的なHTMLタグ要素を指定(HTMLFormElement)
    e.preventDefault()
    setLoading(true)
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    const jsonData = await response.json()
    const {idMeal, strMeal, strInstructions, strMealThumb, strYoutube, strArea, strCategory} = jsonData.meals[0] // 分割代入

    setMealData({
      id: idMeal,
      name: strMeal,
      instructions: strInstructions,
      img: strMealThumb,
      source: strYoutube,
      area: strArea,
      category: strCategory,
    })
    setMealName("")
    setLoading(false)
  }

  return (
    // コンポーネントをコンポーネントで挟むと間に挟まれた要素はchildrenという特殊なporpsで渡される・・・型情報を定義する必要がある
    <Layout>
      <Form setMealName={setMealName} getMealData={getMealData} mealName={mealName} />
      {loading?
        <Loading/>
        :
        <Recipe mealData={mealData}/>
      }
    </Layout>
  )
}

export default App