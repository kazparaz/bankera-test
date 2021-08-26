import { useState } from 'react'
import { useBitcoinsApi } from '../api'
import { formatCurrency } from '../utils'
import { FormGroup } from './FormGroup'

export const BitcoinConverter = (): JSX.Element => {
  const [amountBTC, setAmountBTC] = useState(1)
  const [refreshInterval, setRefreshInterval] = useState(60 * 1000)
  const { data } = useBitcoinsApi({ refreshInterval })

  return (
    <>
      <div>
        <h1>Currency converter</h1>

        <form>
          <FormGroup label='Refresh interval (s)'>
            <input
              type='number'
              min={1}
              value={refreshInterval / 1000}
              onChange={(e) =>
                setRefreshInterval(e.target.valueAsNumber * 1000)
              }
            />
          </FormGroup>

          <FormGroup label='BTC'>
            <input
              type='number'
              min={0}
              value={amountBTC}
              onChange={(e) => setAmountBTC(e.target.valueAsNumber)}
            />
          </FormGroup>

          {data &&
            Object.values(data).map((item) => (
              <FormGroup key={item.code} label={item.code}>
                <input
                  readOnly
                  value={formatCurrency(item.rate_float * amountBTC)}
                />
              </FormGroup>
            ))}
        </form>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
