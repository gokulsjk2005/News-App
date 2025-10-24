import './Components/Stylesheets/style.css'
import Header from './Components/Header'
import NewsApp from './Components/NewsApp'
import { useState } from 'react'

const App = () => {

  const [category, setCategory] = useState("general");
  return (
    <div className="containerApp">
      <Header setCategory={setCategory} />
      <NewsApp category={category} />
    </div>
  )
}

export default App