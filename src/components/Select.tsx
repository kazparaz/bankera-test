import React from 'react'

export const Select = <T extends string>(props: {
  value?: T
  values: T[] | readonly T[]
  onChange?: (value: T) => void
}): JSX.Element => (
  <>
    <select
      value={props.value}
      onChange={(e) => props.onChange?.(e.target.value as T)}
    >
      {props.values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </>
)
