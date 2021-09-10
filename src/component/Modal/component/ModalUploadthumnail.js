import React, { useMemo } from 'react'
import { useContext, useState } from 'react'
import { FaPaperclip } from 'react-icons/fa'
import { Context } from '../../../config/Context'
import { Button, InputImage, Labelimage } from '../../element'
import { Modal } from '../Modal'
import styled from 'styled-components'
import { MakePostImage } from '../../../config/FunctionAPI'
import { decrypt } from '../../../config/Enkripsi/Enkripsi'
import { cookiesGet } from '../../../config/Cookies'

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
text-align:center;
`

const Texthapus = styled.small`
cursor:pointer;
`

export const ModalUploadthumnail = (props) => {

  const { midDispatch, modal_upload, passing, loading } = useContext(Context)
  const [dataImage, setDataImage] = useState('')
  const [dataImage2, setDataImage2] = useState(null)
  const reader = new FileReader();


  const onChangeAttach = (e) => {
    reader.onload = () => {
      setDataImage(reader.result)
    }

    reader.readAsDataURL(e.target.files[0])
    setDataImage2(e.target.files[0])

  }

  const btnHapus = () => setDataImage('')

  const token = decrypt(cookiesGet({ key: 'token' }))

  const btnUploadImage = async () => {
    var data2 = new FormData()

    data2.set('id', passing)
    data2.append('thumbnail', dataImage2)

    // for (var pair of data2.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }


    await fetch(
      `${process.env.REACT_APP_API}/posts/create/addPhoto`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          enctype: "multipart/form-data",
        },
        body: data2
      }
    )
      .then(response => response.json())
      .then(res => {
        console.log(res)
        if (res.thumbnail_url) {
          alert(`success add photo ${res.title}`)
          window.location.reload(false)
        }
      })
      .catch(e => {
        console.error('ini error : ', e)
      })


  }

  // console.log(passing)

  return (
    <Modal width={30} show={modal_upload} isOpen={() => midDispatch({ type: 'CLOSE_M_UPD' })} >
      <div className="container">
        <div className="row">
          {
            dataImage === '' ?
              <>
                <Container className="col-md-12 col-sm-12">
                  <InputImage
                    type="file"
                    id="attach"
                    accept="image/*"
                    onChange={(e) => onChangeAttach(e)}
                  />
                  <Labelimage primary boxShadow large border for="attach">
                    <FaPaperclip /> &nbsp; Attach
                </Labelimage>
                </Container>
              </>
              :
              <>
                <Container className="col-md-12 col-sm-12">
                  <img width={200} src={dataImage} alt="img" />
                </Container>
                <Container className="col-md-12 col-sm-12">
                  <Texthapus onClick={btnHapus}>
                    hapus
                </Texthapus>
                </Container>
                <Container className="col-md-12 col-sm-12 mt-3">
                  <Button primary boxShadow
                    onClick={btnUploadImage}
                    disabled={loading ? true : false}
                  >
                    {loading ? 'Loading. . .' : 'Upload Image'}
                  </Button>
                </Container>
              </>
          }
        </div>

      </div>
    </Modal>
  )
}
