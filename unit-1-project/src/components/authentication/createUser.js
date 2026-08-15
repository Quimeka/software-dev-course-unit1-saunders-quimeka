import { onyxUsers, idCounter } from '../common/userGlobals.js';

export default function createUser(firstName, lastName, email, password) {
    const currentId = String(++idCounter.index);

    const newUser = {
        user_id: currentId,
        user_first: firstName,
        user_last: lastName,
        user_email: email,
        user_password: password
    };

    onyxUsers.push(newUser);
    console.log("Current Users:", onyxUsers);
}