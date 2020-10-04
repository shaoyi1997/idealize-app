import { useEffect, useState } from 'react';

import { makeFullUrlApiCall } from '../../middleware/axios';

export default function useFetchIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const fetchIdeas = () => {
    setTrigger(!trigger);
  };
  useEffect(() => {
    let isCancelled = false;

    (async () => {
      setError(false);
      setIsLoading(true);

      try {
        const result = await makeFullUrlApiCall('idea');
        const returnedIdeas = result?.data?.ideas;

        if (!isCancelled) {
          setIdeas(returnedIdeas);
        }
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    })();

    return () => {
      isCancelled = true;
    };
  }, [trigger]);

  return { ideas, isLoading, error, fetchIdeas };
}
