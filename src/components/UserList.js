export default function UserList() {
  const container = document.createElement('div');
  container.className = 'component-container';

  const heading = document.createElement('h3');
  heading.innerText = '🧑‍🚀 Registered Space Users';
  container.appendChild(heading);

  const list = document.createElement('ul');
  list.style.marginTop = '10px';
  list.style.paddingLeft = '20px';
  container.appendChild(list);

  async function fetchUsers() {
    const res = await fetch('https://test-typescript-server-744a62d0e39f.herokuapp.com/users');
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
