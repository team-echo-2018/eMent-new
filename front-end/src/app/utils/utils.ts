import { User } from '../entities/user';

export class Utils {

    constructor() { }

    public static convertDatabaseUserToUser(dataUser: any): User {

        const user = new User();
        user.user_id = dataUser.user_id;
        user.user_name = dataUser.user_name;
        user.user_password = dataUser.user_password;
        user.user_type = dataUser.user_type;
        
        return user;
    }
}
