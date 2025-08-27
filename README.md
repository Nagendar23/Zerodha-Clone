# Zerodha Clone Project

This project is a clone of Zerodha’s trading platform, featuring a landing page, signup flow, and a dashboard with holdings, positions, orders, funds, and visualizations.

## Project Structure

```
Zerodha/
├── backend/         # Node.js/Express backend (MongoDB)
├── frontend/        # React landing page & signup
└── dashboard/       # React dashboard app
```

---

## 1. Backend

**Tech:** Node.js, Express, MongoDB, Mongoose

### Features

- REST API for holdings, positions, orders, users
- MongoDB models and schemas
- Environment config via `.env`
- CORS and body parsing middleware

### Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Configure `.env`:
   ```
   PORT=8000
   MONGO_URL=mongodb://localhost:27017/zerodha
   ```
3. Start server:
   ```bash
   npm start
   ```

---

## 2. Frontend

**Tech:** React, Bootstrap, FontAwesome

### Features

- Landing page with product info, pricing, awards, and signup
- Responsive design
- Routing for Home, Signup, About, Product, Pricing, Support

### Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start app:
   ```bash
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000)

---

## 3. Dashboard

**Tech:** React

### Features

- Dashboard with holdings, positions, orders, funds, summary
- Vertical bar graph and doughnut chart visualizations
- Modular components for each dashboard section

### Setup

1. Install dependencies:
   ```bash
   cd dashboard
   npm install
   ```
2. Start app:
   ```bash
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000) (if running separately, use a different port)

---

## Usage

- **Landing Page:** Explore Zerodha’s features and products.
- **Signup:** Register a new account (form only; backend integration required for full auth).
- **Dashboard:** View holdings, positions, orders, funds, and visualizations.

---

## Development

- Frontend and dashboard use React Router for navigation.
- Backend uses Express routes and Mongoose models.
- Static assets (images, icons) are in `frontend/public/media/images/`.

---

## Customization

- Update MongoDB connection in `.env` as needed.
- Add more routes or features in backend (`backend/routes/`).
- Customize UI in frontend (`frontend/src/landing_page/`).
- Add new dashboard widgets in `dashboard/src/components/`.

---

## Troubleshooting

- **Vertical Bar Graph Not Visible:**  
  - Check `dashboard/src/components/VerticalGraph.js` for correct data and rendering logic.
  - Ensure chart library (if used) is installed and imported.
  - Inspect browser console for errors.

- **API Issues:**  
  - Ensure backend is running and accessible at the correct port.
  - Check CORS settings in backend.

---

