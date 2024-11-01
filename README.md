# Latest Urdu News

A simple web application that fetches and displays the latest Urdu news articles from a selected RSS feed. This project uses Node.js, Express, and EJS for templating, and it is fully Dockerized for easy deployment. The application presents news articles in a visually appealing dark-themed interface.

> **Note:** This project is created purely for educational purposes to demonstrate web development concepts and RSS feed parsing in a Node.js environment.

## Features

- Fetches latest Urdu news articles from an RSS feed (e.g., BBC Urdu).
- Dark-themed UI with a modern, card-based design.
- Dockerized setup for easy deployment and testing.
- Responsive design optimized for various screen sizes.

## Project Structure

```plaintext
latest-urdu-news/
├── app.js                 # Main server file
├── config/
│   └── db.js              # Database configuration (MongoDB)
├── controllers/
│   └── blogController.js  # Controller for handling blog logic (if expanded)
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Dockerfile for building the application image
├── models/
│   └── BlogPost.js        # Database model (MongoDB)
├── public/                # Static assets (CSS, images, etc.)
├── routes/
│   └── blogRoutes.js      # Route definitions
├── views/
│   ├── index.ejs          # Main template for displaying news
│   └── manage.ejs         # Additional template for management
└── README.md              # Project documentation
```

## Prerequisites

- **Docker** and **Docker Compose** installed.
- **Git** for version control.
- **Node.js** (only if running locally without Docker).

## Getting Started

To run this project locally using Docker, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/KhuramMurad/latest-urdu-news.git
cd latest-urdu-news
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of the project and add your MongoDB URI and port configurations:

```plaintext
MONGO_URI=mongodb://mongo:27017/blogdb
PORT=5050
```

### 3. Run the Application with Docker

Build and run the project using Docker Compose:

```bash
docker-compose up --build
```

This will start the Node.js application and a MongoDB instance in Docker containers.

### 4. Access the Application

Visit [http://localhost:5050](http://localhost:5050) in your browser to view the application.

## Usage

- **Home Page**: Displays the latest Urdu news articles in a card-based layout.
- **Error Handling**: If news cannot be fetched, an error message is displayed.

## Screenshots
![image](https://github.com/user-attachments/assets/905f497e-ccbf-4129-bde6-9312aff901d0)

## Technologies Used

- **Node.js** and **Express**: Server-side logic and API handling.
- **EJS**: Templating engine for rendering HTML views.
- **MongoDB**: Database for potential blog post storage.
- **Docker**: Containerization for easy deployment.
- **CSS**: Custom styles for dark-themed UI.

## License

This project is licensed under the MIT License.

> **Disclaimer**: This project is intended solely for educational purposes and should not be used for any commercial or official purposes. The news content is fetched from public RSS feeds, and all copyrights remain with their respective content providers.
