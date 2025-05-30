/* global io */
const socket   = io();
const list     = document.getElementById('messages');
const form     = document.getElementById('form');
const input    = document.getElementById('input');

const user = prompt('Ваше імʼя', 'Anonymous') || 'Anonymous';

function addItem({ user, text, time }) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${user}</strong> <small>${new Date(time).toLocaleTimeString()}</small>: ${text}`;
  list.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
}

socket.on('history', msgs => msgs.forEach(addItem));
socket.on('message', addItem);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!input.value.trim()) return;
  socket.emit('message', { user, text: input.value.trim() });
  input.value = '';
});