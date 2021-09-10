import React, { useState, useEffect } from 'react'
import { Card } from '../../../component/element'
import { Wrapper } from './styles'
import { MakeGet } from '../../../config/FunctionAPI'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'

export const DashboardOperator = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  // const getData = () => {

  //   MakeGet({
  //     url: '/getData'
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])


  return (
    <AnimatedView>

      <div className="container-fluid pb-5">
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12 pb-2">
            <Card>
              <Wrapper>
                <h4>Registered Account</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12">
            <Card>
              <Wrapper>
                <h4>Active User Per Day</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 col-sm-12 pb-2">
            <Card>
              <Wrapper>
                <h4>Profit Per Day</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12 pb-2">
            <div className="row">
              <div className="col-md-6 p-2">
                <Card>
                  <Wrapper>
                    <h5>Active User Per Day</h5>
                  </Wrapper>
                  <Wrapper>
                    <h5>10.920.237.692</h5>
                  </Wrapper>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <Wrapper>
                    <h5>Active User Per Day</h5>
                  </Wrapper>
                  <Wrapper>
                    <h5>10.920.237.692</h5>
                  </Wrapper>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 col-sm-12 pb-2">
            <Card>
              <Wrapper>
                <h4>Profit Per Month</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12">
            <Card>
              <Wrapper>
                <h4>Profit Per Yet</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4 col-sm-12 pb-2">
            <Card>
              <Wrapper>
                <h4>Investor</h4>
              </Wrapper>
              <Wrapper>
                <h4>10.920.237.692</h4>
              </Wrapper>
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card>
              <Wrapper>
                <h4>Founder</h4>
              </Wrapper>
              <Wrapper>
                <h4>1092</h4>
              </Wrapper>
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card>
              <Wrapper>
                <h4>Pembaca</h4>
              </Wrapper>
              <Wrapper>
                <h4>1092</h4>
              </Wrapper>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedView>
  )
}
