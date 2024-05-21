import styles from './RecipeItem.module.css'

export const RecipeItem = ({ recipe }) => {
  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{recipe.name}</h3>
      </div>
    </div>
  )
}
