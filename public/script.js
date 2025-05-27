async function getJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error('Помилка запиту');
  return r.json();
}

async function loadCatFact() {
  const el = document.getElementById('cat-fact');
  try {
    el.textContent = 'Завантаження…';
    const fact = await getJSON('/api/catfact');
    el.textContent = fact.fact;
  } catch {
    el.textContent = 'Помилка при отриманні факту';
  }
}

async function loadPersonalInfo() {
  const el = document.getElementById('personal-info');
  try {
    const info = await getJSON('/is-33fiot-23-125');
    el.textContent = JSON.stringify(info, null, 2);
  } catch {
    el.textContent = 'Помилка при отриманні даних';
  }
}

document.getElementById('reload-btn').addEventListener('click', loadCatFact);

loadCatFact();
loadPersonalInfo();
