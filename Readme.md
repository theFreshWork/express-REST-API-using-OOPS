# Express REST API with TypeScript & OOP

This repository contains a Sample backend REST API. It is built using Express.js and TypeScript, with a strong emphasis on Object-Oriented Programming (OOP) principles and a clean, layered architecture. It uses Prisma as the ORM for interacting with a PostgreSQL database.

## Key Features

- **Framework**: Express.js for building robust APIs.
- **Language**: TypeScript for type safety and scalability.
- **Database**: PostgreSQL with Prisma ORM for seamless database interaction.
- **Architecture**: Clean, layered architecture (Routes, Controllers, Services, Repositories).
- **Design Patterns**: Utilizes Object-Oriented Programming (OOP) and the Repository Pattern for decoupled, maintainable code.
- **Validation**:
  Request validation using Joi to ensure data integrity.
- **Security**: Password hashing with bcrypt.
- **Error Handling**: Centralized and custom error handling middleware.

## Project Structure

The project follows a modular and scalable structure designed to separate concerns and improve maintainability.

```
.
├── prisma/             # Prisma schema and database migrations
├── src/
│   ├── base/           # Base classes for controllers and validators
│   ├── common/         # Common TypeScript interfaces
│   ├── controller/     # Express controllers to handle requests and responses
│   ├── db/             # Prisma client instance and common queries
│   ├── repositories/   # Data access layer (interacts with the database)
│   ├── routes/         # API route definitions
│   ├── server/         # Express server setup and initialization
│   ├── services/       # Business logic layer
│   ├── utils/          # Helper functions and custom error classes
│   └── validations/    # Joi validation schemas
├── .env.example        # Example environment variables
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript compiler options
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [NPM](https://www.npmjs.com/)
- A running [PostgreSQL](https://www.postgresql.org/) database instance

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amanbnl/express-rest-api-using-oops.git
    cd express-rest-api-using-oops
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory by copying the example file.
    ```bash
    cp .env.example .env
    ```
    Open the `.env` file and update the variables with your database configuration:
    ```env
    # Your PostgreSQL connection string
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db_name>"

    # Port for the application to run on
    APP_PORT=8000

    # Bcrypt salt rounds for password hashing
    SALT_ROUND=10
    ```

4.  **Run database migrations:**
    This command applies the schema defined in `prisma/schema.prisma` to your database.
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    The server runs using `nodemon`, which will automatically restart the application upon file changes.
    ```bash
    npm start
    ```
    The API will be available at `http://localhost:8000` (or the port specified in your `.env` file).

## API Endpoints

The API provides endpoints for user management under the `/api/v1/users` route.

| Method   | Endpoint            | Description                                                                   |
| :------- | :------------------ | :--------------------------------------------------------------------------- |
| `POST`   | `/api/v1/users`     | Creates a new user. The role is automatically set to 'customer'.             |
| `GET`    | `/api/v1/users`     | Retrieves a list of all users.                                               |
| `GET`    | `/api/v1/users/:id` | Retrieves a single user by their unique ID.                                  |
| `PATCH`  | `/api/v1/users/:id` | Updates an existing user's details (full name, email, phone number).         |
| `DELETE` | `/api/v1/users/:id` | Deletes a user by their unique ID.                                           |

## Database Schema

The database schema is managed by Prisma and is defined in the `prisma/schema.prisma` file. It includes models for `users`, `roles`.