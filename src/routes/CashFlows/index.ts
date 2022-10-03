import { ICashFlow, CashFlow } from '@libs/CashFlow';
import { Router } from 'express';
const router = Router();
const cashFlowInstance = new CashFlow();

router.get('/', (_req, res) => {
    res.json(cashFlowInstance.getAllCashFlow());
});

router.get('/byIndex/:index', (req, res) => {
    try {
        const { index = -1 } = req.params as unknown as { index: number };
        res.json(cashFlowInstance.getCashFlowByIndex(index));
    } catch (error) {
        console.log('🔥: error', error)
        res.status(500).json({ 'msg': 'Error al obtener el registro' });
    }
});

router.post('/new', (req, res) => {
    try {
        const newCashFlow = req.body as unknown as ICashFlow;
        const newCashFlowIndex = cashFlowInstance.addCashFlow(newCashFlow);
        res.json({ newIndex: newCashFlowIndex });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.put('/update/:index', (req, res) => {
    try {
        const { index = -1 } = req.params as unknown as { index?: number };
        const cashFlowFromForm = req.body as ICashFlow;
        const cashFlowUpdated = Object.assign(
            cashFlowInstance.getCashFlowByIndex(index), cashFlowFromForm
        );
        // const cashFlowUpdated = { ...cashFlowInstance.getCashFlowByIndex(index), ...cashFlowFromForm };
        if (cashFlowInstance.updateCashFlow(index, cashFlowUpdated)) {
            res.json(cashFlowUpdated);
        } else {
            res.status(404).json({ 'msg': 'Update not possible' });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/delete/:index', (req, res) => {
    try {
        const { index = -1 } = req.params as unknown as { index: number };
        if (cashFlowInstance.deleteCashFlow(index)) {
            res.status(200).json({ 'msg': 'Registro eliminado' });
        } else {
            res.status(404).json({ 'msg': 'Registro no encontrado' });
        }
    } catch (error) {
        console.log('🔥: error', error)
        res.status(500).json({ 'msg': 'Error al eliminar el registro' });
    }
});

export default router;