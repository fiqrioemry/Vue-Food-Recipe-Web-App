export const navLinks = [
  { title: "Home", path: "/" },
  { title: "Recipe", path: "/recipe" },
  { title: "Blog", path: "/blog" },
  { title: "About", path: "/about" },
];

export const infoSummary = [
  { title: "Author", icon: "fa-solid fa-circle-user", value: "Authorname" },
  { title: "Date", icon: "fa-solid fa-calendar", value: "Dec 27, 2023" },
  { title: "Comments", icon: "fa-solid fa-comment", value: "22 comments" },
  { title: "Bookmarks", icon: "fa-solid fa-bookmark", value: "9 Bookmarks" },
];

export const recipeDetail = [
  {
    icon: "fa-solid fa-globe",
    type: "cuisine",
    name: "mexican food",
  },
  {
    icon: "fa-solid fa-user",
    type: "servings",
    name: "4 persons",
  },
  {
    icon: "fa-solid fa-clock",
    type: "prep time",
    name: "15 minutes",
  },
  {
    icon: "fa-solid fa-bowl-food",
    type: "cook time",
    name: "10 minutes",
  },
  {
    icon: "fa-solid fa-star",
    type: "difficulty",
    name: "intermediate",
  },
];

export const buttonActions = [
  { title: "Bookmark", icon: "fa-solid fa-bookmark" },
  { title: "Share", icon: "fa-solid fa-share-nodes" },
];

export const nutrisionFact = [
  { title: "Calories", value: "494" },
  { title: "Total Fat", value: "23g" },
  { title: "Sodium", value: "210mg" },
  { title: "Carbohydrates", value: "55g" },
  { title: "Protein", value: "7g" },
  { title: "Dietary Fiber", value: "8g" },
  { title: "Sugars", value: "24g" },
];

const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 166,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 98,
    mealType: ["Dinner"],
  },
];
