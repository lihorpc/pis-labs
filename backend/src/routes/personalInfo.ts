import { Router } from 'express';

const router = Router();
const login = 'is-33fiot-23-125';

router.get(`/${login}`, (_req, res) => {
  res.json({
    прізвище: 'Горобюк',
    "ім'я": 'Любомир',
    курс: 2,
    група: 'ІС-33'
  });
});

export default router;
