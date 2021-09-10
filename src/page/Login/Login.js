import React, { useState, useEffect } from 'react'
import { BGLogin, Input, Logo2, LogoInput, WrapperInput, H4 } from './styles'
import Logo from '../../image/CEONESIA1.png'
import { Button, Card } from '../../component/element'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import { MakePost } from '../../config/FunctionAPI'
import { cookiesSet, cookiesGet, cookiesRemove } from '../../config/Cookies'
import { decrypt, encrypt } from '../../config/Enkripsi/Enkripsi'
import { AnimatedView } from '../../component/AnimatedView/AnimatedView'

export const Login = () => {
  const [redirect, setRedirect] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [check, setCheck] = useState(false)
  const token = cookiesGet({ key: 'token' })

  const btnLogin = async () => {
    setLoading(true)

    MakePost({ url: '/operators/signin', data })
      .then(res => {
        console.log('ini success', res)
        setLoading(false)
        if (res !== undefined) {
          cookiesSet({
            key: 'token',
            value: encrypt(res.token),
            expires: Infinity
          })
          cookiesSet({
            key: 'role',
            value: encrypt(res.access_type),
            expires: Infinity
          })
          cookiesSet({
            key: 'name',
            value: encrypt(res.full_name),
            expires: Infinity
          })
          cookiesSet({
            key: 'photo_profil',
            value: encrypt(res.photo_url),
            expires: Infinity
          })


          if (check) {

            cookiesSet({
              key: 'email',
              value: encrypt(data.email),
              expires: 3
            })
          }
          else {
            cookiesRemove({
              key: 'email'
            })

          }
          // setRedirect(true)
          window.location.href = '/'

        }
        else {
          alert('Please check your data')
        }
      })
  }

  const handleChangeValue = ({ e, v }) => {
    let value = e.target.value

    if (v === 'email') {
      setData({ ...data, email: value })
    }
    else if (v === 'password') {
      setData({ ...data, password: value })
    }
  }


  const btnSaveEmail = (e) => {
    let value = e && e.target.checked

    console.log(value)
    if (value) {
      cookiesSet({
        key: 'email',
        value: data.email,
        expires: 3
      })
      setCheck(value)
    }
    else if (value === false) {
      cookiesRemove({
        key: 'email'
      })
      setCheck(value)
    }
  }

  useEffect(() => {
    btnSaveEmail()
    if (decrypt(cookiesGet({ key: 'email' }))) {
      setData({
        ...data, email: decrypt(cookiesGet({ key: 'email' }))
      })
      setCheck(true)
    }
    else {
      setData({
        ...data, email: ''
      })
      setCheck(false)

    }
  }, [])

  if (token) {
    window.location.href = "/"
  }



  return (
    <div className="row">

      <BGLogin className="col-md-6 col-sm-12">
      </BGLogin>
      <div className="col-md-6 col-sm-12">
        <div className="row justify-content-center" style={{ marginTop: '50px' }}>
          Admin : {JSON.stringify({
          "email": "tech@admin.ssdigital.co.id",
          "password": "thePassword"
        })} <br />
          Operator : {JSON.stringify({
          "email": "muharisharis13@gmail.com",
          "password": "muharis"
        })} <br />

          <Logo2 className="col-md-12">
            <img src={Logo} width={150} alt="Logo" />
          </Logo2>
          <div className="col-md-10 col-sm-12 mt-2">
            <AnimatedView>
              <div className="container-fluid">
                <Card>
                  <div className="row">
                    <div className="col-sm-12" style={{ textAlign: 'center' }}>
                      <H4>Login</H4>
                    </div>
                    <WrapperInput paddinginput className="col-sm-12">
                      <LogoInput> <FaUserAlt /> </LogoInput>
                      <Input type="email" placeholder="Email" className="form-control"
                        value={data.email} onChange={(e) => handleChangeValue({ e: e, v: 'email' })}
                      />
                    </WrapperInput>
                    <WrapperInput paddingbutton className="col-sm-12">
                      <LogoInput> <FaLock /> </LogoInput>
                      <Input type="password" placeholder="Password" className="form-control"
                        value={data.password} onChange={(e) => handleChangeValue({ e: e, v: 'password' })}
                      />
                    </WrapperInput>
                    <WrapperInput paddingbutton className="col-sm-12" style={{ marginTop: '-30px', display: 'flex' }}>
                      <input type="checkbox" id="SaveLabel"
                        onClick={btnSaveEmail} checked={check}
                      />
                      <label htmlFor="SaveLabel" style={{ marginTop: '-6px', padding: '0px 10px', color: 'grey' }}>
                        Save Email
                      </label>
                    </WrapperInput>


                    <WrapperInput paddingbutton >
                      <Button blue border boxShadowMasuk onClick={() => btnLogin()} disabled={loading ? true : false} >{loading ? 'Loading...' : 'Masuk'}</Button>
                    </WrapperInput>
                  </div>
                </Card>
              </div>

            </AnimatedView>
          </div>
        </div>
      </div>
    </div>
  )
}
