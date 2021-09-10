import React, { useState, useEffect, useContext } from 'react'
import { Button, Card } from '../../../component/element'
import { ColCard, ColDesc, ColImage, Container, ImageNotif, SmallDate, Title } from './styles'
import { Link } from 'react-router-dom'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'
import moment from 'moment'
import { Toggle } from '../../../component/toggle/Toggle'
import Select from '../../../component/Select/Select'

export const EditNotification = () => {
  const { loading, midDispatch, dataAdmin, dispatch } = useContext(Context)
  const [selectedOptions, setSelectedOptions] = useState({ value: true, label: 'Posted' })
  const options = [
    { value: false, label: 'Not Post' },
    { value: true, label: 'Posted' },
  ]



  useEffect(() => {
    midDispatch({ type: 'GET_DATA_BERITA' })
  }, [])

  const btnuploadImg = (id) => {
    midDispatch({ type: 'OPEN_M_UPD' })
    dispatch({ type: 'PASSING', passing: id })
  }

  const btnToggle = (e, id) => {
    let value = e.target.checked

    const data = {
      id: id
    }

    if (value === false) {
      midDispatch({ type: 'API_POST_RELEASE_DISABLED', data: data })

    }
    else if (value === true) {
      midDispatch({ type: 'API_POST_RELEASE_ENABLED', data: data })

    }

  }



  if (loading) {
    return <Loading />
  }

  console.log(selectedOptions)

  return (
    <AnimatedView>
      <div className="container-fluid pb-5">
        <small>
          - api edit berita belum ada <br />
        </small>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <Select
              propsOptions={options}
              setSelectedOptions={setSelectedOptions}
              selectedOption={selectedOptions}
            />
          </div>
        </div>
        <div className="row mt-5" >
          {
            dataAdmin.length > 0 ? dataAdmin.filter(item => item.posted === selectedOptions.value).map((item, index) => (
              <ColCard className="col-md-6" key={index}>
                <Card>
                  <Container className="container">
                    <div className="row">
                      <ColImage className="col-md-12">
                        <ImageNotif src={item.thumbnail_url} alt="Image" />
                      </ColImage>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <Title>{item.title}</Title>
                      </div>
                    </div>
                    <div className="row">
                      <ColDesc className="col-sm-12">
                        <p style={{ wordWrap: 'break-word' }}>
                          {item.contents}

                        </p>
                      </ColDesc>
                    </div>

                    <div className="row mt-2">
                      <div className="col-md-6 pb-2">
                        <Link to={{
                          pathname: "/EditNotifications/Edit",
                          dataProps: item._id
                        }} style={{ textDecoration: 'none' }}>
                          <Button primary border boxShadow>
                            Edit
                        </Button>
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Button danger border onClick={() => midDispatch({ type: 'SHOW_MODAL' })} >
                          Hapus
                        </Button>
                      </div>
                      <div className="col-md-6 pb-2">
                        <Button
                          onClick={() => btnuploadImg(item._id)}
                        >
                          Upload Image
                        </Button>
                      </div>
                      <div className="col-md-6 pb-2">
                        <Toggle id={index} value={item.posted} onChange={(e) => btnToggle(e, item._id)} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <SmallDate>{moment(item.createdAt).format('ddd , DD MMM YYYY H:ss')}</SmallDate>
                      </div>
                    </div>

                  </Container>
                </Card>
              </ColCard>

            ))
              : 'Nothing Data'
          }
        </div>
      </div>
    </AnimatedView>
  )
}
