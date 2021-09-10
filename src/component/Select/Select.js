import React from 'react'
import Select1 from 'react-select';

const Select = ({ propsOptions, selectedOption, setSelectedOptions }) => {

  const options = propsOptions


  const handleChange = selected => {
    setSelectedOptions(selected)
  }

  return <Select1
    value={selectedOption}
    onChange={handleChange}
    options={options}
  />
}

export default Select

