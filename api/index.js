// File: /api/index.js

// This function will be run by Vercel every time someone visits your URL.
export default function handler(request, response) {
  
  // THIS IS THE ONLY LINE YOU WILL EVER EDIT
  const ngrokUrl = 'https://YOUR_CURRENT_NGROK_URL_HERE.ngrok-free.app';

  // Send the URL back as plain text
  response.status(200).send(ngrokUrl);
}