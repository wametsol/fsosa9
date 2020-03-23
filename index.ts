import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator'

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

//app.get('/bmi?height=')

app.get('/bmi*', (req, res) => {
    console.dir(req.query)
    if (!(req.query.height>0) || !(req.query.weight>0)){
        res.send({error: "malformatted parameters"})
    }
    const result = {
        weight: req.query.weight,
        height: req.query.height,
        bmi: calculateBmi(req.query.height, req.query.weight)
    }
    res.send(result)
})
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});