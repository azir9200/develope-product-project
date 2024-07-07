import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoute } from './app/modules/Products/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello our  wonder  World!');
});

export default app;
