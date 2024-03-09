import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from './Recipe'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(0)

  const recipes = [
    {
      title: 'Grandma’s Famous Cookies',
      ingredients: [
        { name: 'flour', amount: '8 cups' },
        { name: 'sugar', amount: '4 cups' },
        { name: 'chocolate chips', amount: '2 cups' },
        { name: 'butter', amount: '4 cups' }
      ],
      steps: [
        'Preheat the oven to 350 degrees',
        'Mix together the flour, sugar, and eggs',
        'Fold in the chocolate chips',
        'Spread the mixture into a baking pan',
        'Bake for 20 minutes'
      ]
    },
    {
      title: 'Spaghetti',
      ingredients: [
        { name: 'pasta', amount: '1 pound' },
        { name: 'water', amount: '2 quarts' },
        { name: 'salt', amount: '1 pinch' }
      ],
      steps: [
        'Boil water',
        'Add pasta',
        'Cook for 12 minutes'
      ]
    }
  ]

  const nextRecipe = () => {
    setSelectedRecipe(selectedRecipe === recipes.length - 1 ? selectedRecipe: selectedRecipe + 1)
  }

  const previousRecipe = () => {
    setSelectedRecipe(selectedRecipe === 0 ? selectedRecipe: selectedRecipe - 1)
  }

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
                <Recipe title={recipes[selectedRecipe].title} ingredients={recipes[selectedRecipe].ingredients} steps={recipes[selectedRecipe].steps} />
            </div>
            <footer>
            </footer>
        </div>
    </>
  )
}

export default App
