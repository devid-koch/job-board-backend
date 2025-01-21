# Job Board API

This is a simple Job Board API built with Node.js, TypeScript, and MySQL. It provides CRUD operations for managing job postings.

## Features
- Create, Read, Update, and Delete (CRUD) operations for job postings.
- MySQL database integration.
- Swagger documentation for API endpoints.
- Dockerized setup with `Dockerfile` and `docker-compose.yml`.

## Prerequisites
- Node.js (v16+ recommended)
- Docker & Docker Compose
- MySQL Database

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-board-backend.git
   cd job-board-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   DB_URL=mysql://<username>:<password>@<host>:<port>/<database>
   PORT=3000
   ```

4. Run the project:
   ```bash
   npm start
   ```

## Using Docker

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. The API will be available at `http://localhost:3000`.

## API Documentation

Swagger documentation is available at `http://localhost:3000/api-docs`.

### Endpoints

#### Jobs
- `GET /jobs`: Retrieve all job postings.
- `GET /jobs/:id`: Retrieve a single job posting by ID.
- `POST /jobs`: Create a new job posting.
- `PUT /jobs/:id`: Update a job posting by ID.
- `DELETE /jobs/:id`: Delete a job posting by ID.

## Project Structure
```
job-board-backend/
├── src/
│   ├── controllers/         # Controller logic
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── config/              # Configuration files
│   └── index.ts             # Entry point
├── docker-compose.yml       # Docker Compose file
├── Dockerfile               # Dockerfile for API
├── package.json             # Node.js dependencies
└── README.md                # Project documentation
```

## License
This project is licensed under the MIT License.
