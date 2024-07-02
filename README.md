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

- Login as existing user.

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

## Product API Endpoints

### Get All Products

#### Get /api/products/

- Request Header:

  ```
  {
    Authorization: `Bearer ${jwtToken}`,
  }
  ```

- Response json:
  ```
  [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "brand": "SoundMagic",
      "description": "High-quality wireless headphones with noise cancellation and long battery life.",
      "price": "99",
      "quantity": 30,
      "category": "Electronics",
      "createdAt": "2024-07-02T08:09:59.459Z",
      "updatedAt": "2024-07-02T08:09:59.459Z"
    },
    {
      "id": 3,
      "name": "Smart LED Light Bulb",
      "brand": "BrightLife",
      "description": "Energy-efficient smart LED light bulb with adjustable brightness and color settings, compatible with voice assistants.",
      "price": "28.99",
      "quantity": 200,
      "category": "Household",
      "createdAt": "2024-07-02T08:15:38.951Z",
      "updatedAt": "2024-07-02T08:49:38.449Z"
    }
  ]
  ```

### Add New Product

#### POST /api/products/

- Request Header:

  ```
  {
    Authorization: `Bearer ${jwtToken}`,
  }
  ```

- Request Body:

  ```
  {
    "name": "Ergonomic Office Chair",
    "description": "Adjustable ergonomic office chair with lumbar support and breathable mesh backrest.",
    "price": "149.99",
    "category": "Household",
    "brand": "ComfortSeating",
    "quantity": 300
  }
  ```

- Response json:
  ```
  {
    "id": 4,
    "name": "Ergonomic Office Chair",
    "brand": "ComfortSeating",
    "description": "Adjustable ergonomic office chair with lumbar support and breathable mesh backrest.",
    "price": "149.99",
    "quantity": 300,
    "category": "Household",
    "createdAt": "2024-07-02T11:47:49.164Z",
    "updatedAt": "2024-07-02T11:47:49.164Z"
  }
  ```
  
### Get Product Details

#### Get /api/products/:productId

- Request Header:

  ```
  {
    Authorization: `Bearer ${jwtToken}`,
  }
  ```

- Response json:
  ```
  {
    "id": 4,
    "name": "Ergonomic Office Chair",
    "brand": "ComfortSeating",
    "description": "Adjustable ergonomic office chair with lumbar support and breathable mesh backrest.",
    "price": "149.99",
    "quantity": 300,
    "category": "Household",
    "createdAt": "2024-07-02T11:47:49.164Z",
    "updatedAt": "2024-07-02T11:47:49.164Z"
  }
  ```

  
### Update Product Details

#### Put /api/products/:productId

- Request Header:

  ```
  {
    Authorization: `Bearer ${jwtToken}`,
  }
  ```

- Request body:
  ```
  {
    "name": "Ergonomic Office Chair",
    "description": "Adjustable ergonomic office chair with lumbar support and breathable mesh backrest.",
    "price": "149.99",
    "category": "Household",
    "brand": "Godo",
    "quantity": 300
  }
  ```
- Response json:
  ```
  {
    "id": 4,
    "name": "Ergonomic Office Chair",
    "brand": "Godo",
    "description": "Adjustable ergonomic office chair with lumbar support and breathable mesh backrest.",
    "price": "149.99",
    "quantity": 300,
    "category": "Household",
    "createdAt": "2024-07-02T11:47:49.164Z",
    "updatedAt": "2024-07-02T13:36:38.834Z"
  }
  ```
  
### Delete Product

#### Delete /api/products/:productId

- Request Header:

  ```
  {
    Authorization: `Bearer ${jwtToken}`,
  }
  ```
## Build With

[![My Skills](https://skillicons.dev/icons?i=express,typescript,prisma,postgresql)](https://skillicons.dev)

## Contact

- **Email:** [Email Here](mailto:khushalmali8448@gmail.com)
- **LinkedIn:** [Khushal Mali](https://www.linkedin.com/in/khushalmali)


