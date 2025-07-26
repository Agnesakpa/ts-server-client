export default function showModal(message, type = 'success') {
  const modal = document.createElement('div');
  modal.className = 'modal';

  const content = document.createElement('div');
  content.className = `modal-content ${type}`;

  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✖';
  closeBtn.className = 'close-btn';
  closeBtn.onclick = () => modal.remove();

  const msg = document.createElement('p');
  msg.innerText = message;
  msg.className = 'modal-message';

  content.appendChild(closeBtn);
  content.appendChild(msg);
  modal.appendChild(content);
  document.body.appendChild(modal);
}
