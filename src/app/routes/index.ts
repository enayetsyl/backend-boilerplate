import { Router } from 'express';
import { UserRoutes } from '../module/User/user.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },  // This is a sample replace it with your actual path and route.
  // Todo add necessary path and route in this array
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));  // This will automatically loop your routes that you will add in the moduleRoutes array

export default router;