import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../Utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    makeApiCalls();
  }, [endpoint]);

  const makeApiCalls = async () => {
    setLoading(true); // Set loading to true when making the API call
    try {
      const res = await fetchDataFromApi(endpoint);
      setData(res);
      setError(null); // Reset error state on successful fetch
    } catch (err) {
      console.error("API fetch error:", err);
      setError(err); // Set error state if the fetch fails
    } finally {
      setLoading(false); // Set loading to false after the fetch completes
    }
  };

  return { data, loading, error }; // Return loading and error states
};

export default useFetch;
