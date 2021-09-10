import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from '../../../component/element/index'
import styled from 'styled-components'
import data from '../../../json/dataComplain.json'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { MakeGet } from '../../../config/FunctionAPI'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'


const TableContainer = styled.div`
width:100%;
`

const Container = styled.div`
padding:20px 20px;
`

const CardStatus = styled.div`
/* box-shadow: 0px 0px 7px 5px rgba(255,62,62,1); */
box-shadow: ${({ status }) => (status ? '0px 0px 9px 2px rgba(255,0,0,1)' : null)};
border-radius:8px;
transition:450ms;
`

export const ViewComplain = () => {
  const [result, setResult] = useState([])
  const { dispatch, loading, modal_reply } = useContext(Context)

  const getData = async () => {
    dispatch({
      type: 'LOADING',
      loading: true
    })
    MakeGet({
      url: '/complains/all'
    })
      .then(res => {
        if (res.message === 'SUCCESS') {
          console.log(res)
          dispatch({
            type: 'LOADING',
            loading: false
          })
          setResult(res.data)
        }
        else {
          alert(res.message)
        }
      })
  }

  useEffect(() => {
    getData()
  }, [])


  const btnReply = (id) => {
    dispatch({ type: 'SHOW_MODAL_REPLY', modal_reply: true, passing: id })
  }


  if (loading) {
    return <Loading />
  }

  console.log(result)

  return (
    <AnimatedView>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-12 col-sm-12">
            <h3>Pesan Masuk</h3>
          </div>
        </div>
        <div className="row mt-4">
          {
            result.length > 0 ? result.map((item, index) => (
              <div key={index} className="col-md-4 col-sm-12 pb-2">
                <CardStatus status={item.read} >
                  <Card>
                    <Container className="container">
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <TableContainer>
                            <tr>
                              <th>
                                From
                              </th>
                              {/* <td> : Not Found </td> */}
                              <td> : {item.from} </td>
                            </tr>
                            <tr>
                              <th>
                                Subject
                              </th>
                              <td> : {item.title} </td>
                            </tr>
                            <tr>
                              <th>
                                Message
                              </th>
                            </tr>
                          </TableContainer>
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <p style={{ wordWrap: 'break-word' }}>
                                {item.message}
                              </p>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 mt-4">
                          <Button boxShadow primary onClick={() => btnReply(item._id)} >
                            Reply
                      </Button>
                          {/* <Button danger className="mt-2">
                            Delete
                      </Button> */}
                        </div>
                      </div>

                    </Container>
                  </Card>

                </CardStatus>
              </div>

            ))
              : 'NOTHING COMPLAINS'
          }
        </div>
      </div>
    </AnimatedView>
  )
}
