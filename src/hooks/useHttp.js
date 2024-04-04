import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const res = await fetch(url, config);

    const resData = await res.json();

    if (!res.ok) {
        throw new Error(resData.message || 'Failed to send request.')
    }

    return resData;
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);

        try {
            const resData = await sendHttpRequest(url, config);
            
            setData(resData);
        } catch (err) {
            setError(err.message || 'Failed to get request data.')
        }

        setIsLoading(false);
    }, [url, config])

    useEffect(() => {
        if ((config && config.method === 'GET' || !config.method) || !config) {
            sendRequest()
        }
    }, [sendRequest, config])

    return { data, error, isLoading, sendRequest }
}