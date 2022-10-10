import { getConnection } from "@models/sqlite/SqliteConn";
import { UserDao } from "@models/sqlite/UsersDao";
export interface IUsers {
    firstName: string;
    LastName: string;
    user: string;
    phoneNumber: number;
    email: string;
    password: string;
    repeatPassword: string;
    _id?: unknown;
};

export class User {
    private dao: UserDao;
    public constructor() {
        getConnection()
            .then(conn => {
                this.dao = new UserDao(conn);
            })
            .catch(ex => console.error(ex));
    }
    // Consultas
    public getAllUsers() {
        return this.dao.getUsers()
    }
    public getUserByIndex(index: number) {
        return this.dao.getUsersById({ _id: index });
    }

    public addUser(users: IUsers) {
        return this.dao.insertNewUser(users);
    }
    public updateUser(index: number, users: IUsers) {
        return this.dao.update({ _id: index }, users);
    }
    public deleteUser(index: number) {
        return this.dao.deleteUser({ _id: index });
    }
}