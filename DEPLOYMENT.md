# DEPLOYMENT GUIDE - Render

This guide will help you deploy your MERN Calculator to Render.com (free tier available).

## Prerequisites

1. GitHub account with your repository pushed
2. Render.com account (free at https://render.com)

## Step 1: Prepare Your Repository

```bash
cd C:\vscode\mern-calculator

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - MERN Calculator ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mern-calculator.git
git push -u origin main
```

## Step 2: Deploy on Render

### Option A: Deploy as Single Web Service (RECOMMENDED)

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Select **"Deploy an existing project from a Git repository"**
4. Click **"Connect GitHub"** and authorize Render
5. Find and select **"mern-calculator"** repository
6. Fill in the configuration:

   | Field | Value |
   |-------|-------|
   | **Name** | mern-calculator |
   | **Environment** | Node |
   | **Region** | Choose closest to you |
   | **Branch** | main |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm start` |
   | **Instance Type** | Free (or Starter if you want more power) |

7. Click **"Create Web Service"**
8. Wait for deployment to complete (3-5 minutes)

### Option B: Deploy with render.yaml (Advanced)

1. Same as above, but Render will auto-detect `render.yaml`
2. Just click "Create Web Service" - settings are pre-configured

---

## Step 3: Verify Deployment

Once deployed, you'll get a URL like: `https://mern-calculator-xxxx.onrender.com`

1. Open the URL in your browser
2. You should see **"Pavan Calculator"** 
3. Test all calculator functions

---

## Troubleshooting

### Build Failed Error
- Check logs in Render dashboard
- Ensure all dependencies are in package.json
- Make sure `npm run build` works locally

### Blank Page
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors (F12)
- Check Render logs for backend errors

### API Not Working
- Check Render logs for connection issues
- Verify `server.js` is serving React app correctly
- API calls are local, so no URL changes needed

---

## Environment Variables (if needed later)

1. Go to your service in Render dashboard
2. Click **"Environment"**
3. Add any variables needed (e.g., DATABASE_URL for MongoDB)

---

## Local Testing Before Deployment

```bash
# Build the frontend
cd client
npm run build

# Test locally
cd ../server
node server.js
```

Then open http://localhost:5000

---

## Important Notes

- **Free tier limitations:** 
  - Services spin down after 15 minutes of inactivity
  - First request after spin-down takes ~30 seconds
  - Limited to 0.5 GB RAM

- **To upgrade:** In Render dashboard, click "Instance Type" and upgrade to Starter ($7/month) for always-on service

- **Database:** If you want to add MongoDB:
  1. Create MongoDB Atlas account
  2. Get connection string
  3. Add as environment variable in Render
  4. Update server.js to connect to MongoDB

---

## After Deployment Success

Your calculator is now live! Share the URL:
```
https://mern-calculator-xxxx.onrender.com
```

To update your deployed app:
1. Make changes locally
2. Push to GitHub
3. Render auto-deploys from main branch
4. Takes 3-5 minutes

---

## Next Steps (Optional Enhancements)

- [ ] Add custom domain
- [ ] Add MongoDB for calculation history
- [ ] Add authentication
- [ ] Enable HTTPS (automatic on Render)
- [ ] Set up monitoring/alerts
