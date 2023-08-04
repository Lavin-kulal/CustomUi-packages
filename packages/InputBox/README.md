# updapt-input

**A reusable input component for your JavaScript/Typescript React applications.**

## Installation

You can install the component using npm :

```bash
npm install updapt-input
```

## Usage

To use the updapt-input component in your application, import it and include it in your JSX code:

````tsx

import React, { useState } from "react";
import { UpdaptInput } from "updapt-input";

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  //error states
  const[error,setError] = useState(false)
// inputValue change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const{value} = event.target
    setInputValue(value);
    setError(false);
  };
  //validation for empty fields
  const validate=()=>{
    if (!inputValue.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  }
  //handle save changes
  const handleSave=()=>{
     validate()
     //API code for saving
  }
  return (
    <div>
      <h2>My Form</h2>
      <UpdaptInput
        value={inputValue}
        type="text"
        onChange={(event)=>handleInputChange(event)}
        placeholder="Enter your name"
        isError={error}
        width={180}
      />
      <p>Hello, {inputValue}!</p>
      <button onClick={()=>handleSave()}>SAVE</button>
    </div>
  );
}
```


## PROPS

The  ```updapt-input``` component accepts the following props:
````

| Prop          | Type    | Description                           |
| ------------- | ------- | ------------------------------------- |
| `placeholder` | string  | Placeholder text for the input field. |
| `value`       | any     | The value of the input field.         |
| `type`        | any     | type could be any for input           |
| `isError`     | boolean | if the input field is empty           |
| `width`       | number  | for dynamic width which is pixels     |

```


## Contributing
Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

Before contributing, please read our contributing guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

MIT &copy; [UPDAPT TEAM]()

Feel free to customize the content according to your project's requirements and specifications.



```
