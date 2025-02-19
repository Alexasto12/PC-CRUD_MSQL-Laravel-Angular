# PC-CRUD_MYSQL-Laravel-Angular 💻⚙️

Welcome to the **PC-CRUD_MYSQL-Laravel-Angular** project! 🚀  
This is a full-stack web application that demonstrates **CRUD** (Create, Read, Update, Delete) operations for managing **PC-related data**. It leverages a **Laravel**-based backend API and an **Angular**-based frontend, with **MySQL** as the database.

![PHP](https://img.shields.io/badge/PHP-%3E%3D7.3-blue) ![Laravel](https://img.shields.io/badge/Laravel-8.x-red) ![MySQL](https://img.shields.io/badge/MySQL-5.7%2B-orange) ![Angular](https://img.shields.io/badge/Angular-12.x-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-14.x-green)

## Features ✨

- **Backend**: Laravel framework serving as a RESTful API. 🖥️
- **Frontend**: Angular application for a dynamic and interactive user interface. 🎨
- **Database**: MySQL for secure and efficient data storage. 💾
- **CRUD Operations**: Full implementation of **create**, **read**, **update**, and **delete** functionalities. 🔧

## Prerequisites ⚠️

Before setting up the project, make sure you have the following installed:

- **General:**
  - Node.js (required for Angular development and package management) 🌐

- **Backend:**
  - PHP >= 7.3 🔧
  - Composer (for managing PHP dependencies) 📦
  - MySQL (for database management) 🗄️

- **Frontend:**
  - Angular CLI (for Angular project management) 📱

## Installation 🚀

### Backend Setup 🖥️

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Alexasto12/PC-CRUD_MSQL-Laravel-Angular.git
    cd PC-CRUD_MSQL-Laravel-Angular/server
    ```

2. **Install dependencies**:

    ```bash
    composer install
    ```

3. **Configure environment**:

   - Duplicate `.env.example` and rename it to `.env`.
   - Set your database credentials in the `.env` file (MySQL username, password, database name, etc.). 🔐

4. **Generate application key**:

    ```bash
    php artisan key:generate
    ```

5. **Run migrations and seed the database**:

    ```bash
    php artisan migrate --seed
    ```

6. **Start the server**:

    ```bash
    php artisan serve
    ```

    The backend API should now be running at `http://localhost:8000/` 🌍.

### Frontend Setup 📱

1. **Navigate to the client directory**:

    ```bash
    cd ../client/PC_Client
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the Angular development server**:

    ```bash
    ng serve
    ```

    The frontend application should now be running at `http://localhost:4200/`. 🎉

## Usage 🔧

Once both the backend and frontend servers are up and running, you can access the web application through your browser. The app allows you to manage your PC records efficiently with the ability to **create**, **read**, **update**, and **delete** PC-related entries. 🖱️

## License 📄

This project is licensed under the **MIT License**. Feel free to fork and contribute! 🚀

## Contributing 🤝

We welcome contributions to make this project better! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

Let's collaborate! 💡
