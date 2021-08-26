import { useState } from 'react'
import { FormGroup } from './FormGroup'

export const CurrencyConverter = (): JSX.Element => {
  const [amountBTC, setAmountBTC] = useState(0)

  return (
    <>
      <div>
        <h1>Currency converter</h1>

        <form>
          <FormGroup label='BTC'>
            <input
              type='number'
              min={0}
              value={amountBTC}
              onChange={(e) => setAmountBTC(e.target.valueAsNumber)}
            />
          </FormGroup>
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
