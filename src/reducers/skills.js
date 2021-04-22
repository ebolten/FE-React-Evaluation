export default function skills(state = initialSkillsState, action) {
    switch (action.type) {
        case "UPDATE_SKILLS":
            let new_skills = action.new_skills;
            return {skills: new_skills};
        default:
            return state;
    }
}

const initialSkillsState = {
    skills: []
}