import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="recipe-card"
      whileHover={{ scale: 1.02 }}
      onClick={() => setShowDetails(!showDetails)}
    >
      <img src={recipe.img} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>{recipe.category} - {recipe.type}</p>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p><strong>Nutrition:</strong> {recipe.nutrientInfo}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <ol>
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
