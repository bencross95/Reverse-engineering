const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = new URLSearchParams(event.body);
  const enteredPassword = params.get('password');
  const expectedPrefix = 'RE002';

  if (!enteredPassword || !enteredPassword.startsWith(expectedPrefix)) {
    return {
      statusCode: 401,
      body: JSON.stringify({ valid: false, message: 'Access denied (prefix)' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const parts = enteredPassword.split('-');
  if (parts.length !== 3) {
    return {
      statusCode: 401,
      body: JSON.stringify({ valid: false, message: 'Access denied (format)' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const appIdentifier = parts[0];
  const randomPart = parts[1];
  const enteredHash = parts[2];

  const hashInput = appIdentifier + randomPart;
  const calculatedHash = crypto
    .createHash('sha256')
    .update(hashInput)
    .digest('hex')
    .toUpperCase()
    .substring(0, 8);

  if (enteredHash === calculatedHash) {
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, message: 'Access granted' }),
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'authenticated=true; Path=/; HttpOnly; Secure; SameSite=Strict',
      },
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ valid: false, message: 'Access denied (hash)' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};