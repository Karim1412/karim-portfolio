// ═══════════════════════════════════════════════════════════
//  build.js — Vercel Build Script
//  Runs before deployment. Reads environment variables and
//  generates config.js so API keys are NEVER in the repo.
// ═══════════════════════════════════════════════════════════

const fs = require('fs');

const config = `window._ENV = {
  GROQ_API_KEY:                '${process.env.GROQ_API_KEY || ''}',
  EMAILJS_SERVICE_ID:          '${process.env.EMAILJS_SERVICE_ID || ''}',
  EMAILJS_PUBLIC_KEY:          '${process.env.EMAILJS_PUBLIC_KEY || ''}',
  EMAILJS_TEMPLATE_ID:         '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  EMAILJS_CONTACT_TEMPLATE_ID: '${process.env.EMAILJS_CONTACT_TEMPLATE_ID || ''}',
  FIREBASE_CONFIG: {
    apiKey:            '${process.env.FIREBASE_API_KEY || ''}',
    authDomain:        '${process.env.FIREBASE_AUTH_DOMAIN || ''}',
    projectId:         '${process.env.FIREBASE_PROJECT_ID || ''}',
    storageBucket:     '${process.env.FIREBASE_STORAGE_BUCKET || ''}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID || ''}',
    appId:             '${process.env.FIREBASE_APP_ID || ''}'
  }
};`;

fs.writeFileSync('config.js', config);
console.log('✓ config.js generated from environment variables');
