import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Button } from '../../../component/element'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'


const Title = styled.th`
`

const TextArea = styled.textarea`
resize:none;
`

const ImgProfil = styled.img`
width:150px;
border-radius:100%;
object-fit:cover;
`

const ImgKtp = styled.img`
width:240px;
`

const ColButton = styled.div`
display:flex;
float:right;
transition:0.5s;
justify-content:flex-end;
align-items:right;

`

export const EditOperatorDetails = (props) => {
  const dataprops = props.location.props
  const { loading, dataAdmin, midDispatch } = useContext(Context)
  const [data, setData] = useState({
    nik: '',
    nama: '',
    alamat: '',
    phone: '',
    photo: '',
    ktp: '',
    dokumen: '',
    email: ''
  })


  const getData = () => {
    midDispatch({ type: 'API_GET_DATA_OPERATOR_DETAIL', id: dataprops })
  }
  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setData({
      ...data,
      nik: dataAdmin.nik,
      nama: dataAdmin.full_name,
      alamat: dataAdmin.address,
      phone: dataAdmin.phone,
      photo: dataAdmin.photo_url,
      ktp: dataAdmin.ktp_url,
      dokumen: dataAdmin.document_url,
      email: dataAdmin.email
    })
  }, [dataAdmin])

  if (loading) {
    return <Loading />
  }

  // console.log(dataAdmin)

  return (
    <AnimatedView>

      <div className="container-fluid  pb-4">
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <table className="table">
              <tr>
                <Title>Nomor KTP</Title>
              </tr>
              <tr>
                <td>
                  <input type="text" value={data.nik} className="form-control" />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <Title>Email</Title>
              </tr>
              <tr>
                <td>
                  <input type="text" value={data.email} className="form-control" />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <Title>Nama Lengkap</Title>
              </tr>
              <tr>
                <td>
                  <input type="text" value={data.nama} className="form-control" />
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <Title>Alamat</Title>
              </tr>
              <tr>
                <td>
                  <TextArea value={data.alamat} name="alamat" id="alamat" cols="30" rows="5" className="form-control"></TextArea>
                </td>
              </tr>
            </table>
            <table className="table">
              <tr>
                <Title>Nomor HP</Title>
              </tr>
              <tr>
                <td>
                  <input type="text" value={data.phone} className="form-control" />
                </td>
              </tr>
            </table>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6" style={{ textAlign: 'center' }}>
                <strong>Upload PassPhoto</strong> <br />
                <ImgProfil src={data.photo} alt="profile" />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 pb-3">
                    <strong>Upload KTP</strong> <br />
                    <ImgKtp src={data.ktp} alt="ktp" />
                  </div>
                  <div className="col-md-12">
                    <strong>Upload Dokumen</strong> <br />
                    <ImgKtp src={data.dokumen} alt="ktp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <ColButton className="col-md-12 col-sm-12">
            <Button primary small border boxShadow>
              Update
          </Button>
          </ColButton>
        </div>
      </div>
    </AnimatedView>
  )
}
