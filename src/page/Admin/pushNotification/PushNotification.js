import React, { useState, useContext } from 'react'
import { DateTime, InputPerson, InputPesan, InputTopic, WrapperInput, Row2 } from './styles'
import { Button, InputImage, Label, Labelimage } from '../../../component/element/index'
import { FaPaperclip } from 'react-icons/fa'
import DatePicker from "react-datepicker";
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView';
import { Context } from '../../../config/Context'
import { MakePost } from '../../../config/FunctionAPI'

export const PushNotification = () => {
  const { midDispatch, loading } = useContext(Context)
  const [dataInput, setDataInput] = useState({
    topic: '',
    pesan: '',
    contact: '',
  })



  const handleOnchangeValue = (e, v) => {
    let value = e.target.value

    if (v === 'topic') {
      setDataInput({
        ...dataInput,
        topic: value
      })
    }
    else if (v === 'pesan') {
      setDataInput({
        ...dataInput,
        pesan: value
      })
    }
    else if (v === 'contact') {
      setDataInput({
        ...dataInput,
        contact: value
      })
    }
  }

  const btnSechedule = () => {
    const data = {
      title: dataInput.topic,
      contents: dataInput.pesan,
      contact_person: [
        {
          full_name: dataInput.contact,
          phone: '081260333120',
          email: '-',
          linkedIn: 'linkedinurl3'
        }
      ]
    }
    // console.log(data)
    midDispatch({ type: 'API_POST_BERITA', data: data })


  }

  return (
    <AnimatedView>
      <div className="container-fluid  pb-4">
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <h2>Post Berita</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <WrapperInput>
              <InputTopic placeholder="Topic :" type="text" name="topic" className="form-control"
                onChange={(e) => handleOnchangeValue(e, 'topic')} value={dataInput.topic}
              />
              <InputPesan placeholder="Pesan :" name="pesan" id="" cols="30" rows="10" className="form-control"
                onChange={(e) => handleOnchangeValue(e, 'pesan')} value={dataInput.pesan}
              ></InputPesan>
              <InputPerson placeholder="Contact Person :" type="text" name="contact-person" className="form-control"
                onChange={(e) => handleOnchangeValue(e, 'contact')} value={dataInput.contact}
              />

              <div className="row p-3">

                <div className="col-md-12">
                  <Row2 className="row mt-3">
                    <div className="col-md-6">
                      <Button primary boxShadow large border onClick={btnSechedule}>
                        {
                          loading ? 'loading . . .' : 'Schedule'
                        }
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
