import { useEffect, useState } from "react";
import axios from "axios";
import type { data } from "react-router-dom";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [url]);
    return [data, isLoading, error] as const;
}

export default useFetch;
