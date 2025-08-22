// File: /api/index.js
export default function handler(request, response) {
  const ngrokUrl = 'https://967ee2addb46.ngrok-free.app/';
  response.status(200).send(ngrokUrl);
}
