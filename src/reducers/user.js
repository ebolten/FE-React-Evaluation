export default function user(state = initialUserState, action) {
    switch (action.type) {
        case "UPDATE_USERNAME":
            let new_username = action.new_username;
            return new_username;
        default:
            return state;
    }
}

const initialUserState = {
    userName: ''
};
