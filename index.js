import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

// Import the express module
const app = express();
const PORT = 5000;

// Use the body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the usersRoutes middleware for all requests to the /people route
app.use("/people", usersRoutes);
// Send a welcome message to the root route
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// Send a message to any other route that doesn't exist
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

// Start the server on the specified port
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
