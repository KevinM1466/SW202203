import { Router } from 'express';
import CashFlowRouter from './CashFlows';
const router = Router();

// Add sub-routes
// https://localhost:3001/cashFlow/new or upddate or delete or byIndex
router.use('/cashFlow', CashFlowRouter);

export default router;
