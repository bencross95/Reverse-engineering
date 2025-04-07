document.getElementById('passwordForm').addEventListener('submit', async (event) => {
  console.log('Form submitted!');
  event.preventDefault();

  const password = document.getElementById('password').value;
  const validationResult = document.getElementById('validationResult');

  const response = await fetch('/.netlify/functions/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ password }),
  });

  try {
    const data = await response.json();

    if (data.valid) {
      console.log('Password valid, redirecting...'); // Add this for debugging
      window.location.href = '/re002'; // Add this line to redirect
    } else {
      validationResult.textContent = data.message;
      validationResult.style.color = 'white';
      console.log('Password invalid:', data.message); // Add this for debugging
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    validationResult.textContent = 'An error occurred during validation.';
    validationResult.style.color = 'white';
  }
});