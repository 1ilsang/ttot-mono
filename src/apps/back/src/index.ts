import express from 'express';
import cors from 'cors';
import { PORT } from 'models';

const app = express();
app.use(cors('*'));

app.get('/', (req, res) => {
  console.log(`REQ [ / ]:: ${JSON.stringify(req.query)}`);
  res.send(`Hello World`);
});

app.listen(PORT, () => {
  console.log(`Server running... ${PORT}`);
});
