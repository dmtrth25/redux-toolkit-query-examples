import { useState, FormEvent } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'
import { IRecipeData } from '../../types/recipe.types'

import styles from './CreateRecipe.module.css'

const defaultValue: IRecipeData = {
  name: '',
  image: '',
}

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValue)

  const [createRecipes] = useCreateRecipeMutation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(recipe)
    createRecipes(recipe)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}>S2S Create Dishes</p>
        <label className={styles.label}>
          Name of Dish:
          <input
            type="text"
            placeholder="Enter the name"
            value={recipe.name}
            onChange={e => setRecipe({ ...recipe, name: e.target.value })}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Image URL:
          <input
            type="text"
            placeholder="Enter the image URL"
            value={recipe.image}
            onChange={e => setRecipe({ ...recipe, image: e.target.value })}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add Recipe
        </button>
      </form>
    </div>
  )
}
