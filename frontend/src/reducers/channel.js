const initialState = {
    channels: []
};

export default function channels(state = initialState, action) {
    switch (action.type) {
        case 'CHANNELS_FETCHED':            
            return { ...state, channels: action.results.data };
        default:
            return state;
    }
}
