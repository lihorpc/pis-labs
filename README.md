# Лабораторна робота № 6: Використання і створення API (спрощена версія)

## Зміст
1. [Опис зовнішнього сервісу](#service)
2. [Структура проєкту](#structure)
3. [Запуск](#run)
4. [Приклади звертання до API](#examples)

---

<a name="service"></a>
## 1. Опис зовнішнього сервісу

**catfact.ninja** — відкритий REST‑сервіс, що повертає випадкові факти про котів JSON‑формату.

* **Endpoint:** `GET https://catfact.ninja/fact`
* **Відповідь**  
  ```json
  {
    "fact": "Cats have five toes on their front paw.",
    "length": 38
  }
  ```

**Сценарій використання:**  
Наш бекенд реалізує proxy‑endpoint `/api/catfact`, який при кожному запиті викликає зовнішній сервіс і пересилає отриманий факт на фронтенд. Це демонструє інтеграцію стороннього API.

---

<a name="structure"></a>
## 2. Структура проєкту

```
lab6_project_simple/
├── backend/              # Node.js + Express + TypeScript
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts      # HTTP‑сервер + статичні файли + API
│       ├── external/
│       │   └── catService.ts
│       └── routes/
│           └── personalInfo.ts
└── public/               # Прості статичні ресурси (frontend)
    ├── index.html
    ├── style.css
    └── script.js
```

* **/is-33fiot-23-125** → повертає особисті дані  (прізвище: Горобюк, ім’я: Любомир, курс: 2, група: ІС‑33).
* **/api/catfact** → пересилає випадковий факт про котів.

---

<a name="run"></a>
## 3. Запуск

> Вимоги: Node >= 18, npm.

```bash
# 1. Встановлення залежностей
cd lab6_project_simple/backend
npm install

# 2. Режим розробки (ts‑node‑dev)
npm run dev
# Сервер підніметься на http://localhost:3000
```

У браузері відкрийте `http://localhost:3000` — побачите сторінку з фактом про котів і вашими особистими даними.

### Продакшн‑збірка

```bash
npm run build      # компілює TS -> JS у dist/
npm start          # запускає зібраний код
```

---

<a name="examples"></a>
## 4. Приклади API‑запитів

* Отримати особисті дані:  
  ```
  GET http://localhost:3000/is-33fiot-23-125
  ```

* Отримати факт про котів:  
  ```
  GET http://localhost:3000/api/catfact
  ```

---

### Автор

*Любомир Горобюк, ІС‑33, курс 2*  
Логін у Moodle: **is-33fiot-23-125**
