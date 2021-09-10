import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { cookiesGet } from '../../config/Cookies'
import { decrypt } from '../../config/Enkripsi/Enkripsi'
import Horloge from '../horloge/Horloge'
import { SiderbarData, sidebarData2 } from './sidebardata'
import { MenuBars, NavMenu, Navbar2, ImgProfil, Strong, WrapImage, WrapperSideMenu, IconClose, TextOperator } from './styles'
import { SubMenu } from './submenu'



export const Navbar = () => {
  const [navbar, setNavbar] = useState(true)

  const btnNavbar = () => setNavbar(!navbar)
  return (
    <div className="fixed">
      <Navbar2>
        <div className="row">
          <div className="col">
            <MenuBars>
              <span className="btn" onClick={btnNavbar}>
                <FaBars style={{ color: 'black', fontSize: "20px" }} />
              </span>
            </MenuBars>
          </div>
        </div>
        <div>
          <Horloge />
        </div>

        <TextOperator >
          <h4>{decrypt(cookiesGet({ key: 'role' }))}</h4>
        </TextOperator>
      </Navbar2>

      <NavMenu active={navbar}>
        <IconClose div className="row">
          <div className="col">
            <span className="btn" onClick={btnNavbar}>
              <FaTimes style={{ color: 'white', fontSize: "20px" }} />
            </span>
          </div>
        </IconClose>



        <WrapImage className="row">
          <div className="col-md-12">
            <ImgProfil src={decrypt(cookiesGet({ key: 'photo_profil' }))} alt="profile" />
          </div>
          <div className="col-md-12">
            <Strong>{decrypt(cookiesGet({ key: 'name' }))}</Strong>
          </div>
        </WrapImage>

        <WrapperSideMenu>
          {
            decrypt(cookiesGet({ key: 'role' })) === 'OPERATOR' ?
              SiderbarData.map((item, index) => (
                <SubMenu key={index} item={item} />
              )) :
              decrypt(cookiesGet({ key: 'role' })) === 'ADMIN' ?
                sidebarData2.map((item, index) => (
                  <SubMenu key={index} item={item} />
                )) : null
          }
        </WrapperSideMenu>
      </NavMenu>
    </div>
  )
}
