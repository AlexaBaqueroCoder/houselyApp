# 🚀 Netlify Deployment Guide for HouseLy

This guide will walk you through deploying your HouseLy application to Netlify.

## 📋 Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your HouseLy project pushed to a repository
- A Netlify account (free tier available)

## 🛠️ Configuration Files

The following files have been created/updated for Netlify deployment:

### 1. `netlify.toml`
- Build configuration for Next.js static export
- Security headers and caching rules
- Redirects for SPA routing

### 2. `next.config.mjs`
- Static export configuration
- Image optimization settings
- Build optimizations

### 3. `package.json`
- Updated project name to "housely"
- Added static build script

### 4. `.gitignore`
- Excludes build artifacts and sensitive files

## 🚀 Deployment Steps

### Method 1: Deploy from Git (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your Git provider
   - Click "New site from Git"

3. **Configure Build Settings**
   - **Repository**: Select your HouseLy repository
   - **Branch**: `main` (or your default branch)
   - **Build command**: `npm run build`
   - **Publish directory**: `out`

4. **Environment Variables** (Optional)
   Add these in Netlify dashboard:
   ```
   NODE_VERSION=18
   NPM_VERSION=9
   ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (2-5 minutes)

### Method 2: Manual Deploy

1. **Build Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Netlify**
   - Go to Netlify dashboard
   - Drag and drop the `out` folder
   - Site will be deployed instantly

## 🔧 Build Configuration

### Build Command
```bash
npm run build
```

### Publish Directory
```
out/
```

### Node Version
```
18.x
```

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name

2. **DNS Configuration**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify DNS for automatic configuration

## 🔍 Troubleshooting

### Build Failures

**Error: "Module not found"**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: "Build timeout"**
- Check for infinite loops in useEffect
- Optimize image sizes
- Reduce bundle size

### Runtime Issues

**Mock API not working**
- Ensure MockInitializer is loaded
- Check browser console for errors
- Verify MSW service worker is registered

**Images not loading**
- Check image URLs are accessible
- Verify image optimization settings
- Use relative paths for local images

### Performance Issues

**Slow loading**
- Optimize images
- Enable compression
- Use CDN for static assets

## 📊 Monitoring

### Build Logs
- Available in Netlify dashboard
- Check for warnings and errors
- Monitor build times

### Analytics
- Enable Netlify Analytics
- Monitor page views and performance
- Track user behavior

## 🔄 Continuous Deployment

### Automatic Deploys
- Every push to main branch triggers deploy
- Preview deployments for pull requests
- Branch-specific URLs for testing

### Manual Deploys
- Trigger from Netlify dashboard
- Deploy specific commits
- Rollback to previous versions

## 🛡️ Security

### Headers Configured
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### HTTPS
- Automatically enabled by Netlify
- SSL certificates provided
- HTTP to HTTPS redirects

## 📱 Mobile Optimization

### Responsive Design
- Test on different screen sizes
- Optimize touch targets
- Ensure readable text

### Performance
- Optimize images for mobile
- Minimize JavaScript bundle
- Enable service worker caching

## 🔧 Post-Deployment

### Testing Checklist
- [ ] Home page loads correctly
- [ ] Property listings display
- [ ] Property details work
- [ ] Login/Register forms function
- [ ] Mock API is working
- [ ] Responsive design works
- [ ] Images load properly
- [ ] Navigation works

### Performance Optimization
- [ ] Enable image optimization
- [ ] Configure caching headers
- [ ] Minify CSS/JS
- [ ] Enable compression

## 📞 Support

### Netlify Support
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Netlify Status](https://status.netlify.com/)

### HouseLy Specific
- Check the main README.md
- Review mocks/README.md for API details
- Create issues in the repository

---

**Your HouseLy app should now be live on Netlify! 🎉** 