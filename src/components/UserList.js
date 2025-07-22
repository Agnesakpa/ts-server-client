export default function UserList() {
  const container = document.createElement('div');
  container.style.marginTop = '50px';
  container.className = 'component-container';

  const heading = document.createElement('h3');
  heading.innerText = '🧑‍🚀 Registered Space Users';
  container.appendChild(heading);

  const list = document.createElement('ul');
  list.style.marginTop = '10px';
  list.style.paddingLeft = '20px';
  container.appendChild(list);

  async function fetchUsers() {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    list.innerHTML = '';
    data.users.forEach(name => {
      const li = document.createElement('li');
      li.innerText = `🪐 ${name}`;
      list.appendChild(li);
    });
  }

  fetchUsers();

  return container;
}
