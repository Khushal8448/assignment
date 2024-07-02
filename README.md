# Express + TypeScript

This repository contains a simple demonstration of a RESTful API built using Express.js.

## Table of Contents

- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

- [User API Endpoints](#userapi-endpoints)
  - [POST /api/users/register](#post-registeruser)
  - [POST /api/users/login](#post-loginuser)
- [Product API Endpoints](#productapi-endpoints)
  - [POST /api/products/](#get-addNewProduct)
  - [GET /api/products/](#get-getAllProducts)
  - [GET /api/products/:productId](#post-getProductDetails)
  - [PUT /api/products/:productId](#put-updateProductDetails)
  - [DELETE /api/products/:productId](#delete-deleteProduct)
- [Error Handling](#error-handling)
- [Built With](#built-with)
- [Contact](#contact)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-rest-api-demo
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Setting Up .env file:
   ```
   PORT=
   JWT_SECRET=
   DATABASE_URL=
   ```
4. Running the Server:
   ```
   npm start
   ```
5. Prisma client generate:
   ```
   npx prisma generate
   ```

## User API Endpoints

#### POST /api/users/register

- Creates a new user.

- Request Body:

  ```
  {
    "name": "navin",
    "email": "navin@gmail.com",
    "password": "123456"
  }
  ```

- Response json:
  ```
  {
     "id": 5,
     "name": "navin",
     "email": "navin@gmail.com",
     "pics": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzE5OTE5MzM3LCJleHAiOjE3MjEyMTUzMzd9.a7FWZva6PIsybw5VYF_EHpofMl0jjTSlR6ojF8GrNA4"
  }
  ```

#### POST /api/users/login

- Creates a new user.

- Request Body:

  ```
  {
    "name": "navin",
    "email": "navin@gmail.com",
    "password": "123456"
  }
  ```

- Response json:
  ```
  {
     "id": 5,
     "name": "navin",
     "email": "navin@gmail.com",
     "pics": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzE5OTE5MzM3LCJleHAiOjE3MjEyMTUzMzd9.a7FWZva6PIsybw5VYF_EHpofMl0jjTSlR6ojF8GrNA4"
  }
  ```
