import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());

app.use(
  cors({
    origin: [
      // 'https://travel-destination-guide-swart.vercel.app/',
      'http://localhost:5173',
    ],
    credentials: true,
  }),
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our world !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
