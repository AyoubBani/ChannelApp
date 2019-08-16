export const fetchMessages = (channel) => {    
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        return fetch(`http://127.0.0.1:3030/api/messages/${channel}/`, { headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'MESSAGES_FETCHED', results: res.data });
                    return res.data;
                }
            })

    }
}
