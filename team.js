document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const teamID = document.getElementById('teamID').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!teamID || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    alert(`Welcome to the team, ${teamID}!`);
    // Implement authentication logic here
});
