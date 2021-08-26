import useSWR, { SWRConfiguration } from 'swr'

type BitcoinsApiResponse = {
  time: {
    updated: string
    updatedISO: string
    updateduk: string
  }
  disclaimer: string
  chartName: 'Bitcoin'
  bpi: {
    [Code in 'USD' | 'GBP' | 'EUR']: {
      code: Code
      symbol: string
      rate: string
      description: string
      rate_float: number
    }
  }
}

export function useBitcoinsApi(
  config?: Pick<SWRConfiguration, 'refreshInterval'>
): {
  data?: BitcoinsApiResponse['bpi']
  isLoading: boolean
  error: string | undefined
} {
  const { data, error } = useSWR<BitcoinsApiResponse, string>(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    async (url) => {
      const response = await fetch(url)
      if (!response.ok) throw Error('API error')
      return response.json()
    },
    config
  )

  return {
    data: data?.bpi,
    isLoading: !error && !data,
    error,
  }
}
