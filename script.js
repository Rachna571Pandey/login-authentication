// script.js
const userList = document.getElementById("userList");
const loginForm = document.getElementById("loginForm");
const addUserForm = document.getElementById("addUserForm");

let users = []; // Dummy user data, you can replace it with actual data or use backend

// Dummy users
users.push({ username: "Rachna", password: "admin123" });

// Display users
function displayUsers() {
  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.username;
    userList.appendChild(li);

    const deleteButton = document.createElement("span");
    deleteButton.textContent = " ❌";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
      userList.removeChild(li);
    });

    li.appendChild(deleteButton);

     });
     
}

// Login functionality
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const username = e.target.querySelector("#username").value;
  const password = e.target.querySelector("#password").value;
  const foundUser = users.find(user => user.username === username && user.password === password);
  if (foundUser) {
    alert("Login successful!");
    // You can redirect user to another page here
  } else {
    alert("Invalid username or password");
  }
});

// Add new user
addUserForm.addEventListener("submit", e => {
  e.preventDefault();
  const newUsername = e.target.querySelector("#newUsername").value;
  const newPassword = e.target.querySelector("#newPassword").value;
  const existingUser = users.find(user => user.username === newUsername);
  if (existingUser) {
    alert("Username already exists");
  } else {
    users.push({ username: newUsername, password: newPassword });
    displayUsers();
    alert("User added successfully!");
    e.target.reset();
  }
});

// Initial display of users
displayUsers();
