module.exports = function (io) {
  const history = [];

  io.on('connection', socket => {
    console.log(`🔌  Нове зʼєднання: ${socket.id}`);

    // Надсилаємо історію новому клієнту
    socket.emit('history', history);

    // Отримуємо нове повідомлення
    socket.on('message', data => {
      const msg = { user: data.user, text: data.text, time: Date.now() };
      history.push(msg);
      io.emit('message', msg); // Трансляція всім
    });

    socket.on('disconnect', () => console.log(`❌  Відʼєднався ${socket.id}`));
  });
};