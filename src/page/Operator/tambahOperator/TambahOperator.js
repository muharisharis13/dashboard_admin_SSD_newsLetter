import React, { useState, useContext } from 'react'
import { FaPaperclip } from 'react-icons/fa'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Button, InputImage, InputTextArea, Labelimage } from '../../../component/element/index'
import { Context } from '../../../config/Context'

export const TambahOperator = () => {
  const { loading, midDispatch } = useContext(Context)
  const [dataImage, setDataImage] = useState({
    ktp: '',
    dokumen: '',
    pasphoto: ''
  })
  const [filename, setfileName] = useState({
    ktp: '',
    dokumen: '',
    pasphoto: ''
  })
  const [dataInput, setDataInput] = useState({
    nik: '',
    nama: '',
    alamat: '',
    phone: '',
    password: '',
    email: ''
  })
  const reader = new FileReader();
  let formData = new FormData();


  const onChangeValue = (e, v) => {
    let value = e.target.value

    if (v === 'nik') {
      setDataInput({ ...dataInput, nik: value.replace(/[^0-9]+/g, '') })
    }
    else if (v === 'nama') {
      setDataInput({ ...dataInput, nama: value })
    }
    else if (v === 'alamat') {
      setDataInput({ ...dataInput, alamat: value })
    }
    else if (v === 'phone') {
      setDataInput({ ...dataInput, phone: value.replace(/[^0-9]+/g, '') })
    }
    else if (v === 'password') {
      setDataInput({ ...dataInput, password: value })
    }
    else if (v === 'email') {
      setDataInput({ ...dataInput, email: value })
    }

  }

  const onChangeAttach = (e, value) => {
    console.log(e)

    if (value === 'ktp') {
      setDataImage({ ...dataImage, ktp: e.target.files[0] })
      setfileName({ ...filename, ktp: e.target.files[0].name })

    }
    else if (value === 'dokumen') {

      setDataImage({ ...dataImage, dokumen: e.target.files[0] })
      setfileName({ ...filename, dokumen: e.target.files[0].name })

    }
    else if (value === 'photo') {

      setDataImage({ ...dataImage, pasphoto: e.target.files[0] })
      setfileName({ ...filename, pasphoto: e.target.files[0].name })

    }

  }

  const btnSimpanData = () => {

    formData.append('full_name', dataInput.nama)
    formData.append('email', dataInput.email)
    formData.append('password', dataInput.password)
    formData.append('phone', dataInput.phone)
    formData.append('nik', dataInput.nik)
    formData.append('address', dataInput.alamat)
    formData.append('file_ktp', dataImage.ktp)
    formData.append('file_document', dataImage.dokumen)
    formData.append('file_photo', dataImage.pasphoto)

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    midDispatch({ type: 'API_POST_ADD_OPERATOR', data: formData })
  }


  return (
    <AnimatedView>
      {/* {
        JSON.stringify(dataInput)
      } <br /> */}
      <div className="container-fluid  pb-4">
        <small>
          - masih bermasalah di nambahkan data karena masalah gambar
      </small>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <table className="table">
              <tr>
                <th>Nomor KTP</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nik :" className="form-control"
                    value={dataInput.nik}
                    onChange={(e) => onChangeValue(e, 'nik')}
                  />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <th>Nama Lengkap</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nama Lengkap :" className="form-control"
                    value={dataInput.nama}
                    onChange={(e) => onChangeValue(e, 'nama')}
                  />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <th>Alamat</th>
              </tr>
              <tr>
                <td>
                  <InputTextArea placeholder="Alamat" name="none" id="" cols="30" rows="5" className="form-control"
                    value={dataInput.alamat}
                    onChange={(e) => onChangeValue(e, 'alamat')}
                  ></InputTextArea>
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <th>Nomor Hp</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nomor Hp :" className="form-control"
                    value={dataInput.phone}
                    onChange={(e) => onChangeValue(e, 'phone')}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="col-md-6 col-sm-12">
            <table className="table">
              <tr>
                <th>Upload Ktp</th>
              </tr>
              <tr>
                <td>{filename.ktp}</td>
              </tr>
              <tr>
                <td>
                  <InputImage
                    type="file"
                    id="attach"
                    accept="image/*"
                    onChange={(e) => onChangeAttach(e, 'ktp')}
                  />
                  <Labelimage primary boxShadow large border for="attach" style={{ background: '#022B52' }}>
                    <FaPaperclip /> &nbsp; Attach
                </Labelimage>
                </td>
              </tr>
            </table>

            <table className="table">
              <tr>
                <th>Upload Dokumen</th>
              </tr>
              <tr>
                <td>{filename.dokumen}</td>
              </tr>
              <tr>
                <td>
                  <InputImage
                    type="file"
                    id="attachdokumen"
                    accept="image/*"
                    onChange={(e) => onChangeAttach(e, 'dokumen')}
                  />
                  <Labelimage primary boxShadow large border for="attachdokumen" style={{ background: '#022B52' }}>
                    <FaPaperclip /> &nbsp; Attach
                </Labelimage>
                </td>
              </tr>
            </table>


            <table className="table">
              <tr>
                <th>Upload PassPhoto</th>
              </tr>
              <tr>
                <td>{filename.pasphoto}</td>
              </tr>
              <tr>
                <td>
                  <InputImage
                    type="file"
                    id="attachpasphoto"
                    accept="image/*"
                    onChange={(e) => onChangeAttach(e, 'photo')}
                  />
                  <Labelimage primary boxShadow large border for="attachpasphoto" style={{ background: '#022B52' }}>
                    <FaPaperclip /> &nbsp; Attach
                </Labelimage>
                </td>
              </tr>
            </table>

            <table className="table">
              <tr>
                <th>Email</th>
              </tr>
              <tr>
                <td>
                  <input type="email" placeholder="Email :" className="form-control"
                    value={dataInput.email}
                    onChange={(e) => onChangeValue(e, 'email')}
                  />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <th>Password</th>
              </tr>
              <tr>
                <td>
                  <input type="password" placeholder="Password :" className="form-control"
                    value={dataInput.password}
                    onChange={(e) => onChangeValue(e, 'password')}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 col-sm-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button border primary boxShadow small
              onClick={btnSimpanData}
            >
              {loading ? 'Loading . . . ' : 'Simpan'}
            </Button>
          </div>
        </div>
      </div>
    </AnimatedView>
  )
}
