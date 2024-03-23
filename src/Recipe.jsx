import Ingredient from './Ingredient';

function Recipe({ title, ingredients, steps}) {
    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px', overflow: 'hidden' }}>
            <img src="https://via.placeholder.com/800x400" alt="Recipe Image" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} />
            <div style={{ padding: '20px' }}>
                <h2 style={{ margin: '0 0 10px' }}>{title}</h2>
                <ul>
                    {ingredients.map(({name, amount}) => (
                        <Ingredient name={name} amount={amount}></Ingredient>
                    ))}
                </ul>
                <div>
                <ol>
                    {steps.map(step => 
                        <li>{step}</li>
                    )}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default Recipe;