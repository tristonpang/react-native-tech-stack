export default (state = null, action) => { //default state on init call for reducer is null
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state; //return last state
    }
};
