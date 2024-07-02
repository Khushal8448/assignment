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

## User API Endpoints
