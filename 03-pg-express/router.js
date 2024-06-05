import { Router } from 'express';
import UsersController from './users/UsersController.js';

const router = Router();

router.post('/', UsersController.create);
router.get('/', UsersController.findAll);
router.get('/:id', UsersController.findOne);
router.put('/:id', UsersController.updateOne);
router.delete('/:id', UsersController.deleteOne);

export default router;
