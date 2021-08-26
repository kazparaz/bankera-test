import useSWR, { SWRConfiguration } from 'swr'

export const CURRENCIES = ['USD', 'GBP', 'EUR'] as const

export type BitcoinsApiResponse = {
  time: {
    updated: string
    updatedISO: string
    updateduk: string
  }
  disclaimer: string
  chartName: 'Bitcoin'
  bpi: {
    [Code in typeof CURRENCIES[number]]: {
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
  error: Error | undefined
} {
  const { data, error } = useSWR<BitcoinsApiResponse, Error>(
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
