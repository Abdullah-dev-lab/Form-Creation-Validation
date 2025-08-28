async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    console.log("Container:,", dataContainer)

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const users = await response.json();
        console.log(users);
        dataContainer.innerHTML = ''; // clear "Loading..."

        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        console.error("Failed to load user data.", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});
