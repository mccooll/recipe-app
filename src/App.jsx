import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from './Recipe'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(0)

  const [recipes, setRecipes] = useState([])
  console.log(JSON.stringify(recipes)) 

  const nextRecipe = () => {
    setSelectedRecipe(selectedRecipe === recipes.length - 1 ? selectedRecipe: selectedRecipe + 1)
  }

  const previousRecipe = () => {
    setSelectedRecipe(selectedRecipe === 0 ? selectedRecipe: selectedRecipe - 1)
  }

  const fetchRecipes = async () => {
    const response = await fetch('http://localhost:3000/recipes')
    const data = await response.json()
    setRecipes(data)
  }
  // fetchRecipes()
  useEffect(() => {
    fetchRecipes()
  },[])
  // const steps = [
  //   'Preheat the oven to 350 degrees',
  //   'Mix together the flour, sugar, and eggs',
  //   'Fold in the chocolate chips',
  //   'Spread the mixture into a baking pan',
  //   'Bake for 20 minutes'
  // ]

  // const ingredients = [
  //   { name: 'flour', amount: '8 cups' },
  //   { name: 'sugar', amount: '4 cups' },
  //   { name: 'chocolate chips', amount: '2 cups' },
  //   { name: 'butter', amount: '4 cups' }
  // ]

  console.log(recipes[selectedRecipe])
  return (
    <>
      <div>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <h1>Recipe App</h1>
            </header>
            <section>
              <button onClick={previousRecipe}>←</button>
              <button onClick={nextRecipe}>→</button>
            </section>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
                {recipes[selectedRecipe] && <Recipe title={recipes[selectedRecipe].title} ingredients={recipes[selectedRecipe].ingredients} steps={recipes[selectedRecipe].steps} />}
            </div>
            <footer>
            </footer>
        </div>
    </>
  )
}

export default App
