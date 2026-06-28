# 🏥 Clinic Management System

> A full-stack healthcare management platform for appointment scheduling, patient records, billing, and real-time financial analytics. This repository is my personal fork of a collaborative project and showcases the features and modules I contributed to during development.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

🔗 **Live Demo:** https://manipal-client.vercel.app/home

---

## 📖 Overview

The Clinic Management System streamlines day-to-day clinic operations by replacing manual workflows with a centralized digital platform. It enables healthcare staff to manage appointments, patient records, billing, and financial reporting through a single intuitive interface.

---

## 🤝 My Contributions

As part of a collaborative development team, I contributed to:

- Developing frontend modules using React.js
- Building reusable UI components and layouts
- Patient management interfaces
- Billing and payment workflows
- Dashboard and financial analytics pages
- REST API integration
- State management
- UI enhancements, bug fixes, and performance improvements

> **Note:** This repository is a personal fork showcasing my contributions to the original collaborative project.

---

## ✨ Features

### 📅 Appointment Scheduling

- Book appointments
- View upcoming appointments
- Reschedule appointments
- Cancel appointments
- Search patients by name or record ID

### 👨‍⚕️ Patient Record Management

- Create patient profiles
- Update patient information
- View complete medical history
- Centralized patient records across modules

### 💳 Billing & Payments

- Generate bills linked to appointments
- Track payment status
- Support paid, pending, and cancelled payments
- Revenue summaries

### 📊 Financial Dashboard

- Real-time revenue analytics
- Daily, weekly, and monthly reports
- Transaction summaries
- Business insights for clinic administrators

### 🎨 Reusable UI Components

- Custom buttons
- Data tables
- Forms
- Modal components
- Responsive layouts
- Consistent design system using Tailwind CSS

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js, Tailwind CSS, Bootstrap |
| Backend | Node.js, Express.js, REST API (MVC Architecture) |
| Database | MongoDB (Mongoose) |
| Authentication | JWT |
| Frontend Deployment | Vercel |
| Backend Deployment | DigitalOcean |

---

## 🏗 Architecture

```text
React.js Frontend (Vercel)
          │
          │ REST API
          ▼
Express.js Backend (DigitalOcean)
          │
          ▼
MongoDB
 ├── Patients
 ├── Appointments
 ├── Billing
 └── Transactions
```

The backend follows the MVC architecture with environment-based configuration for development and production. All protected routes are secured using JWT authentication.

---

## 🚀 Local Setup

### Clone the repository

```bash
git clone https://github.com/kislayrajj/manipal-client.git
cd manipal-client
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Run the development server

```bash
npm run dev
```

> **Note:** The backend repository is not included in this fork. Access can be provided upon request.

---

## 🙏 Acknowledgements

This repository is a personal fork of a collaborative project developed under the guidance of my mentor alongside other team members. Credit goes to everyone who contributed to the original project.

---

## 👨‍💻 Author

**Kislay Raj**

- 🌐 Portfolio: https://portfolio-w-react.vercel.app/
- 💼 LinkedIn: https://www.linkedin.com/in/kislay-raj-b462502a6/
- 🐙 GitHub: https://github.com/kislayrajj
