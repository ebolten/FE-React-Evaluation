export default function interests(state = initialInterestsState, action) {
    switch (action.type) {
        case "UPDATE_INTERESTS":
            let new_interests = action.new_interests;
            return {interests: new_interests};
        default:
            return state;
    }
}

const initialInterestsState = {
    interests: []
}