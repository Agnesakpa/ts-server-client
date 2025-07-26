import showModal from './Modal.js';

export default function Greet() {
  const container = document.createElement('div');
  container.className = 'component-container';

  const heading = document.createElement('h2');
  heading.innerText = '👽 Welcome, Space Human!';
  container.appendChild(heading);

  const input = document.createElement('input');
  input.placeholder = 'Enter your name...';
  container.appendChild(input);

  const btn = document.createElement('button');
  btn.innerText = 'Greet + Save';

  btn.onclick = async () => {
    const name = input.value.trim();
    if (!name) return showModal('Enter a name!');

    try {
      const res = await fetch('https://test-typescript-server-744a62d0e39f.herokuapp.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();

      if (res.ok) {
        heading.innerText = `👋 Welcome, ${name}!`;
        showModal(data.message || 'Saved!');
        input.value = ''; // optional: clear input field
      } else {
        showModal(data.error || 'Something went wrong');
      }
    } catch (err) {
      showModal('Failed to reach backend');
      console.error(err);
    }
  };

  container.appendChild(btn);
  return container;
}
