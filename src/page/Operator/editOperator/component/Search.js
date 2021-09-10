import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const IconSearch = styled(FaSearch)`
display:flex;
position:absolute;
top:30%;
left:1%;
color:grey;
`

const InputSearch = styled.input`
padding-left:6%;
border-radius: 8px;
`

export const Search = () => {
  return (
    <div style={{ position: 'relative' }}>
      <InputSearch placeholder="Cari Nama Karyawan" type="text" className="form-control" />
      <IconSearch />
    </div>
  )
}
