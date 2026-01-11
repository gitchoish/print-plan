/**
 * Cloudflare Pages configuration
 * This file tells Cloudflare how to build and deploy the project
 */

module.exports = {
  // Build command - run this before deployment
  buildCommand: `npm run build`,
  
  // Build output directory - files to deploy
  buildOutputDirectory: `dist`,
  
  // Environment variables
  env: {
    production: {
      vars: {
        NODE_ENV: 'production',
      },
    },
  },
  
  // Redirects for SPA routing
  redirects: [
    {
      from: '/*',
      to: '/index.html',
      status: 200,
    },
  ],
};
