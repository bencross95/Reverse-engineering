// document.addEventListener('DOMContentLoaded', () => {
//   // --- Logic for /vault page ---
//   const passwordForm = document.getElementById('passwordForm');
//   const validationResult = document.getElementById('validationResult');

//   if (passwordForm) { // Only run this code if the form exists on the page
//     passwordForm.addEventListener('submit', async (event) => {
//       event.preventDefault();

//       const password = document.getElementById('password').value;

//       const response = await fetch('/.netlify/functions/validate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({ password }),
//       });

//       try {
//         const data = await response.json();

//         if (data.valid) {
//           console.log('Password valid, redirecting to /secret-page...');
//           window.location.href = '/secret-page';
//         } else {
//           validationResult.textContent = data.message;
//           validationResult.style.color = 'white';
//           console.log('Password invalid:', data.message);
//         }
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//         validationResult.textContent = 'An error occurred during validation.';
//         validationResult.style.color = 'white';
//       }
//     });
//   }

//   // --- Logic for /secret-page ---
//   const secretContent = document.getElementById('secretContent');

//   if (secretContent) { // Only run this code if the secret content element exists
//     function getCookie(name) {
//       const value = `; ${document.cookie}`;
//       const parts = value.split(`; ${name}=`);
//       if (parts.length === 2) return parts.pop().split(';').shift();
//     }

//     const isAuthenticated = getCookie('authenticated');

//     if (isAuthenticated !== 'true') {
//       console.log('Not authenticated on /secret-page, redirecting to /vault...');
//       window.location.href = '/vault';
//     } else {
//       console.log('User is authenticated on /secret-page.');
//       secretContent.style.display = 'block'; // Make secret content visible
//     }
//   }
// });