#  Gifs App Angular and Tailwind CSS

A web application built with **Angular** that allows users to search and display GIFs in real time using an external API.

This project demonstrates modular architecture, HTTP service consumption, simple state management, and automated deployment using GitHub Actions to GitHub Pages.

---

##  Features

-  Real-time GIF search
-  REST API integration
-  Modular Angular architecture
-  HTTP services using `HttpClient`
-  Recent searches persisted with `LocalStorage`
-  Automated CI/CD deployment
-  Hosted on GitHub Pages

---

## 🛠️ Technologies Used

-  Angular
-  Tailwind CSS
-  Node.js
-  npm
-  Git & GitHub
-  GitHub Actions (CI/CD)
-  GitHub Pages

---

##  Installation & Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/dalbacarrasco/gifs-app-angular.git
```

### 2️⃣ Navigate into the project folder

```bash
cd gifs-app-angular
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run in development mode

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200/
```

---

##  Production Build

```bash
ng build
```

---

## 🔄 Deployment

This project uses **GitHub Actions** to:

- Automatically build the application
- Generate deployment artifacts
- Deploy to GitHub Pages

Every `push` to the `main` branch that modifies source code triggers the deployment pipeline.

---

