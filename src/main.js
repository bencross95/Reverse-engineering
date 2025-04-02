document.getElementById('passwordForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const password = document.getElementById('password').value;
  const validationResult = document.getElementById('validationResult');

  const response = await fetch('/.netlify/functions/validate', { // correct path
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ password }),
  });

  const data = await response.json();

  if (data.valid) {
    validationResult.textContent = data.message;
    validationResult.style.color = 'green';
    // Redirect or perform other actions
  } else {
    validationResult.textContent = data.message;
    validationResult.style.color = 'red';
  }
});