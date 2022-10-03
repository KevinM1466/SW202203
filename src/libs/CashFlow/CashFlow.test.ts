import { CashFlow, ICashFlow } from './index';

describe('CashFlow Lib Unit Tests', () => {
    it('Should create an Instance of cashflow', () => {
        const cashFlowInstance = new CashFlow();
        expect(cashFlowInstance).toBeDefined();
    });
    it('Should add a new cashflow item to the collection', () => {
        const cashFlowInstance = new CashFlow();
        const cashFlowItem: ICashFlow = {
            type: 'INCOME',
            date: new Date(),
            amount: 100,
            description: 'Receipt A101 from SW'
        };
        const index = cashFlowInstance.addCashFlow(cashFlowItem);
        expect(index).toBe(0);
    });
});