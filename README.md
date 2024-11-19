# User Management API

A simple Node.js and Express.js API for managing users. This API supports CRUD operations for user management, including creating, reading, updating, and deleting user data.

![image alt](https://github.com/ShiruvatiNarasimha/-Express.js-and-Basic-CRUD-API-/blob/95e525072a9b9204c99cc4abc2bb8f65e3a983cb/Screenshot%202024-11-19%20174940.png)

## Features

- **GET /users** - Retrieve a list of all users.
- **POST /users** - Create a new user.
- **GET /users/:id** - Retrieve details of a specific user by their ID.
- **DELETE /users/:id** - Delete a user by their ID.
- **PATCH /users/:id** - Update details of a specific user by their ID.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>



   cd Node_express_api
   npm install
   npm start
   Access the API at http://localhost:3000 (or your configured port).

 Endpoints
Method	Endpoint	Description
GET	/users	Retrieves all users.
POST	/users	Creates a new user.
GET	/users/:id	Retrieves a user by ID.
DELETE	/users/:id	Deletes a user by ID.
PATCH	/users/:id	Updates a user by ID.

Retrieve All Users
Request:

http
Copy code
GET /users HTTP/1.1
Host: localhost:3000



Response:

json
Copy code
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]
