export interface IDaoObject {
    persistanceName: string;
    findAll: Function;
    findById: Function;
    createOne: Function;
    update: Function;
    delete: Function;
    findByFilter: Function;
    aggregate: Function;
};