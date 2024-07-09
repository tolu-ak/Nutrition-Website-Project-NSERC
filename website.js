

// SENDS REQUEST TO SERVER AND RESPONSE IS REFLECTED ON THE INTERNET 
document.getElementById('login-form').addEventListener('submit', function(event) { //This line selects the HTML element with the ID login-form and adds an event listener to it. The event listener listens for a 'submit' event, which occurs when the form is submitted.
    event.preventDefault(); //prevents the default action of submitting the form and reloading the page 

    const username = document.getElementById('username').value; //selects html line with username and retrieves the value
    const password = document.getElementById('password').value;// retrieves value of password from html

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })  //converts the user and pass to a string so the API can process the information
    })
    .then(response => response.json())  // converts the response from json (javascript object notation) format to javascript

    //this code below is meant to redirect the user to the login page if it is successful but it is not working 

    .then(data => {   
        if (data.success) {
            alert('Login successful!');
            // Redirect to profile page or another page
            window.location.href = 'profile.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// see a connection to the server on Tuesday 
//include code in Monday attachment 
//Friday project completed and by Tuesday make some progress with the second project.