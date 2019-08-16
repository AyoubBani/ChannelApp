export const fetchChannels = () => {

    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        return fetch("http://127.0.0.1:3030/api/channels/", { headers, })
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
                    dispatch({ type: 'CHANNELS_FETCHED', results: res.data });
                    return res.data;
                }
            })

    }
}


export const addMessage = (channel, message) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({message});
        console.log(`http://127.0.0.1:3030/api/${channel}/`);
        return fetch(`http://127.0.0.1:3030/api/${channel}/`, { headers, body, method: "PUT" })

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
                if (res.status === 201) {
                    dispatch({ type: 'MESSAGE_ADDED', results: res.data });
                    return res.data;
                }
            })

    }



}

