import { Router } from 'express';
import CashFlowRouter from './CashFlows';
import UsersRouter from './Users';
const router = Router();

// Add sub-routes
// https://localhost:3001/cashFlow/new or update or delete or byIndex
router.use('/cashFlow', CashFlowRouter);
router.use('/user', UsersRouter);

export default router;
