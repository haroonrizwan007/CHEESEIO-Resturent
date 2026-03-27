/* ================================================================
   CHEESEIO — Premium Restaurant Website Script
   ================================================================ */

// ===== IMAGE MAP =====
const foodImages = {
  // Starters
  "Nuggets": "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
  "Strips Tender Chicken": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
  "Cheese Sticks / Loaded": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&q=80",
  "Cheeza": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  "Turkish Doner": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  // Burgers
  "Cheeseio Special Monster": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  "Zinger Blaster": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80",
  "Zinger Burger": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
  "Zinger BigBite": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80",
  "Zinger Crunchy": "https://images.unsplash.com/photo-1625813506062-0aeb1571a4e4?w=600&q=80",
  "CurCheeseio": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
  "Patty Burger": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
  "Mighty Burger": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
  "Flamed Grilled": "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=600&q=80",
  "Burgrizza": "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=600&q=80",
  "Korean Crunch Zinger": "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&q=80",
  "BunLess Zinger": "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=600&q=80",
  // Pizza
  "Chicken Tikka": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "Chicken Fajita": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  "Grilled Chicken": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80",
  "Chicken Supreme": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&q=80",
  "Hot N Spicy": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80",
  "Cheeseio Special": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  "Malai Boti": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&q=80",
  "Bihari Kabab": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80",
  "Executive": "https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=600&q=80",
  "Mughal Azam": "https://images.unsplash.com/photo-1600628421060-939639517883?w=600&q=80",
  "Tandori Chicken": "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=600&q=80",
  "Half N Half": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80",
  "Cheese N Cheese": "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&q=80",
  "Vegi Extreme": "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600&q=80",
  "Peri Peri": "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80",
  "Peri Peri Thin Crust": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80",
  "Pide (P-Day)": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
  "Crown Crust": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&q=80",
  "Malai Boti Bar-B-Que (Stuffed)": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  "Crunchy Pizza": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "Cheese Stuff": "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&q=80",
  "Kabab Stuff": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80",
  "Kabab Stuff Cheese Filled": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&q=80",
  "Kababish Double Delight": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  "Dawat-E-Khas Pizza": "https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=600&q=80",
  // Pasta
  "Cheeseio Special Crunchy": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
  "Cheeseio Signature": "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
  "Cheeseio Grilled Chicken": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
  // Wings
  "Crunchy Fried Wings": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
  "Oven Baked Wings": "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80",
  "Buffalo Wings": "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&q=80",
  "Sweet-N-Sour Barbeque Wings": "https://images.unsplash.com/photo-1524114664604-cd8133cd67db?w=600&q=80",
  "Oven Baked Wings Peri Peri": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
  // Wraps
  "Tortilla": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
  "Twister": "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=600&q=80",
  "Lite Bite Wrap": "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&q=80",
  "Tender Chicken Wrap": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
  "Bold Bite Wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
  "Spin Roles (4pc)": "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=600&q=80",
  "Bahari Role (4pc)": "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=600&q=80",
  "Paratha Zinger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
  "Paratha Chicken": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  "Paratha Seekh Kabab": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
  "Shawarma Crunchy Zinger": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  "Shawarma Zinger": "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=600&q=80",
  "Shawarma Malai Boti Bar-B-Que": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  "Shawarma Chicken": "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=600&q=80",
  // Sandwiches
  "Calzone": "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=600&q=80",
  "Cheeseio Stacker": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
  "Cheeseio Special Oven Baked": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
  "Panini Cheeseio Special": "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=600&q=80",
  "Panini Cheeseio Grilled": "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80",
  // Fries
  "Fries": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e4?w=600&q=80",
  "Loaded Fries": "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80",
  "Super Loaded Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
  "Zinger Loaded Fries": "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80",
  // Platters
  "Chicken Steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80",
  "Mushroom Chicken Steak": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
  "Platter 1": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  "Platter 2": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  "Platter 3": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "Arabic Thaal": "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&q=80",
  // Broast
  "Injected Chicken Broast": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
  // Beverages & Extras
  "Tea Cardamom": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
  "Coffee": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  "Extra Cheese Topping": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
  "Extra Chicken Topping": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
  "Extra Dip Sauce": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80",
  "Extra Cheese Slice": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80"
};

const categoryFallback = {
  starters: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
  wings: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
  wraps: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
  sandwiches: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
  fries: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e4?w=600&q=80",
  platters: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  broast: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
  beverages: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
};

// Popular items
const popularItems = [
  "Cheeseio Special Monster", "Zinger Blaster", "Cheeseio Special",
  "Mighty Burger", "Loaded Fries"
];

// ===== MENU DATA =====
const menuData = {
  starters: [
    { name: "Nuggets", price: "5pc: Rs.269 | 10pc: Rs.469" },
    { name: "Strips Tender Chicken", price: "3pc: Rs.329 | 5pc: Rs.499", desc: "Special Coated Juicy Fried Chicken Strips" },
    { name: "Cheese Sticks / Loaded", price: "Regular: Rs.399 | Loaded: Rs.449", desc: "Fresh Dough Filled With Real Cheese & Seasoning / Loaded With Chicken Cheese & Veggies" },
    { name: "Cheeza", price: "Rs.549", desc: "Grilled Chicken Pizza Without Any Crust" },
    { name: "Turkish Doner", price: "Rs.150", desc: "Pocket Shawarma" }
  ],
  burgers: [
    { name: "Cheeseio Special Monster", price: "Rs.599", desc: "Grilled Chicken with Pistachio Mortadella, Loaded Unique Sauces and Cheese Slice" },
    { name: "Zinger Blaster", price: "Single: Rs.549 | Double: Rs.799", desc: "Premium Quality Zinger with Cheese Slice, Fresh Veggies And Unique Hot Sauces" },
    { name: "Zinger Burger", price: "Rs.479", desc: "Premium Quality Full Size Thigh Zinger" },
    { name: "Zinger BigBite", price: "Rs.699", desc: "Double Zinger Fillet With Cheese Slice" },
    { name: "Zinger Crunchy", price: "Rs.399", desc: "Crunchy Fillet Zinger Burger" },
    { name: "CurCheeseio", price: "Rs.349", desc: "Tasty Chicken Tender Strips in Long Burger" },
    { name: "Patty Burger", price: "Single: Rs.299 | Double: Rs.449", desc: "Premium Quality Chicken Patty Burger. Double Patty with Cheese Slice." },
    { name: "Mighty Burger", price: "Rs.599", desc: "Double The Delight. Zinger and Patty In One Burger with Cheese Slice" },
    { name: "Flamed Grilled", price: "Single: Rs.499 | Double: Rs.699", desc: "Tasty & Juicy Grilled Chicken Burger. Double Fillet with Cheese Slice." },
    { name: "Burgrizza", price: "Rs.499", desc: "Unique Taste Of Pizza on a Burger" },
    { name: "Korean Crunch Zinger", price: "Rs.599", desc: "Our Unique Sweet And Hot Sauces On Zinger Burger" },
    { name: "BunLess Zinger", price: "Rs.599", desc: "Two Pieces Crunchy Zinger Loaded With Pepperoni, Jalapeno, Iceberg, Cheese Slice And Our Unique Sauces" }
  ],
  pizza: [
    { subheader: "Traditional Pizza" },
    { name: "Chicken Tikka", price: "S: Rs.449 | M: Rs.949 | L: Rs.1,499 | XXL: Rs.2,099", desc: "Tikka Flavour Chicken Toppings" },
    { name: "Chicken Fajita", price: "S: Rs.449 | M: Rs.949 | L: Rs.1,499 | XXL: Rs.2,099", desc: "Spicy Fajita Chicken With Sauces" },
    { name: "Grilled Chicken", price: "S: Rs.449 | M: Rs.949 | L: Rs.1,499 | XXL: Rs.2,099", desc: "Topped With Special Grilled Chicken" },
    { name: "Chicken Supreme", price: "S: Rs.449 | M: Rs.949 | L: Rs.1,499 | XXL: Rs.2,099", desc: "Chicken, Onion, Black Olives, Jalapenos, Bell Pepper, Corn and Special Sauce" },
    { name: "Hot N Spicy", price: "S: Rs.449 | M: Rs.949 | L: Rs.1,499 | XXL: Rs.2,099", desc: "Hot n Spicy Chicken Fajita, Jalapeno, Veggies & Sauces" },
    { subheader: "Special Pizza" },
    { name: "Cheeseio Special", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Melody Of Chicken, Black Olives, Onion, Bell Pepper, Mushrooms, Pepperoni, Sausages With Mozzarella & Special Sauce" },
    { name: "Malai Boti", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Special White Malai Boti Chicken Topping" },
    { name: "Bihari Kabab", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Eastern Chicken Seekh Kabab With Chicken And Veggies" },
    { name: "Executive", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Three Chicken Flavors, Onion, Black Olives, Jalapenos, Bell Pepper, Corn And Special Sauce" },
    { name: "Mughal Azam", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Mughlai Chicken, Black Olives, Bell Pepper, Onion And Sauces" },
    { name: "Tandori Chicken", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Tandori Chicken Feast" },
    { name: "Half N Half", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Choice Of Your Own Two Special Pizza Toppings In One Pizza" },
    { name: "Cheese N Cheese", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Cheese Lover Heaven. Only Cheese Topping." },
    { name: "Vegi Extreme", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Without Chicken. Onion, Bell Pepper, Black Olives, Green Olives, Corn, Jalapenos with Cheese and Sauces" },
    { name: "Peri Peri", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Peri Peri Spicy & Tangy Chicken with Peri Peri Mayo Sauce" },
    { name: "Peri Peri Thin Crust", price: "S: Rs.499 | M: Rs.1,099 | L: Rs.1,599 | XXL: Rs.2,299", desc: "Peri Peri Spicy & Tangy Chicken on Thin Crust" },
    { name: "Pide (P-Day)", price: "Rs.699", desc: "Famous Turkish Pizza" },
    { subheader: "Stuffed Pizza" },
    { name: "Crown Crust", price: "M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Crown Filled With Unique Chicken & Sauces" },
    { name: "Malai Boti Bar-B-Que (Stuffed)", price: "S: Rs.549 | M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Stuffed with Unique Chicken & Sauces" },
    { name: "Crunchy Pizza", price: "M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Edges Filled With Special Cheese Sauce, Topped With Crispy Chicken" },
    { name: "Cheese Stuff", price: "M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Edges Filled With Cheese, Topped With Special Chicken & Veggies" },
    { name: "Kabab Stuff", price: "M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Edges Filled With Seekh Kabab, Topped With Chicken & Veggies" },
    { name: "Kabab Stuff Cheese Filled", price: "M: Rs.1,249 | L: Rs.1,899 | XXL: Rs.2,649", desc: "Kabab Stuffed Pizza But Seekh Kababs are Filled With Cheese" },
    { name: "Kababish Double Delight", price: "M: Rs.1,199 | L: Rs.1,799 | XXL: Rs.2,499", desc: "Kabab Stuff Pizza And Bihari Kabab Pizza In One" },
    { name: "Dawat-E-Khas Pizza", price: "M: Rs.1,149 | L: Rs.1,699 | XXL: Rs.2,399", desc: "Excellent Combination of Eastern And Western Chicken Flavours" }
  ],
  pasta: [
    { name: "Cheeseio Special Crunchy", price: "Small: Rs.399 | Family: Rs.699", desc: "Our Unique Taste Pasta Topped With Crunchy Chicken & Cheese" },
    { name: "Cheeseio Signature", price: "Small: Rs.349 | Family: Rs.649", desc: "Topped With Chicken, Cheese, Mushrooms & Black Olives" },
    { name: "Cheeseio Grilled Chicken", price: "Small: Rs.399 | Family: Rs.699", desc: "Topped With Grilled Chicken, Cheese, Jalapenos & Black Olives" }
  ],
  wings: [
    { name: "Crunchy Fried Wings", price: "5pc: Rs.359 | 10pc: Rs.699" },
    { name: "Oven Baked Wings", price: "5pc: Rs.299 | 10pc: Rs.549" },
    { name: "Buffalo Wings", price: "6pc: Rs.399" },
    { name: "Sweet-N-Sour Barbeque Wings", price: "6pc: Rs.399" },
    { name: "Oven Baked Wings Peri Peri", price: "6pc: Rs.399" }
  ],
  wraps: [
    { name: "Tortilla", price: "Rs.549", desc: "Grilled Chicken, Potato Fries, Veggies & Sauces in Tortilla" },
    { name: "Twister", price: "Rs.499", desc: "Tortilla filled with Premium Chicken Thigh Zinger, Veggies & Sauces" },
    { name: "Lite Bite Wrap", price: "Rs.499", desc: "Grilled Chicken, Fresh Veggies, Low in Carbs" },
    { name: "Tender Chicken Wrap", price: "Rs.399", desc: "Tender Chicken & Fresh Veggies in Our Unique Sauces" },
    { name: "Bold Bite Wrap", price: "Rs.349", desc: "Crispy Chicken and Lots Of Fresh Veggies & Sauces" },
    { name: "Spin Roles (4pc)", price: "Rs.579", desc: "Tortilla filled with Chicken, Olives, Vegs, Sauces & Cheese" },
    { name: "Bahari Role (4pc)", price: "Rs.649", desc: "Chicken, Corn, Jalapeno, Onion & Sauces in Tortilla" },
    { name: "Paratha Zinger", price: "Rs.419", desc: "Premium Quality Chicken Thigh Zinger" },
    { name: "Paratha Chicken", price: "Rs.299", desc: "Grilled / Tikka / Malai Chicken — Your Choice" },
    { name: "Paratha Seekh Kabab", price: "Rs.259", desc: "Famous Paratha with Seekh Kabab" },
    { name: "Shawarma Crunchy Zinger", price: "Rs.299", desc: "Filled with our tasty Zinger fillet" },
    { name: "Shawarma Zinger", price: "Rs.399", desc: "Filled with real Jumbo Thigh Zinger" },
    { name: "Shawarma Malai Boti Bar-B-Que", price: "Rs.299" },
    { name: "Shawarma Chicken", price: "Rs.269" }
  ],
  sandwiches: [
    { name: "Calzone", price: "Rs.699", desc: "Italian oven-baked turnover, made with fresh dough" },
    { name: "Cheeseio Stacker", price: "Rs.749", desc: "Oven baked sandwich with crunchy chicken and Stacker sauce" },
    { name: "Cheeseio Special Oven Baked", price: "Rs.649", desc: "Prepared with freshly oven baked bread" },
    { name: "Panini Cheeseio Special", price: "Rs.549", desc: "Fresh oregano bread — Tikka, Fajita, Malai, or Mughlai chicken" },
    { name: "Panini Cheeseio Grilled", price: "Rs.599", desc: "Fresh oregano bread with our unique grilled chicken" }
  ],
  fries: [
    { name: "Fries", price: "Regular: Rs.249 | Large: Rs.399", desc: "Deep Fried Potato French Fries. Masala / Plain. Air Baked also available." },
    { name: "Loaded Fries", price: "Rs.549", desc: "Fries Loaded With Sauces, Veggies, Chicken & Cheese" },
    { name: "Super Loaded Fries", price: "Rs.599", desc: "Fries Loaded With Grilled Chicken & BBQ Sauces" },
    { name: "Zinger Loaded Fries", price: "Rs.599", desc: "Fries Loaded With Zinger Chunks, Veggies & Sauces" }
  ],
  platters: [
    { name: "Chicken Steak", price: "Regular: Rs.599 | Large: Rs.799" },
    { name: "Mushroom Chicken Steak", price: "Rs.1,199" },
    { name: "Platter 1", price: "Rs.749", desc: "1 Steak + 3 Malai Boti + 2 Tender Strips + Fries" },
    { name: "Platter 2", price: "Rs.799", desc: "2 Bihari Roles + 2 Malai Boti + 2 Seekh Kabab + 2 Tender Strips + Fries" },
    { name: "Platter 3", price: "Rs.799", desc: "1 Steak + 3 Crunchy Wings + 2 Spin Roles + Fries" },
    { name: "Arabic Thaal", price: "Rs.799", desc: "Grilled Chicken, Creamy Malai Boti, Veggies, Tortilla Bread, Paratha, Sauces" }
  ],
  broast: [
    { name: "Injected Chicken Broast", price: "2pc: Rs.600 | 4pc: Rs.1,000 | 8pc: Rs.1,900" }
  ],
  beverages: [
    { name: "Tea Cardamom", price: "Rs.100" },
    { name: "Coffee", price: "Rs.120" },
    { name: "Extra Cheese Topping", price: "S: Rs.60 | M: Rs.100 | L: Rs.150 | Family: Rs.250" },
    { name: "Extra Chicken Topping", price: "S: Rs.60 | M: Rs.100 | L: Rs.150 | Family: Rs.250" },
    { name: "Extra Dip Sauce", price: "Rs.60" },
    { name: "Extra Cheese Slice", price: "Rs.80" }
  ]
};

// ===== DEALS DATA =====
const dealsData = [
  { id: 1, price: 749, items: ["1 Small Pizza", "2 Chicken Strips", "500ml Drink"], best: true },
  { id: 2, price: 1599, items: ["1 Flame Grilled Burger", "6pc Sweet-N-Sour Wings", "1 Calzone", "500ml Drink"] },
  { id: 3, price: 1649, items: ["1 Medium Pizza", "1 Oven Baked Sandwich"] },
  { id: 4, price: 3399, items: ["1 Large Pizza", "1 Medium Pizza", "1 Large Pasta", "1.5L Drink"], best: true },
  { id: 5, price: 2249, items: ["1 Large Pizza", "1 Small Pasta + Reg Fries", "1 Liter Drink"] },
  { id: 6, price: 2200, items: ["1 Large Special Pizza", "5 Wings + 5 Nuggets", "1.5 Liter Drink"] },
  { id: 7, price: 899, items: ["1 Small Crunchy Pasta", "1 Grilled Panini"] },
  { id: 8, price: 899, items: ["1 Zinger Burger", "1 Crunchy Burger", "500ml Drink"] },
  { id: 9, price: 1099, items: ["1 Flame Grilled Burger", "1 Crunchy Burger", "1 Patty Burger", "500ml Drink"] },
  { id: 10, price: 1899, items: ["4 Zinger Burgers", "1 Liter Drink"] },
  { id: 11, price: 1449, items: ["4 Crunchy Burgers", "1 Liter Drink"] },
  { id: 12, price: 1299, items: ["1 Monster Burger", "1 Bahari Role", "500ml Drink"] },
  { id: 13, price: null, items: ["3 Small Pizzas", "1 Liter Drink Free"] },
  { id: 14, price: null, items: ["2 Large Pizzas", "1.5 Liter Drink Free"] },
  { id: 15, price: null, items: ["1 Medium Pizza", "Small Pasta + 5 Wings", "500ml Drink"] },
  { id: 16, price: 999, items: ["1 Bun Less Zinger", "1 Burgrizza"] }
];

// ===== RENDER MENU =====
const menuGrid = document.getElementById('menuGrid');
let currentCategory = 'starters';

function getImage(name, category) {
  return foodImages[name] || categoryFallback[category] || categoryFallback.burgers;
}

function renderMenu(category) {
  currentCategory = category;
  const items = menuData[category];
  if (!items) return;

  menuGrid.style.opacity = '0';
  menuGrid.style.transform = 'translateY(10px)';

  setTimeout(() => {
    menuGrid.innerHTML = items.map((item, i) => {
      if (item.subheader) {
        return `<div class="pizza-sub-header"><h3>${item.subheader}</h3></div>`;
      }
      const imgUrl = getImage(item.name, category);
      const isPopular = popularItems.includes(item.name);
      const hasMultiPrice = item.price.includes('|');
      const waText = encodeURIComponent(`Hi! I'd like to order: ${item.name}`);

      return `
        <div class="menu-card" data-aos="fade-up" data-aos-delay="${Math.min(i * 50, 300)}">
          <div class="menu-card-img">
            ${isPopular ? '<span class="menu-badge">Popular</span>' : ''}
            <img src="${imgUrl}" alt="${item.name}" loading="lazy"
                 onerror="this.src='${categoryFallback[category] || categoryFallback.burgers}'">
            <div class="menu-card-order">
              <a href="https://wa.me/923034031111?text=${waText}" target="_blank">
                Order on WhatsApp
              </a>
            </div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3>${item.name}</h3>
              ${!hasMultiPrice ? `<span class="menu-price">${item.price}</span>` : ''}
            </div>
            ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
            ${hasMultiPrice ? `<div class="menu-price-multi">${item.price}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    menuGrid.style.opacity = '1';
    menuGrid.style.transform = 'translateY(0)';

    // Re-init AOS for new elements
    if (typeof AOS !== 'undefined') AOS.refresh();
  }, 200);
}

// ===== RENDER DEALS =====
const dealsGrid = document.getElementById('dealsGrid');

function renderDeals() {
  dealsGrid.innerHTML = dealsData.map((deal, i) => {
    const waText = encodeURIComponent(`Hi! I'd like to order Deal ${deal.id}: ${deal.items.join(', ')}`);
    return `
      <div class="deal-card" data-aos="fade-up" data-aos-delay="${Math.min(i * 60, 400)}">
        <div class="deal-header">
          <div class="deal-number">${deal.id}</div>
          ${deal.best ? '<span class="deal-ribbon">Best Seller</span>' : ''}
        </div>
        <ul>${deal.items.map(item => `<li>${item}</li>`).join('')}</ul>
        <div class="deal-footer">
          <div class="deal-price ${deal.price ? '' : 'tbd'}">
            ${deal.price ? `Rs.${deal.price.toLocaleString()}` : 'Ask for Price'}
          </div>
          <a href="https://wa.me/923034031111?text=${waText}" target="_blank" class="deal-order">Order</a>
        </div>
      </div>
    `;
  }).join('');
}

// ===== TAB SWITCHING =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

// ===== CATEGORY BANNER CLICKS =====
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = item.dataset.cat;
    if (cat && menuData[cat]) {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.category === cat);
      });
      renderMenu(cat);
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
});

// ===== ANIMATED COUNTER =====
function animateCount(el, target) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      if (target && !el.dataset.animated) {
        el.dataset.animated = 'true';
        animateCount(el, target);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== CONTACT FORM (EmailJS) =====
/*
  =============================================
  To enable the contact form:
  1. Sign up at https://www.emailjs.com (free)
  2. Add your email service (Gmail, etc.)
  3. Create a template with variables:
     {{name}}, {{phone}}, {{email}}, {{message}}
  4. Replace the 3 values below:
  =============================================
*/
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// Init EmailJS
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<p>${message}</p>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (!name || !phone || !message) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  // Phone validation (Pakistani format)
  const phoneRegex = /^(03\d{2}[-\s]?\d{7}|04\d{1}[-\s]?\d{7,8}|\+92\d{10})$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    showToast('Please enter a valid phone number (e.g. 03XX-XXXXXXX)', 'error');
    return;
  }

  // Show loading
  submitBtn.querySelector('.btn-text').style.display = 'none';
  submitBtn.querySelector('.btn-loader').style.display = 'inline';
  submitBtn.disabled = true;

  if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' && typeof emailjs !== 'undefined') {
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name, phone, email: email || 'Not provided', message
      });
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      contactForm.reset();
    } catch (err) {
      showToast('Failed to send message. Please try WhatsApp or call us directly.', 'error');
    }
  } else {
    // Fallback: open WhatsApp with the message
    const waMsg = encodeURIComponent(`Hi CHEESEIO!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\n\n${message}`);
    window.open(`https://wa.me/923034031111?text=${waMsg}`, '_blank');
    showToast('Opening WhatsApp to send your message!', 'success');
    contactForm.reset();
  }

  // Reset button
  submitBtn.querySelector('.btn-text').style.display = 'inline';
  submitBtn.querySelector('.btn-loader').style.display = 'none';
  submitBtn.disabled = false;
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1200);
});

// ===== AOS INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }
});

// ===== MENU TRANSITION =====
const menuGridEl = document.getElementById('menuGrid');
menuGridEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

// ===== INIT =====
renderMenu('starters');
renderDeals();
