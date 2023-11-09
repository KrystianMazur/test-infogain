import { useEffect, useState } from 'react'

/* NOTE:
 It's much better to use ReactQuery or something like that,
 where we have build-in global cache.

 This hook is a simple example of how it can be resolved.
 Thanks to wrap all in one hook, we delegate all the logic outside the component.

 P.S. I don't extract the magic string from fetch ('/transactions'), because it's over-optimization
 in this case.
 */

export const useTransactionsQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    if (!data && !loading) {
      setLoading(true)
      fetch('/transactions')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((_error) => setError(_error))
        .finally(() => setLoading(false))
    }
  }, [data, loading])

  return {
    loading,
    data,
    error,
  }
}
