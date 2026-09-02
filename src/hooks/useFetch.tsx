import { useEffect, useState } from "react";

async function useFetch<T>({ url }: { url: string }) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error
                        : new Error("server internal error"),
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return [data, isLoading, error] as const;
}

export default useFetch;
