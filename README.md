# GitHub View

## Описание проекта

GitHub View — это веб-приложение с использованием React, Vite на фронте и Node.js + Express на бэкенде.

## Внешние зависимости

1. Frontend:
    - react
    - react-dom
    - react-router-dom
    - @reduxjs/toolkit
    - react-redux
    - redux-persist
    - axios
    - tailwindcss
    - @tailwindcss/vite
    - react-toastify
2. Backend:
    - express
    - cors
    - dotenv
    - nodemon

## Пошаговая установка проекта

1. Клонировать репозиторий:

    ```bash
    git clone https://github.com/muradilinc/bitbucket.git
    ```

2. Перейти в папку проекта:

    ```bash
    cd {название-проекта}
    ```

3. Перейти в папку backend:

    ```bash
    cd api
    ```

4. Установить зависимости:

    ```bash
    npm install
    ```

5. Создать файл `.env` в папке backend со следующим содержимым:

    ```env
    CLIENT_ID=Ov23li7YXDx5nIj0rXwa
    CLIENT_SECRET=d555790a073fdcfa4c6e3dcfabe56aca131eb3e9
    ```

6. Запустить backend сервер:

    ```bash
    npm run dev
    ```

7. Перейти в папку frontend:

    ```bash
    cd ../frontend
    ```

8. Установить зависимости:

    ```bash
    npm install
    ```

9. Создать файл `.env` в папке frontend со следующим содержимым:

    ```env
    VITE_CLIENT_ID=Ov23li7YXDx5nIj0rXwa
    ```

10. Запустить frontend:

    ```bash
    npm run dev
    ```

11. Открыть браузер и перейти по адресу:

    ```
    http://localhost:5173
    ```

---
