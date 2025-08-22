// File: /api/index.js
export default function handler(request, response) {
  const ngrokUrl = 'https://b81a54d880ad.ngrok-free.app';
  response.status(200).send(ngrokUrl);
}