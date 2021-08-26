import { useState } from 'react'
import { CURRENCIES, useBitcoinsApi } from '../api'
import { formatCurrency, isOneOf } from '../utils'
import { FormGroup } from './FormGroup'
import { Select } from './Select'

export const BitcoinConverter = (): JSX.Element => {
  const [amountBTC, setAmountBTC] = useState(1)
  const [refreshInterval, setRefreshInterval] = useState(60 * 1000)
  const [visibleCurrencies, setVisibleCurrencies] = useState<
    typeof CURRENCIES[number][]
  >(['USD'])
  const { data, error } = useBitcoinsApi({ refreshInterval })

  return (
    <>
      <div className='root'>
        <h1>Bitcoin converter</h1>

        <form>
          <FormGroup label='BTC'>
            <input
              type='number'
              min={0}
              value={amountBTC}
              onChange={(e) => setAmountBTC(e.target.valueAsNumber)}
            />
          </FormGroup>

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

          {error ? (
            <div className='error'>{error.message}</div>
          ) : (
            <>
              {visibleCurrencies.length < CURRENCIES.length && (
                <FormGroup label='Select currency to add'>
                  <Select
                    values={[
                      '---',
                      ...CURRENCIES.filter(
                        (code) => !visibleCurrencies.includes(code)
                      ),
                    ]}
                    onChange={(code) =>
                      isOneOf(code, CURRENCIES)
                        ? setVisibleCurrencies([...visibleCurrencies, code])
                        : undefined
                    }
                  />
                </FormGroup>
              )}

              {data &&
                Object.values(data)
                  .filter((item) => visibleCurrencies.includes(item.code))
                  .map((item) => (
                    <FormGroup key={item.code} label={item.code}>
                      <div className='currencyInputWrap'>
                        <input
                          readOnly
                          value={formatCurrency(
                            item.rate_float * amountBTC,
                            item.code
                          )}
                        />
                        <button
                          className='currencyRemove'
                          onClick={() =>
                            setVisibleCurrencies(
                              visibleCurrencies.filter(
                                (code) => code !== item.code
                              )
                            )
                          }
                        >
                          ×
                        </button>
                      </div>
                    </FormGroup>
                  ))}
            </>
          )}
        </form>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 2rem;
        }

        form > :global(*):not(:first-child) {
          margin-top: 1rem;
        }

        .error {
          color: red;
        }

        .currencyInputWrap {
          display: flex;
        }

        .currencyRemove {
          margin-left: 0.5rem;
        }
      `}</style>
    </>
  )
}
