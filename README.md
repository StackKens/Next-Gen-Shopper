# Next-Gen-Shopper

A modern **React + Vite** web application to manage your shopping lists and tasks. This project is built for learning purposes and demonstrates advanced React concepts including **state management**, **component composition**, **props and children**, **useEffect hook**, and **local storage persistence**.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Installation & Setup](#installation--setup)
6. [Usage](#usage)
7. [Future Improvements](#future-improvements)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Project Overview**

The Shopping List App allows users to:

- Add items to a shopping list.
- Select the time you want to go for shopping
- Edit and delete individual items.
- Select the category of their items
- Mark items as bought/unbought.
- Persist data across sessions using **local storage**.
- Filter and search items dynamically.
- Manage state efficiently using React hooks.

This project was developed to **practice React fundamentals**, including:

- **Component-driven architecture**.
- **Props & Children components**.
- **useState & useEffect hooks**.
- **Local storage integration**.
- **Vite development server and build process**.

---

## **Features**

- Add, edit, and delete shopping list items.
- Mark items as completed or pending.
- Persist list data in **local storage**.
- Filter by status (All / Completed / Pending).
- Search items by name.
- Dark/Light mode toggle (optional advanced feature).
- Drag & drop reordering (optional advanced feature).
- Responsive design for mobile and desktop.

---

## **Technologies Used**

- **React 18** – Frontend library for building UI components.
- **Vite** – Fast development server and build tool.
- **JavaScript (ES6+)** – Programming language for app logic.
- **CSS** – Styling the app (or Tailwind if used).
- **Local Storage** – For persistent data storage.
- **Node.js & npm** – Package management and running scripts.

---

## **Folder Structure**

shopping-list/
├─ node_modules/ # Installed dependencies
├─ public/ # Static assets (images, icons, etc.)
├─ src/ # Main source code
│ ├─ assets/ # Project images/icons
│ ├─ App.jsx # Main component
│ ├─ main.jsx # React entry point
│ └─ index.css # Global styles
├─ .gitignore # Files to ignore in Git
├─ index.html # HTML template
├─ package.json # Project metadata and dependencies
├─ package-lock.json # Locked dependency versions
└─ vite.config.js # Vite configuration

---

## **Installation & Setup**

**Prerequisites:** Node.js (v16+) and npm installed.

1. **Clone the repository**

```bash
git clone https://github.com/stackKens/Next-Gen-Shopper.git
cd shopping-list-app

** Installation**
npm install

npm run dev

npm run build

npm run preview
```

## Usage

Add a shopping item using the input field.

Select time you will go for shopping(Morning, Afternoon, Evening)

Click Edit to change item.

Click Delete to remove an item.

Click Complete to mark as bought.

Use filters to view All, Bought, or Pending items.

Search items using the search bar.

Your list is automatically saved in local storage.

## **Future Improvements**

Integration with a backend API for cloud storage.

User authentication to manage multiple users.

Drag & drop ordering of items.

Categorization of items (e.g., groceries, electronics).

Dark/Light mode toggle with theme persistence.

Responsive UI improvements for tablets and mobiles.

## **Contributing**

Contributions are welcome!

Fork the project.

Create a new branch (git checkout -b feature-name).

Make your changes and commit (git commit -m 'Add feature').

Push to branch (git push origin feature-name).

Open a Pull Request.

## **Contact**

Created by **stackKens** – feel free to reach out via GitHub.

## License

MIT
