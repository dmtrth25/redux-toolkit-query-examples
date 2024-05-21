import { CreateRecipe } from './components/create-recipe'
import { RecipeItem } from './components/recipe-item'
import { useGetRecipesQuery } from './store/api/api'

function App() {
  const { isLoading, data } = useGetRecipesQuery(null)
  console.log(data)

  return (
    <section>
      <CreateRecipe />
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>Not Found</div>
      )}
    </section>
  )
}

export default App
