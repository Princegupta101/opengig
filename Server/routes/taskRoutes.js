import express from 'express';

import { getTasks, createTask, updateTask } from '../controller/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);

export default router;