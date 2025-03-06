import { useState, useEffect } from "react"
import { URL, API_CONFIG, ERROR_MESSAGES } from "../../config/api"

function useFetch(endpoint, initialValue = []) {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${URL.PRODUCTION}${endpoint}`, API_CONFIG)
        
        if (!response.ok) {
          throw new Error(
            response.status === 404 
              ? ERROR_MESSAGES.NOT_FOUND 
              : ERROR_MESSAGES.SERVER_ERROR
          )
        }

        const result = await response.json()
        setData(result)
        setError(null)
      } catch (error) {
        setError(error.message || ERROR_MESSAGES.NETWORK_ERROR)
        setData(initialValue)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, initialValue)

  return {
    data,
    setData,
    loading,
    error
  }
}

export { useFetch }