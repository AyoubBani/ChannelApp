const initialState = {
    messages: []
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGES_FETCHED':
            return { ...state, messages: action.results.channelMessages };
        case 'MESSAGE_ADDED':                        
            const messages =  state.messages;
            messages.push(action.results.channelMessage);
            return { ...state, messages };
        default:
            return state;
    }
}
