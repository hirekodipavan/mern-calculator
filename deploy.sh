#!/bin/bash
# Build and prepare for deployment

echo "Building frontend..."
cd client
npm run build
cd ..

echo "Frontend build complete!"
echo ""
echo "Deployment ready. Follow these steps:"
echo ""
echo "1. Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for deployment'"
echo "   git push"
echo ""
echo "2. Deploy Frontend (Choose one):"
echo "   - Vercel: vercel.com"
echo "   - Netlify: netlify.com"
echo "   - Railway: railway.app"
echo ""
echo "3. Deploy Backend (Choose one):"
echo "   - Render: render.com"
echo "   - Railway: railway.app"
echo ""
echo "Done!"
