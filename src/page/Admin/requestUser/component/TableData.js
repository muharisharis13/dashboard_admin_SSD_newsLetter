import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../../../../component/element'
import { FaTrash } from 'react-icons/fa'
import { Context } from '../../../../config/Context'

const Thead = styled.thead`
text-align:center;
`

const TableIcon = styled.table`
text-align:center;
justify-content:space-between;
align-items:center;
width:50%;
display:flex;
margin:0px 25%; 
`


const Tr = styled.tr`
background: ${({ bgcolor }) => (bgcolor ? '#DEDEDE' : 'transparent')};
text-align : center;
`

export const TableData = ({ data }) => {
  const { midDispatch, passing, dispatch } = useContext(Context)
  const [id, setId] = useState('')


  const bntDecline = (id) => {

    midDispatch({ type: 'SHOW_MODAL' })
    setId(id)
  }

  useEffect(() => {
    if (passing === 'ya') {

      midDispatch({ type: 'API_PUT_CANCEL_TRANSACTION', id: id })
      midDispatch({ type: 'API_GET_DATA_REQUEST_TRANSACTION' })
      dispatch({ type: 'PASSING', passing: '' })
    }
  })

  return (
    <table className="table table-bordered" style={{ background: '#fff' }}>
      <Thead>
        <tr>
          <th>No. ID User</th>
          <th>Nama User</th>
          <th>CAT</th>
          <th>Paid</th>
          <th>Status</th>
        </tr>
      </Thead>
      <tbody>
        {
          data.length > 0 ? data.map((item, index) => (
            <Tr key={index}>
              <td>{item._id}</td>
              <td>
                {/* <Link to={{ pathname: "/DaftarUsers/Input", data: data[index] }}> */}
                <Button>
                  {item.user ? item.user.full_name : null}
                </Button>
                {/* </Link> */}
              </td>
              <td>{item.premium_packet ? item.premium_packet.name : null}</td>
              <td>{item.transaction_status}</td>
              <td style={{ padding: '0px' }}>
                <table className="table" >
                  <tr>
                    <td>{item.premium_packet ? item.premium_packet.price : null}</td>
                    {
                      item.transaction_status === 'PAID' || item.transaction_status === 'CANCELLED' ? null :
                        <>
                          <td>
                            <Button
                              onClick={() => midDispatch({ type: 'API_PUT_PAID_TRANSACTION', id: item._id })}
                            >ACCEPT</Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => { bntDecline(item._id) }}
                            >DECLINE</Button>
                          </td>
                        </>
                    }
                  </tr>
                </table>
              </td>
            </Tr>

          ))
            : 'nothing data'
        }
      </tbody>
    </table>
  )
}
