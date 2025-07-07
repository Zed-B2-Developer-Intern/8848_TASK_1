const allRecipes = [
  // Breakfast
  {
    name: "Dosa Batter",
    img: "/dosabatter.webp",
    nutrientInfo: "181 kcal Protein 4.1gm Fat 0.5gm Carbs 39gm Sugar 0.3gm Fiber 1.3gm",
    time: "60 min",
    type: "Veg",
    category: "Breakfast",
    cuisine: "Indian",
    ingredients: [
      "2.50 cup Rice",
      "0.50 cup Urad Dal (whole)",
      "0.75 tsp Fenugreek Seeds",
      "2.00 tsp Salt"
    ],
    instructions: [
      "Add the rice, urad dal, and fenugreek seeds to a bowl. Wash it thrice and soak for 4 hours.",
      "Grind it into a slightly coarse batter. Add water if required.",
      "Mix, cover & let rise overnight.",
      "Add salt & water if needed to make a smooth batter."
    ]
  },
  {
    name: "Tomato Kulambu",
    img: "/tomatokulambu.jpg",
    nutrientInfo: "816 kcal Protein 22gm Fat 27gm Carbs 136gm Sugar 62gm Fiber 28gm",
    time: "45 min",
    type: "Veg",
    category: "Breakfast",
    cuisine: "Indian",
    ingredients: [
      "0.50 no Coconut",
      "1.00 tbsp Coriander Powder",
      "2.00 tsp Salt",
      "2.00 tbsp Coriander Leaves",
      "10.00 cloves Garlic",
      "1.00 sprigs Curry leaves",
      "2.00 tbsp Groundnut oil",
      "0.25 cup Chana Dal",
      "0.50 tsp Black Peppercorns",
      "6.00 no Tomato",
      "2.00 no Onion",
      "7.00 no Dry Red Chilli",
      "1.00 inch Cinnamon",
      "3.00 no Cloves"
    ],
    instructions: [
      "Heat oil, sauté shallots, ginger, garlic, curry leaves, red chili.",
      "Roast channa dal, cumin, black pepper, poppy seeds, spices.",
      "Cook tomatoes, coconut & spices. Grind everything.",
      "Heat oil, fry mustard, cumin, onions, paste, water & simmer."
    ]
  },
  {
    name: "Suvarotti Masala",
    img: "/suvarotti.jpg",
    nutrientInfo: "187 kcal Protein 6.6gm Fat 14gm Carbs 11gm Sugar 3.6gm Fiber 3gm",
    time: "40 min",
    type: "Non-Veg",
    category: "Breakfast",
    cuisine: "Indian",
    ingredients: [
      "1.00 tbsp Sunflower Oil",
      "1.00 no Bay Leaves",
      "0.50 inch Cinnamon",
      "1.00 tsp Salt",
      "1.00 no Onion",
      "6.00 cloves Garlic",
      "2.00 tsp Coriander Leaves",
      "1.00 no Tomato",
      "1.00 tbsp Red Chilli Powder",
      "0.25 tsp Turmeric Powder",
      "0.50 cup Water",
      "2.00 no Spleen"
    ],
    instructions: [
      "Sauté onion, garlic, tomato in oil.",
      "Add chili powder, turmeric, salt & water. Cook 5 mins.",
      "Add spleen, water, cover & cook 20 mins."
    ]
  },
  {
    name: "Masala Egg Dosa",
    img: "/masalaeggdosafinder.avif",
    nutrientInfo: "351 kcal Protein 11gm Fat 19gm Carbs 35gm Sugar 2.6gm Fiber 2.1gm",
    time: "30 min",
    type: "Non-Veg",
    category: "Breakfast",
    cuisine: "Indian",
    ingredients: [
      "1.00 tbsp Sunflower Oil",
      "0.50 tsp Cumin",
      "1.00 sprigs Curry leaves",
      "0.75 cup Onion",
      "1.00 tbsp Green Chilli",
      "1.00 tsp Ginger Garlic Paste",
      "0.50 cup Tomato",
      "4.00 Eggs",
      "Dosa Batter",
      "Onion",
      "Coriander Leaves",
      "Lemon Juice"
    ],
    instructions: [
      "Cook onions, spices & tomato. Add eggs & cook until slightly runny.",
      "Spread dosa on tawa, add egg mixture & cook both sides.",
      "Sprinkle onion, coriander & lemon."
    ]
  },
  {
    name: "Avocado Toast",
    img: "/avacadotoast.avif",
    nutrientInfo: "310 kcal Protein 5.9gm Fat 37gm Carbs 31gm Sugar 7.5gm Fiber 8.2gm",
    time: "15 min",
    type: "Veg",
    category: "Breakfast",
    cuisine: "American",
    ingredients: [
      "1 Avocado", "1 Onion", "1 Tomato", "1/2 Lemon", "Salt", "Black Pepper", "Olive Oil", "Brown Bread", "Pomegranate", "Melon Seeds"
    ],
    instructions: [
      "Mash avocado, mix with onion, tomato, lemon juice, olive oil, salt & pepper.",
      "Toast bread & spread avocado mixture.",
      "Garnish with pomegranate, melon seeds."
    ]
  },
  {
    name: "English Breakfast",
    img: "/englishbreakfast.jpeg",
    nutrientInfo: "520 kcal Protein 24gm Fat 35gm Carbs 28gm Sugar 5gm Fiber 4gm",
    time: "25 min",
    type: "Non-Veg",
    category: "Breakfast",
    cuisine: "British",
    ingredients: [
      "Eggs", "Bacon", "Sausage", "Toast", "Mushrooms", "Tomatoes", "Baked Beans"
    ],
    instructions: [
      "Cook bacon & sausages. Cook eggs as desired.",
      "Toast bread, grill mushrooms & tomatoes.",
      "Serve all with baked beans."
    ]
  },

  //  Lunch
  {
    name: "Tomato Rasam",
    img: "/tomatorasam.avif",
    nutrientInfo: "139 kcal Protein 4.1gm Fat 8.6gm Carbs 15gm Sugar 4.9gm Fiber 4.6gm",
    time: "30 min",
    type: "Veg",
    category: "Lunch",
    cuisine: "Indian",
    ingredients: [
      "Cumin", "Black Pepper", "Fenugreek", "Ghee", "Mustard Seeds", "Curry Leaves", "Garlic", "Tomato", "Salt", "Turmeric", "Asafoetida", "Coriander", "Water"
    ],
    instructions: [
      "Dry roast masala, grind & keep.",
      "Heat ghee, splutter mustard, sauté spices, tomato & garlic.",
      "Add rasam powder & water, simmer."
    ]
  },
  {
    name: "Baby Potato Fry",
    img: "/babbypotato.avif",
    nutrientInfo: "120 kcal Protein 3gm Fat 3.9gm Carbs 19gm Sugar 1.1gm Fiber 2.6gm",
    time: "30 min",
    type: "Veg",
    category: "Lunch",
    cuisine: "Indian",
    ingredients: [
      "Baby Potatoes", "Urad Dal", "Chana Dal", "Coriander", "Fennel", "Cumin", "Sesame Seeds", "Coconut", "Mustard", "Curry Leaves", "Dry Red Chili"
    ],
    instructions: [
      "Boil & peel potatoes.",
      "Roast & grind spices.",
      "Heat oil, fry spices, add potatoes & masala. Roast well."
    ]
  },
  {
    name: "Egg Drop Curry",
    img: "/egg.avif",
    nutrientInfo: "245 kcal Protein 8.8gm Fat 16gm Carbs 18gm Sugar 8gm Fiber 4.1gm",
    time: "25 min",
    type: "Non-Veg",
    category: "Lunch",
    cuisine: "Indian",
    ingredients: [
      "Eggs", "Onion", "Tomato", "Green Chili", "Cumin", "Ginger Garlic", "Kasuri Methi", "Garam Masala"
    ],
    instructions: [
      "Make tomato puree.",
      "Cook onions, spices, tomato puree & masala.",
      "Break eggs in & cook covered."
    ]
  },
  {
    name: "Kung Pao Chicken",
    img: "/kung.avif",
    nutrientInfo: "684 kcal Protein 36gm Fat 45gm Carbs 34gm Sugar 12gm Fiber 2.5gm",
    time: "25 min",
    type: "Cuisine",
    category: "Lunch",
    cuisine: "Chinese",
    ingredients: [
      "Chicken", "Soy Sauce", "Egg", "Cornflour", "Dark Soy", "Vinegar", "Brown Sugar", "Sesame Oil", "Garlic", "Ginger", "Peanuts", "Spring Onion", "Dry Red Chili"
    ],
    instructions: [
      "Marinate chicken & fry.",
      "Make sauce & simmer with chicken.",
      "Add slurry, peanuts & spring onion."
    ]
  },
  {
    name: "Almond Chicken Curry",
    img: "/chicken.avif",
    nutrientInfo: "546 kcal Protein 32gm Fat 42gm Carbs 9.1gm Sugar 3.9gm Fiber 2.3gm",
    time: "55 min",
    type: "Non-Veg",
    category: "Lunch",
    cuisine: "Indian",
    ingredients: [
      "Chicken", "Almonds", "Coconut", "Curd", "Onion", "Green Chili", "Ginger", "Garlic", "Spices", "Cream"
    ],
    instructions: [
      "Soak & grind almonds.",
      "Marinate chicken with almond paste.",
      "Cook onions & spices, add chicken, water & simmer.",
      "Finish with cream & garnish."
    ]
  },

  //  Dinner
  {
    name: "Phulka",
    img: "/phulka.avif",
    nutrientInfo: "85 kcal Protein 3gm Fat 0.4gm Carbs 18gm Sugar 0gm Fiber 2gm",
    time: "30 min",
    type: "Veg",
    category: "Dinner",
    cuisine: "Indian",
    ingredients: [
      "Whole Wheat Flour", "Salt", "Water"
    ],
    instructions: [
      "Make dough, rest.",
      "Roll into circles.",
      "Cook on tawa & puff on flame."
    ]
  },
  {
    name: "Paneer Bhurji",
    img: "/paneerbhurji.avif",
    nutrientInfo: "321 kcal Protein 17gm Fat 24gm Carbs 10gm Sugar 5gm Fiber 2gm",
    time: "30 min",
    type: "Veg",
    category: "Dinner",
    cuisine: "Indian",
    ingredients: [
      "Paneer", "Onion", "Tomato", "Spices", "Coriander"
    ],
    instructions: [
      "Cook onions, tomatoes & spices.",
      "Add crumbled paneer & mix well.",
      "Garnish with coriander."
    ]
  },
  {
    name: "Maggi Biryani",
    img: "/maggibiryani.avif",
    nutrientInfo: "390 kcal Protein 7gm Fat 16gm Carbs 53gm Sugar 3gm Fiber 3gm",
    time: "20 min",
    type: "Veg",
    category: "Dinner",
    cuisine: "Indian",
    ingredients: [
      "Maggi Noodles", "Mixed Vegetables", "Onion", "Biryani Masala", "Coriander"
    ],
    instructions: [
      "Cook onions & vegetables.",
      "Add masala, water & noodles.",
      "Cook until done & garnish."
    ]
  },
  {
    name: "Chicken Kothu Parotta",
    img: "/parotta.avif",
    nutrientInfo: "884 kcal Protein 33gm Fat 48gm Carbs 81gm Sugar 14gm Fiber 15gm",
    time: "30 min",
    type: "Non-Veg",
    category: "Dinner",
    cuisine: "Indian",
    ingredients: [
      "Parotta", "Chicken", "Eggs", "Onions", "Tomato", "Spices"
    ],
    instructions: [
      "Shred parotta & cook with eggs, chicken, onions & spices.",
      "Finish with coriander."
    ]
  },
  {
    name: "Japanese Chicken Karaage",
    img: "/japan.avif",
    nutrientInfo: "309 kcal Protein 22gm Fat 13gm Carbs 24gm Sugar 0.3gm Fiber 0.3gm",
    time: "30 min",
    type: "Cuisine",
    category: "Dinner",
    cuisine: "Japanese",
    ingredients: [
      "Chicken", "White Wine", "Soy Sauce", "Ginger", "Corn Flour"
    ],
    instructions: [
      "Marinate chicken.",
      "Coat in flour & fry twice for crispiness."
    ]
  }
];

export default allRecipes;
