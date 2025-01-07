# Recipe Finder Web Application

## Overview

The **Recipe Finder** is a responsive and intuitive web application designed to provide users with access to a wide range of recipes from various cuisines. It features advanced functionalities like recipe search, favorites management, a shopping list, and social sharing, all tailored to create an engaging and seamless user experience.

---

## Features

### 1. **Recipe Search**
- Users can search for recipes using keywords.
- Real-time results display recipes matching the query.
- Allows users to explore global cuisines and categories.

### 2. **Favorites Management**
- Users can add or remove recipes to/from their favorites list.
- Favorite recipes are stored locally, ensuring they persist between sessions.

### 3. **Shopping List**
- Users can manage a shopping list by selecting ingredients required for recipes.
- Ingredients can be added or removed, and the list is saved locally for future reference.

### 4. **Recipe Details**
- Users can click "Learn More" on a recipe to view:
  - Ingredients and their measurements.
  - Cooking instructions.
  - A YouTube tutorial video (if available).
- Integrated options for adding ingredients to the shopping list.

### 5. **Social Sharing**
- Recipes can be shared directly on social media platforms like Facebook, Twitter, and WhatsApp.

### 6. **Mobile and Desktop Compatibility**
- Fully responsive design, compatible with all screen sizes and devices.
- Optimized navigation for both desktop (top navigation bar) and mobile (hamburger menu).

### 7. **Welcome Modal**
- A visually appealing welcome modal introduces the app to users on their first visit.

---

## Technology Stack

- **Frontend Framework:** React.js
- **CSS Framework:** TailwindCSS
- **State Management:** React Hooks
- **API:** TheMealDB API (for fetching recipes and details)
- **Social Sharing:** `react-share` library

---

## Development Process

### Key Steps:
1. **Initial Setup:**
   - Set up the project structure using React.js and TailwindCSS for styling.

2. **Core Functionalities:**
   - Implemented recipe search using TheMealDB API.
   - Developed components for recipe cards, favorites, shopping lists, and recipe details.

3. **Responsive Design:**
   - Ensured a seamless experience on both mobile and desktop using responsive CSS utilities.

4. **State Management:**
   - Used React's `useState` and `useEffect` hooks for efficient data handling and local storage integration.

5. **Social Sharing:**
   - Added sharing buttons for recipes using the `react-share` library.

6. **Iterative Testing:**
   - Debugged and resolved issues like mobile navigation bugs and visual inconsistencies.

---

## Challenges Faced

- **Ensuring Responsiveness:**
  Adapting the UI for varying screen sizes required iterative adjustments.
- **Performance Optimization:**
  Handling multiple API requests efficiently while maintaining a smooth user experience.
- **Debugging Mobile Navigation:**
  Addressed issues with the hamburger menu display on different devices.

---

## How to Run the Project

### Prerequisites:
- Node.js installed on your local machine.
- A package manager like npm or yarn.

### Steps:
1. Clone the repository:
    ```bash
   git clone <https://github.com/Kbayoumi561/FE-Capstone-Project.git>

2. Navigate to the project folder:
    ```bash
    cd recipe-finder

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm start

5. Open the app in your browser:
    ```bash
    Visit http://localhost:3000
