import { useState } from "react"


const Checkbox = ({label}: {label:string}) => {
  const [value, setValue] = useState(false)

  // OU PODEMOS CRIAR UM FUNCTION EXTERNA
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event ) => {
  //   setValue(event.currentTarget.checked);
  // }

  return (
    <div>
      <label
        style={{
          padding: '1rem',
          border: !value ? "1px solid red" : "1px solid green",
          cursor: "pointer"
        }}>
        <input type="checkbox" checked={value} onChange={({currentTarget}) => setValue(currentTarget.checked)} />
        {label}
      </label>
    </div>
  )
}

export default Checkbox