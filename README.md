#Calculator link
https://mern-calculator-lwtq.onrender.com

# MERN Stack Calculator

A modern calculator application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- ✅ Basic arithmetic operations (+, -, *, /)
- ✅ Percentage calculations
- ✅ Decimal support
- ✅ Clear and backspace functionality
- ✅ Modern UI with gradient design
- ✅ Responsive design
- ✅ Real-time calculations

## Project Structure

```
mern-calculator/
├── server/              # Node.js + Express backend
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── calculator.js
└── client/              # React frontend
    ├── package.json
    ├── public/
    └── src/
```

## Installation & Setup

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Install Client Dependencies

```bash
cd ../client
npm install
```

## Running the Application Locally

### Start the Server (Terminal 1)

```bash
cd server
npm start
# or for development with auto-reload:
npm run dev
```

The server will run on `http://localhost:5000`

### Start the Client (Terminal 2)

```bash
cd client
npm start
```

The client will run on `http://localhost:3000`

## Available Operations

- **+** : Addition
- **−** : Subtraction
- **×** : Multiplication
- **÷** : Division
- **%** : Percentage
- **C** : Clear
- **←** : Backspace
- **.** : Decimal point

## Technologies Used

- **Frontend:** React 18, CSS3
- **Backend:** Node.js, Express
- **Additional:** CORS

## Deployment

### Option 1: Vercel (Frontend) + Render (Backend) - RECOMMENDED

#### Deploy Frontend to Vercel:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Set root directory to `client`
4. Deploy

#### Deploy Backend to Render:
1. Go to [render.com](https://render.com) and sign up
2. Create new Web Service
3. Connect your GitHub repository
4. Configure:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Deploy

#### Post-Deployment:
- Get your Render backend URL (e.g., `https://mern-calc-xxxx.onrender.com`)
- Update Vercel environment variable: `REACT_APP_API_URL=https://mern-calc-xxxx.onrender.com`

### Option 2: Railway (All-in-One)
1. Go to [railway.app](https://railway.app)
2. Create new project and connect GitHub
3. Railway auto-deploys both frontend and backend
4. Automatic environment setup

### Option 3: Netlify (Frontend) + Render (Backend)
- Same as Option 1 but use Netlify instead of Vercel for frontend

## Future Enhancements

- Add MongoDB to store calculation history
- Add authentication system
- Add calculation history display
- Add keyboard support
- Add themes (dark/light mode toggle)

## License

MIT
