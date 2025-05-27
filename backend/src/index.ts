import path from 'path';
import express from 'express';
import personalInfoRouter from './routes/personalInfo';
import { getCatFact } from './external/catService';

// Удалено: const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000;

// статичні файли (frontend)
app.use(express.static(path.join(__dirname, '../public')));

// персональна інформація
app.use('/', personalInfoRouter);

// API: випадковий факт про котів
app.get('/api/catfact', async (_req, res) => {
	try {
		const fact = await getCatFact();
		res.json(fact);
	} catch (e) {
		res.status(500).json({ message: 'Не вдалося отримати факт' });
	}
});

app.listen(PORT, () => {
	console.log(`🚀 Сервер запущений на http://localhost:${PORT}`);
});
