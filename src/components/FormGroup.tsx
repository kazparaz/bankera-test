export const FormGroup = (props: {
  label: string
  children: JSX.Element
}): JSX.Element => (
  <>
    <fieldset>
      <label>{props.label}</label>
      {props.children}
    </fieldset>
    <style jsx>{`
      fieldset {
        padding: 0;
        border: none;
      }

      fieldset + fieldset {
        margin-top: 1rem;
      }

      label {
        display: block;
      }
    `}</style>
  </>
)
