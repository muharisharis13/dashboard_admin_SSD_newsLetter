import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../../../../component/element'
import { FaTrash } from 'react-icons/fa'

const Thead = styled.thead`
text-align:center;
`

const TableIcon = styled.table`
text-align:center;
justify-content:space-between;
align-items:center;
padding:0px 10px;
width: 100%;
`


const Tr = styled.tr`
background: ${({ bgcolor }) => (bgcolor ? '#DEDEDE' : 'transparent')};
text-align : center;
`

export const TableData = ({ data }) => {
  console.log('ini data', data)
  return (
    <table className="table table-bordered" style={{ background: '#fff' }}>
      <Thead>
        <tr>
          <th>No. ID User</th>
          <th>Nama User</th>
          <th>Status</th>
        </tr>
      </Thead>
      <tbody>
        {
          data.length > 0 ? data.map((item, index) => (
            <Tr key={index}>
              <td>{item._id}</td>
              <td>
                <Link to={{ pathname: "/DaftarUsers/Input", id: item._id }}>
                  <Button>
                    {item.user ? item.user.full_name : null}
                  </Button>
                </Link>
              </td>
              {/* <td>{item.transaction_status}</td> */}
              <td>
                <TableIcon>
                  <tr>
                    <td>{item.premium_packet ? item.premium_packet.name : null}</td>
                    <td>
                      <Button underline>{item.premium_packet ? item.premium_packet.duration : null}
                      Days
                    </Button>
                    </td>
                    <td>
                      {item.user ? item.user.user_type : 'NOTHING'}
                    </td>
                    <td> <FaTrash cursor="pointer" /> </td>

                  </tr>
                </TableIcon>
              </td>
            </Tr>

          ))
            : 'nothing data'
        }
      </tbody>
    </table>
  )
}
