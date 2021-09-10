import React, { useState, useContext, useEffect } from 'react'
import { DateTime, InputPerson, InputPesan, InputTopic, WrapperInput, Row2 } from '../../pushNotification/styles'
import { Button, InputImage, Label, Labelimage } from '../../../../component/element/index'
import { FaPaperclip } from 'react-icons/fa';
import { Loading } from '../../../../component/Loading/Loading'
import { AnimatedView } from '../../../../component/AnimatedView/AnimatedView';
import { Context } from '../../../../config/Context'

export const PageEdit = (props) => {
  const dataprops = props.location.dataProps
  const [filename, setfileName] = useState('')
  const [dataImage, setDataImage] = useState('')
  const [date, setDate] = useState(new Date())
  const [data, setData] = useState({
    title: '',
    content: '',
    person: ''
  })
  const { midDispatch, dataAdmin, loading } = useContext(Context)

  const reader = new FileReader();


  const onChangeAttach = (e) => {
    console.log(e)
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDataImage(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    setDataImage(e.target.files[0])
    setfileName(e.target.files[0].name)

  }


  useEffect(() => {
    midDispatch({ type: 'GET_DATA_BERITA_DETAIL', id: dataprops })
  }, [])

  useEffect(() => {
    console.log(dataAdmin)
    if (dataAdmin) {
      setData({
        ...data, title: dataAdmin.title, content: dataAdmin.contents, person: dataAdmin.contact_person && dataAdmin.contact_person[0].full_name
      })

    }
    else {
      setData({
        ...data, title: 'null', content: 'null', person: 'null'
      })
    }
  }, [dataAdmin])

  console.log('data detail : ', dataAdmin)

  if (loading) {
    return <Loading />
  }

  return (
    <AnimatedView>
      <div className="container-fluid  pb-4">
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <h2>Edit Berita</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <WrapperInput>
              <InputTopic placeholder="Topic :" type="text" name="topic" className="form-control"
                value={data.title}
              // onChange={(e) => handleChangeValue(e, 'topic')}
              />
              <InputPesan placeholder="Pesan :" name="pesan" id="" cols="30" rows="10" className="form-control"
                value={data.content}
              // onChange={(e) => handleChangeValue(e, 'pesan')}
              ></InputPesan>
              <InputPerson placeholder="Contact Person :" type="text" name="topic" className="form-control"
                value={data.person}
              // onChange={(e) => handleChangeValue(e, 'person')}
              />

              <div className="row p-3">
                {/* <div className="col-md-6">
                  <Label primary> Foto Tampilan : </Label> &nbsp;
                  {
                    filename
                  }
                  <InputImage
                    type="file"
                    id="attach"
                    accept="image/*"
                    onChange={(e) => onChangeAttach(e)}
                  />
                  <Labelimage primary boxShadow large border for="attach">
                    <FaPaperclip /> &nbsp; Attach
                  </Labelimage>
                </div> */}
                <div className="col-md-6">
                  <Row2 className="row mt-3">
                    {/* <div className="col-md-6 p-2">
                      <DateTime primary border dateFormat="dd-MMM-yyyy h:mm aa" selected={date} onChange={date => setDate(date)} className="form-control" />
                    </div> */}
                    <div className="col-md-12">
                      <Button primary boxShadow large border>
                        Update
                      </Button>
                    </div>
                  </Row2>
                </div>
              </div>
            </WrapperInput>
          </div>
        </div>
      </div>

    </AnimatedView>
  )
}
