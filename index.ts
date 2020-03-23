import express from 'express';
const app = express();
app.use(express.json());
import { calculateBmi } from './bmiCalculator';
import { exerciseCalculator } from './exerciseCalculator';

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.post('/exercises', (request, response) => {
  const { target, dailyExercises } = request.body;
  if (!target || !dailyExercises){
    response.send({ error: 'missing parameters' });
  }
  for (let i=0;i<dailyExercises.length;i++){
    if (isNaN(Number(target)) || isNaN(Number(dailyExercises[i]))){
      response.send({ error: 'malformatted parameters' });
    }
  }
  const result = exerciseCalculator(dailyExercises, target);
  response.send(result);
});

app.get('/bmi*', (req, res) => {
    console.dir(req.query);
    if (!(req.query.height>0) || !(req.query.weight>0)){
        res.send({error: "malformatted parameters"});
    }
    const result = {
        weight: req.query.weight,
        height: req.query.height,
        bmi: calculateBmi(req.query.height, req.query.weight)
    };
    res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});