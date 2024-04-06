import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from './Recipe'
import Navigator from './Navigator'

function App() {

  const [selectedRecipe, setSelectedRecipe] = useState(0)

  const [recipes, setRecipes] = useState([])

  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false)

  const [newRecipe, setNewRecipe] = useState({title:'',ingredients:[{amount:'0 cups', name:''}],steps:['']})

  

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

  function setNewRecipeTitle(title) {
    console.log(title)
    setNewRecipe({...newRecipe, title})
  }

  function setNewRecipeIngredientName(name, index) {
    console.log(name, index)
    const updatedIngredients = [...newRecipe.ingredients]
    updatedIngredients[index].name = name
    if(updatedIngredients[updatedIngredients.length - 1].name) updatedIngredients.push({amount:'0 cups', name:''})
    setNewRecipe({...newRecipe, ingredients: updatedIngredients})
  }

  function setNewRecipeIngredientAmount(amount, index) {
    console.log(amount, index)
    const updatedIngredients = [...newRecipe.ingredients]
    updatedIngredients[index].amount = amount
    setNewRecipe({...newRecipe, ingredients: updatedIngredients})
  }

  function setNewRecipeStep(step, index) {
    console.log(step, index)
    const updatedSteps = [...newRecipe.steps]
    updatedSteps[index] = step
    if(updatedSteps[updatedSteps.length - 1]) updatedSteps.push('')
    setNewRecipe({...newRecipe, steps: updatedSteps} )
  }

  return (
    <>
      <div>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <h1>Recipe App</h1>
            </header>
            <button onClick={()=>setCreatingNewRecipe(true)}>New Recipe</button>
            {!creatingNewRecipe && <form>
                <input type="text" placeholder="Title" value={newRecipe.title} onChange={e=>setNewRecipeTitle(e.target.value)} />
                <h3>Ingredients</h3>
                <ol>
                {newRecipe.ingredients.map(({name, amount}, index) => (
                  <li>
                    <input type="text" placeholder="Ingredient" value={name} onChange={e => setNewRecipeIngredientName(e.target.value, index)}/>
                    <input type="text" placeholder="Amount" value={amount} onChange={e => setNewRecipeIngredientAmount(e.target.value, index)}/>
                  </li>
                ))}
                </ol>
                <h3>Steps</h3>
                <ol>
                {newRecipe.steps.map((step, index) => (
                  <li><input type="text" placeholder="Step" value={step} onChange={e => setNewRecipeStep(e.target.value,index)}/></li>
                ))}
                </ol>
            </form>}
            <Navigator callback={i=>setSelectedRecipe(i)} selectedRecipe={selectedRecipe} recipes={recipes} />
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
