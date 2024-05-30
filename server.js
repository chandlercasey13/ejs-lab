//Consts-------------------------------------------------------------------------------
const express = require("express");
const app = express();

const RESTAURANT = {
  name: "The Green Byte Bistro",
  isOpen: true,
  address: "742 Evergreen Rd, Mapleview, OS 45502",
  phone: "555-321-9876",
  menu: [
    {
      id: 1,
      name: "Quantum Quinoa Mushroom Burger",
      price: 13.0,
      rating: 4,
      category: "mains",
      details:
        "A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.",
    },
    {
      id: 2,
      name: "Binary Berry Cheesecake",
      price: 10.11,
      rating: 3,
      category: "desserts",
      details:
        "A creamy cheesecake bursting with flavor. A mix of berries in every byte.",
    },
    {
      id: 3,
      name: "Recursive Rigatoni",
      price: 17.0,
      rating: 5,
      category: "mains",
      details:
        "A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more.",
    },
    {
      id: 4,
      name: "Pumpkin Pi Squared",
      price: 3.14,
      rating: 5,
      category: "desserts",
      details:
        "A delightful pumpkin dessert, squared and spiced to perfection.",
    },
    {
      id: 5,
      name: "Fibonacci String Bean Fries",
      price: 11.23,
      rating: 5,
      category: "sides",
      details:
        "Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.",
    },
  ],
};

//Functions/Logic--------------------------------------------------------------------------------

//thought this was cool
const now = new Date();
const hours = now.getHours();

// if the current time is between 8am and 4pm
function isOpen() {
  let open = "";
  if (hours > 8 && hours < 16) {
    open = true;
  } else {
    open = false;
  }
  return open;
}

function capitalize(string) {
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      word += string[i].toUpperCase();
    } else {
      word += string[i];
    }
  }
  return word;
}

//Routes-------------------------------------------------------------------------------

app.get("/menu/:category", function (req, res) {
  res.render("category.ejs", {
    category_name: capitalize(req.params.category),
    category: RESTAURANT.menu.filter((item) => {
      if (req.params.category === item.category) {
        return true;
      }
    }),
  });
});

app.get("/menu", function (req, res) {
  res.render("menu.ejs", {
    menu: RESTAURANT.menu,
  });
});

app.get("/", function (req, res) {
  res.render("home.ejs", {
    restaurant: RESTAURANT,
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone,
    open: isOpen(),
  });
});
app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.listen(3000);
