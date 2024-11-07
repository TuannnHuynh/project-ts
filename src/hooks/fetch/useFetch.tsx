import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  pending: boolean;
  error: string | null;
}

export default function useFetch<T = unknown>(
  url: string,
  option: AxiosRequestConfig = {},
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    setPending(true);
    try {
      const response: AxiosResponse<T> = await axios(url, option);
      setData(response.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred.");
    } finally {
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
