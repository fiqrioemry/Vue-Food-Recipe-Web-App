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
export const blogInfoSummary = [
  {
    title: "Author",
    name: "author",
    icon: "fa-solid fa-circle-user",
  },
  {
    title: "Date",
    name: "datePublished",
    icon: "fa-solid fa-calendar",
  },
];
export const recipeDetail = [
  {
    icon: "fa-solid fa-globe",
    type: "cuisine",
    name: "cuisine",
  },
  {
    icon: "fa-solid fa-user",
    type: "servings",
    name: "servings",
  },
  {
    icon: "fa-solid fa-clock",
    type: "prepTimeMinutes",
    name: "prep time",
  },
  {
    icon: "fa-solid fa-bowl-food",
    type: "cookTimeMinutes",
    name: "cook time",
  },
  {
    icon: "fa-solid fa-star",
    type: "difficulty",
    name: "difficulty",
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

export const recipes = [
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

[
  {
    id: 1,
    title: "5 Secrets to Perfecting Italian Cuisine",
    author: "John Doe",
    datePublished: "2023-12-01",
    excerpt:
      "Explore the secrets behind authentic Italian cooking, from choosing the freshest ingredients to mastering the perfect pasta texture.",
    content: [
      "Italian cuisine is often regarded as one of the most beloved and celebrated cuisines in the world. But what makes it truly special? It’s not just the recipes; it’s the philosophy behind the food. At its core, Italian cooking values simplicity, quality, and respect for ingredients. Using the freshest produce and the finest olive oil can make all the difference in crafting authentic Italian dishes.",
      "One of the secrets to mastering Italian cuisine is understanding the importance of balance. Italian dishes often strike a perfect harmony between flavors, textures, and aromas. For instance, a classic Margherita pizza combines the tangy sweetness of tomato sauce, the creaminess of mozzarella, and the freshness of basil leaves. Achieving this balance requires practice and a deep appreciation for each component of the dish.",
      "Another crucial aspect is learning the art of pasta-making. Fresh, homemade pasta is a game-changer that can elevate even the simplest of recipes. From kneading the dough to cutting it into perfect ribbons, this process connects you to the traditions of Italian culture. Pairing the right type of pasta with the right sauce—be it a rich Bolognese or a light aglio e olio—is the final step in bringing a dish to life.",
    ],
    tags: ["Italian Cuisine", "Cooking Tips", "Food Culture"],
    image: "https://cdn.dummyjson.com/food-blog-images/1.webp",
    readTimeMinutes: 7,
    likes: 124,
    commentsCount: 45,
  },
  {
    id: 2,
    title: "Top 10 Street Foods Around the World",
    author: "Jane Smith",
    datePublished: "2023-11-20",
    excerpt:
      "From Bangkok's Pad Thai to Mexico City's tacos, let's take a journey across the globe to discover the best street foods.",
    content:
      "Street food is more than just a quick bite to eat—it’s an experience, a story, and a cultural landmark all rolled into one. Whether you're strolling through the bustling streets of Bangkok or wandering the markets of Mexico City, street food offers a glimpse into the heart of a city's culture. These dishes, often prepared with love and tradition, can tell you as much about a place as its landmarks.\n\nTake Bangkok's Pad Thai, for instance. This iconic dish combines the perfect balance of sweet, sour, salty, and spicy flavors, making it a favorite among both locals and tourists. Served with a squeeze of lime and a sprinkling of crushed peanuts, it’s a perfect representation of Thai cuisine's bold and vibrant character. On the other hand, Mexico City's tacos al pastor bring together marinated pork, pineapple, and fresh cilantro, delivering a taste of Mexico's rich culinary history.\n\nAcross the globe, each street food has its unique charm. In Japan, Takoyaki—crispy octopus-filled dough balls—are a must-try, often found in lively night markets. India’s pani puri, a burst of tangy, spicy water in a crispy shell, is a street food classic that reflects the country's love for bold flavors. From savory to sweet, street food connects people through shared tastes and culinary traditions.",
    tags: ["Street Food", "Travel", "Culinary Adventure"],
    image: "https://cdn.dummyjson.com/food-blog-images/2.webp",
    readTimeMinutes: 10,
    likes: 200,
    commentsCount: 68,
  },
];
