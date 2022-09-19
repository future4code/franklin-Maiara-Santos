import { Router } from 'express';
import SignUp from '../endpoints/SignUp';
import Login from '../endpoints/Login';

export const router = Router();

router.post('/signup', SignUp);
router.post('/login', Login);