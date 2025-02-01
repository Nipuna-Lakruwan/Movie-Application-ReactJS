# Movie Application

This project is a movie application built with React and Vite. It allows users to search for movies, view trending movies, and see detailed information about each movie.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/movie-application.git
cd movie-application/my-first-react-app
npm install
```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:3000`.

## Project Structure

The project structure is as follows:

```sh
my-first-react-app/
├── .idea/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   ├── Spinner.jsx
│   ├── App.jsx
│   ├── appwrite.js
│   ├── index.css
│   ├── main.jsx
├── .env.local
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

### Components

- **MovieCard.jsx**: Displays individual movie details.
- **Search.jsx**: Provides a search input for users to search for movies.
- **Spinner.jsx**: Displays a loading spinner while fetching data.

### Main Files

- **App.jsx**: The main component that renders the application.
- **appwrite.js**: Contains functions to interact with the Appwrite backend.
- **index.css**: Contains the global styles for the application.
- **main.jsx**: The entry point of the application.

## Environment Variables

The project uses environment variables to store sensitive information. Create a `.env.local` file in the root of the project and add the following variables:

```jsx
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build from the `dist` folder.

### `npm run lint`

Runs ESLint to check for linting errors.

## Dependencies

The project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development server and optimized build.
- **TailwindCSS**: A utility-first CSS framework.
- **Appwrite**: A backend server for web, mobile, and Flutter developers.

## Screenshots

Here are some screenshots of the application:

![Screenshot 1](https://github.com/Nipuna-Lakruwan/Movie-Application-ReactJS/blob/c0de21128d5e0faaed0640fa096e6519c8c262a8/public/ss0.png)
![Screenshot 2](https://github.com/Nipuna-Lakruwan/Movie-Application-ReactJS/blob/c0de21128d5e0faaed0640fa096e6519c8c262a8/public/ss1.png)
![Screenshot 3](https://github.com/Nipuna-Lakruwan/Movie-Application-ReactJS/blob/c0de21128d5e0faaed0640fa096e6519c8c262a8/public/ss2.png)

## License

This project is licensed under the MIT License.
