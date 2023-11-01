import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const PORT = 3000;
const JWT_EXPIRE_TIME = 5;
const JWT_SECRET = 'ttot';

const app = express();
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  console.log(`${req.url}:: ${JSON.stringify(req.body)}`);
  const payload = {
    id: req.body.id,
  };
  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRE_TIME,
  });
  res.setHeader('Authorization', `bearer ${accessToken}`);
  res.json({ accessToken });
});

app.get('/verify', (req, res) => {
  console.log(`${req.url}:: ${req.headers.authorization}`);
  const bearerToken = req.headers.authorization.split(' ')[1];
  try {
    const result = jwt.verify(bearerToken, JWT_SECRET);
    console.log(result);

    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(403);
  }
});

app.get('/', (req, res) => {
  console.log(`${req.url}:: ${JSON.stringify(req.query)}`);
  res.send(`Hello World`);
});

app.listen(PORT, () => {
  console.log(`Server running... ${PORT}`);
});
