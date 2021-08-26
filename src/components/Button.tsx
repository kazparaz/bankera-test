export const Button = (props: {
  label: string
  onClick?: () => void
}): JSX.Element => (
  <>
    <button onClick={props.onClick}>{props.label}</button>
    <style jsx>{`
      button {
        height: 2rem;
        padding: 0 8px;
        font-size: 14px;
        line-height: 2rem;
        color: #fff;
        background: #49c5b6;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
      }

      button:hover {
        background: #009194;
      }
    `}</style>
  </>
)
