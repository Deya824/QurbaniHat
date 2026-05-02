# 🐄 Qurbani Livestock Management System

A full-stack livestock booking and management application designed for a seamless Qurbani experience. This platform allows users to browse, view details, and book livestock while managing their profiles with secure authentication.

**Live URL:** [Insert Your Live Deployment URL Here]

---

## 🚀 Purpose
The purpose of this project is to provide a user-friendly digital marketplace for Qurbani animals. It simplifies the process of finding healthy livestock by offering detailed specifications (weight, breed, price) and a secure booking system, ensuring transparency and ease for both buyers and sellers.

---

## ✨ Key Features

*   **Secure Authentication**: Fully integrated authentication using **Better Auth**, supporting Email/Password registration and **Google Social Login**.
*   **Dynamic Animal Directory**: A public catalog of available livestock with real-time fetching from a JSON data source.
*   **Protected Details & Booking**: Private routes for viewing deep details and a specialized **DaisyUI Modal** for booking livestock.
*   **User Profile Management**: A dedicated private profile page featuring a custom update form to modify user display names and profile photos.
*   **Responsive UI/UX**: Built with **HeroUI** and **Tailwind CSS** for a mobile-first, aesthetic "emerald-green" theme.
*   **Modern State Handling**: Utilizes Next.js 15 `loading.jsx` with animated spinners and custom `not-found` pages for a professional feel.
*   **Interactive Notifications**: Integrated **React Hot Toast** for real-time feedback on logins, registrations, and profile updates.
*   **Engaging Animations**: Leverages **Animate.css** for smooth page transitions and entry effects.

---

## 🛠️ Tech Stack & NPM Packages

### **Core Frameworks**
*   **Next.js 15**: React framework for server-side rendering and routing.
*   **Tailwind CSS**: Utility-first CSS framework for styling.

### **Authentication**
*   **Better Auth**: For managing sessions, social logins, and user updates.

### **UI Components & Icons**
*   **@heroui/react**: Advanced UI components for cards, buttons, and inputs.
*   **DaisyUI**: Tailwind CSS component library for modals and spinners.
*   **React Icons**: High-quality vector icons (BoxIcons/Bi) for the user interface.

### **Utilities**
*   **React Hot Toast**: For accessible and customizable toast notifications.
*   **Animate.css**: For ready-to-use cross-browser animations.

---

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/qurbani-management.git](https://github.com/your-username/qurbani-management.git)
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    BETTER_AUTH_SECRET=your_secret
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    GOOGLE_CLIENT_ID=your_id
    GOOGLE_CLIENT_SECRET=your_secret
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 📄 License
This project was developed as part of a technical assignment for Rajshahi University of Engineering & Technology (RUET).