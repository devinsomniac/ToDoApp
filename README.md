# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # To Do App

## Overview

This is a To Do application built with React and styled using Tailwind CSS. It allows users to add, manage, and view their tasks. The app uses JS Cookie to save the tasks for 7 days, so your to-do list persists across sessions.

## Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Manage Tasks**: Mark tasks as complete or delete them.
- **Persistent Data**: Uses JS Cookie to save your tasks for 7 days.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JS Cookie**: A simple library to handle cookies in JavaScript.

## Getting Started

To get started with this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ToDoApp.git
cd ToDoApp
npm install
npm run dev
```
Navigate to ```http://localhost:5173``` in your browser to view the app.
## Configuration
The Vite configuration is set up to serve the app from the /ToDoApp/ base path. If you are hosting it from a different path, update the base property in vite.config.js accordingly.

##Usage
- Add a Task: Type your task into the input field and click "Add Task."
- Delete a Task: Click the delete icon next to a task to remove it from the list

