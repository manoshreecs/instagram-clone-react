# Instagram Clone - React Project

A fully functional **Instagram clone** built with **React**, **Bootstrap 5**, and **React Router**.  
This project demonstrates the core features of Instagram, including Stories, Posts, Followers, and Suggestions.

---

## 🌟 Features

- **Home Feed**: View posts with images, captions, and likes.
- **Stories**: Clickable story carousel with navigation between stories.
- **Profile Page**: View your profile and list of followers.
- **Suggestions**: Suggested users to follow with Follow/Unfollow functionality.
- **Responsive Layout**: Works well on desktop and mobile screens.
- **Modern UI**: Styled with Bootstrap 5 and custom CSS.

---

## 🛠️ Technologies Used

- **React** - Frontend library for building UI components
- **React Router** - Routing between Home, Profile, and Story pages
- **Bootstrap 5** - Responsive UI and icons
- **React Context API** - State management for profile, followers, and suggestions
- **Vite** - Fast development and build tool
- **JSON server** - Local mock API for posts, stories, and suggestions

---

## 📁 Project Structure

```instagram-clone-react/
├─ public/ # Static files
├─ src/
│ ├─ assets/ # Images (logo, story images, icons)
│ ├─ Components/ # React components
│ │ ├─ Feed.jsx
│ │ ├─ Posts.jsx
│ │ ├─ Stories.jsx
│ │ ├─ Sidebar.jsx
│ │ └─ Suggestions.jsx
│ ├─ App.jsx # Main app component
│ ├─ Profile.jsx # Profile page component
│ ├─ Viewstory.jsx # Story view component
│ ├─ ProfileContext.jsx # Context for profile and followers
│ ├─ index.css # Global styles
│ └─ main.jsx # App entry point
├─ db/ # Mock JSON data (posts, story, suggestions)
├─ package.json
├─ package-lock.json
├─ vite.config.js
└─ README.md```

---

## 🚀 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/instagram-clone-react.git
cd instagram-clone-react
Install dependencies

npm install
Start JSON server

npx json-server --watch db/dbs.json --port 3000
Start the React app

npm run dev
Open in browser

React app: http://localhost:5173

JSON server: http://localhost:3000
