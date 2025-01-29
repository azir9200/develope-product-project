import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.router';
import { ProductRoute } from '../modules/Products/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
