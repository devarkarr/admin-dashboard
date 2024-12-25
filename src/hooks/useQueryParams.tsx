import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function useQueryParams() {
  const [queryParam, setQueryParam] = useState<Record<string, string>>({}) // Local queryParam state
  const [searchParams, setSearchParams] = useSearchParams() // URL Search Params
  const queryParams = Object.fromEntries([...searchParams]) // Current search params object

  useEffect(() => {
    setSearchParams((prev) => ({
      ...Object.fromEntries([...prev]),
      ...queryParam,
    }))
  }, [setSearchParams, queryParam])

  return [queryParams, setQueryParam] as const
}
