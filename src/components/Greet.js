export default function Greet() {
  const container = document.createElement('div');
  container.style.margin = '20px 0';
  container.className = 'component-container';

  const heading = document.createElement('h2');
  heading.innerText = '👽 Welcome, Space Human!';
  container.appendChild(heading);

  const input = document.createElement('input');
  input.placeholder = 'Enter your name...';
  input.style.padding = '8px';
  container.appendChild(input);

  const btn = document.createElement('button');
  btn.innerText = 'Greet + Save';
  btn.style.marginLeft = '10px';
  btn.onclick = async () => {
    const name = input.value;
    if (!name) return alert('Enter a name!');
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    alert(`Hello, ${name}! You've been saved.`);
  };
  container.appendChild(btn);

  return container;
}
