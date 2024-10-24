import {useState } from "react"
import { request } from "../utils/api/animeData"
import { useQuery } from "@tanstack/react-query"


const useCard = (url) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)    

    const { data } = useQuery({
        queryKey: ['movies'],
        queryFn: () => {
            setIsLoading(true)
            return request.get(url)
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error('Failed to fetch posts')
                    }
                    return res.data

                })
                .catch((err) => {
                    setError(err.message || 'Failed to fetch posts')
                    alert.error(err.message || 'Failed to fetch posts')
                })
                .finally(() => {
                    setIsLoading(false)
                })

        }
    })    
    

    return (
        {
            data,
            loading: isLoading,
            error
        }
    )
}

export default useCard