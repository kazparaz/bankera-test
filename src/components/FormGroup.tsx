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
      label {
        display: block;
      }
    `}</style>
  </>
)
