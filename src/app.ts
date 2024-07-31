import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use('/api/', router);

// app.use('/api/products', ProductRoute);

// app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello our  wonder  World!');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
