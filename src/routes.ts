import {Router} from 'express';
import { indexpageGetHandler } from './handler';
const router = Router();

router.get('/', indexpageGetHandler);
export default router;