import React, { useContext } from 'react'
import { FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from '../../../../component/element'
import { Link } from 'react-router-dom'
import { Toggle } from '../../../../component/toggle/Toggle'

const Thead = styled.thead`
text-align:center;
`

const TableIcon = styled.table`
text-align:center;
justify-content:space-between;
align-items:center;
display:flex;
width:100%;
padding:0px 10px;
`


const Trash = styled(FaTrash)`
cursor:pointer;
`

const Tr = styled.tr`
background: ${({ bgcolor }) => (bgcolor ? '#DEDEDE' : 'transparent')};
text-align : center;
`

export const TableData = ({ data }) => {
  return (
    <table className="table table-bordered" style={{ background: '#fff' }}>
      <Thead>
        <tr>
          <th>No. ID Pegawai</th>
          <th>Nama Pegawai Operator</th>
          <th>Status</th>
        </tr>
      </Thead>
      <tbody>
        {
          data.length > 0 ? data.map((item, index) => (
            <Tr bgcolor={index % 2 ? true : false} key={index}>
              <td> {item._id}</td>
              <td> {item.full_name}</td>
              <td>
                <TableIcon>
                  <td> <Link to={{
                    pathname: '/EditOperators/Details',
                    props: item._id
                  }}>
                    <Button underline>Edit</Button>
                  </Link> </td>
                  <td>
                    {/* {item.status === "true" ? <ToggleOn /> : <ToggleOff />} */}
                    <Toggle id={index} />
                  </td>
                  <td> <Trash /> </td>
                </TableIcon>
              </td>
            </Tr>
          ))
            : 'Nothing Data'
        }
      </tbody>
    </table>
  )
}
