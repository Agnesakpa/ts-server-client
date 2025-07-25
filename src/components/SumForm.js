export default function SumForm() {
  const container = document.createElement('div');
  container.className = 'component-container';

  const title = document.createElement('h3');
  title.innerText = '🧮 Sum Your Numbers';
  container.appendChild(title);

  const input = document.createElement('input');
  input.placeholder = 'e.g. 1,2,3';
  container.appendChild(input);

  const btn = document.createElement('button');
  btn.innerText = 'Calculate Sum';
  btn.onclick = async () => {
 const numbers = input.value.split(',').map(n => parseFloat(n.trim()));

  try {
    const res = await fetch('https://test-typescript-server-744a62d0e39f.herokuapp.com//sum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numbers }),
    });

    const data = await res.json();
    console.log('Response data:', data); 

    // ✅ Make sure this line matches the backend response shape
    alert(`Sum = ${data.sum}`);
  } catch (err) {
    alert('Something went wrong');
    console.error(err);
  }
};
  container.appendChild(btn);

  return container;
}


