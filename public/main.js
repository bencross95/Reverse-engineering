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

  const data = await response.json();

  if (data.valid) {
    validationResult.textContent = data.message;
    validationResult.style.color = 'white';
  } else {
    validationResult.textContent = data.message;
    validationResult.style.color = 'white';
  }
});



