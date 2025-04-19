function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const secretContent = document.getElementById('secretContent');
const isAuthenticated = getCookie('authenticated');

if (isAuthenticated) {
    console.log('Authenticated cookie FOUND (has a value):', isAuthenticated);
    if (isAuthenticated === 'true') {
        console.log('Authenticated cookie value is exactly "true".');
        secretContent.style.display = 'block';
    } else {
        console.log('Authenticated cookie value is NOT exactly "true":', isAuthenticated);
        console.log('Redirecting due to value mismatch...');
        window.location.href = '/vault';
        secretContent.style.display = 'none';
    }
} else {
    console.log('Authenticated cookie NOT found (null or undefined), redirecting...');
    window.location.href = '/vault';
    secretContent.style.display = 'none';
}
