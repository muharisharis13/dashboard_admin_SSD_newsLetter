import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from '../../../component/element'
import { Link } from 'react-router-dom'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Context } from '../../../config/Context'
import { MakeGet } from '../../../config/FunctionAPI'

export const Dashboard = () => {
  const [result, setResult] = useState([])
  const { dispatch } = useContext(Context)

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


  return (
    <AnimatedView>
      <div className="container-fluid pb-4">
        <div>
          <div className="row" style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="col-md-6 col-sm-12 pb-4">
              <Card>
                <div className="row">
                  <div className="col-md-12 col-sm-12" style={{ padding: '20px 40px' }}>
                    <h4>Total Message : {result.length}</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div style={{ padding: '10px 30px', background: '#E9E9E9', textAlign: 'left' }}>
                      <h5>
                        <strong>Via Email</strong>
                        <span> : {result.length}</span>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12" style={{ padding: '20px 40px' }}>
                    <Link to="/ViewComplain" style={{ textDecoration: 'none' }}>
                      <Button primary big boxShadow>
                        View Message

                    </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <Card>
                    <div className="row">
                      <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                        <h4>Active User</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                        <h3>1.920.237.692</h3>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-12 mt-5">
                  <div className="row">
                    <div className="col-sm-6  pb-4">
                      <Card>
                        <div className="row ">
                          <div className="col-md-12 col-sm-12 " style={{ padding: '5px 40px' }}>
                            <h5>Like Per Day</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                            <h6>3.000.000</h6>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="col-sm-6">
                      <Card>
                        <div className="row">
                          <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                            <h5>Dislike Per Day</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                            <h6>3.000.000</h6>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </AnimatedView>
  )
}
