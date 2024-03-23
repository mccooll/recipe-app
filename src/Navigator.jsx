import { useState } from "react"

const Navigator = ({selectedRecipe, recipes, callback}) => {

    const nextRecipe = () => {
        callback(selectedRecipe === recipes.length - 1 ? selectedRecipe: selectedRecipe + 1)
      }
    
      const previousRecipe = () => {
        callback(selectedRecipe === 0 ? selectedRecipe: selectedRecipe - 1)
      }

return(
    <section>
        <button onClick={previousRecipe}>←</button>
        <button onClick={nextRecipe}>→</button>
    </section>
)
}

export default Navigator