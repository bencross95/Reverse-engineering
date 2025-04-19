function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const secretContent = document.getElementById('secretContent');
const isAuthenticated = getCookie('authenticated');
console.log('Authenticated cookie value on /vault/re002:', isAuthenticated);

if (isAuthenticated !== 'true') {
    console.log('Not authenticated, redirecting to /vault/vault...');
    window.location.href = '/vault/vault'; // Ensure correct path back
    secretContent.style.display = 'none';
} else {
    console.log('User is authenticated on /vault/re002.');
    secretContent.style.display = 'block';
}


console.log('Script loaded for /vault/re002');