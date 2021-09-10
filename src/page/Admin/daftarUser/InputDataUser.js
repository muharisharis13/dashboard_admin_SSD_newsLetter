import React, { useState, useEffect, useContext } from 'react'
import { FaPaperclip, FaUser } from 'react-icons/fa'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Button, InputImage, Labelimage } from '../../../component/element'
import styled from 'styled-components'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'

const RowButton = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const ImageView = styled.img`
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.18);
border-radius:5px;
`

export const InputDataUser = (props) => {
  const dataProps = props.location.id;
  const { midDispatch, loading, dataAdmin } = useContext(Context)

  const [data, setData] = useState({
    nik: '',
    nama: '',
    email: '',
    phone: '',
    pasphoto: '',
  })

  useEffect(() => {
    midDispatch({ type: 'API_GET_DETAIL_DAFTAR_USER', id: dataProps })
  }, [])

  useEffect(() => {
    setData({
      ...data,
      email: dataAdmin.user && dataAdmin.user.email,
      nama: dataAdmin.user && dataAdmin.user.full_name,
      phone: dataAdmin.user && dataAdmin.user.phone,
    })
  }, [dataAdmin])





  if (loading) {
    return <Loading />
  }


  return (
    <AnimatedView>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <table style={{ width: '100%' }}>
              <tr>
                <th>Nomor Ktp</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nomor Ktp :" className="form-control"
                    value={data.nik}
                  />
                </td>
              </tr>
            </table>
            <table style={{ width: '100%' }}>
              <tr>
                <th>Nama Lengkap</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nama Lengkap :" className="form-control"
                    value={data.nama}
                  />
                </td>
              </tr>
            </table>
            <table style={{ width: '100%' }}>
              <tr>
                <th>Alamat Email</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Alamat Email :" className="form-control"
                    value={data.email}
                  />
                </td>
              </tr>
            </table>
            <table style={{ width: '100%' }}>
              <tr>
                <th>Nomor Hp</th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Nomor Hp :" className="form-control"
                    value={data.phone}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-12">
                <p style={{ color: 'grey' }}>
                  Pass Photo
                </p>
              </div>
              <div className="col-md-12">
                <ImageView width={300} src={dataAdmin.user && dataAdmin.user.photo_url} alt="pas photo" />
              </div>
            </div>
          </div>
        </div>
        <RowButton className="row mt-5">
          <div className="col-md-3 col-sm-12">
            <Button danger border>
              Blokir
            </Button>
          </div>
          <div className="col-md-3 col-sm-12">
            <Button primary border boxShadow>
              Update
            </Button>
          </div>
        </RowButton>
      </div>
    </AnimatedView>
  )
}
