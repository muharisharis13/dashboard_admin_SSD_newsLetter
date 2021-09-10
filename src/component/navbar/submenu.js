import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { cookiesRemove } from '../../config/Cookies'

const SideBarLink = styled(NavLink)`
display:flex;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#707070')};
justify-content: space-between;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration: none;
font-size:18px;
position:relative;
transition:450ms;
font-weight:650;
left:0%;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#FEC8C8' : 'transparent')};


&:hover {
  background : #FEC8C8;
  cursor:pointer;
  text-decoration: none;
  color:white;
  
}
`


const DropDwonLink = styled(NavLink)`
height: ${({ subnav }) => (subnav ? '50px' : '0px')};
padding-left:2.4rem;
display:flex;
align-items: center;
text-decoration:none;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#707070')};
font-size:18px;
transition:340ms;
font-weight:500;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#FEC8C8' : '#fff')};
transition: height 0.5s;
transition-timing-function: ease;


&:hover {
  background : #FEC8C8;
  cursor:pointer;
  text-decoration: none;
  color:white;
  
}
`

const ListDropdown = styled.div`
display:${({ subnav }) => (subnav ? 'block' : 'none')}
`

export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)
  const [selected, setSelected] = useState(false)

  const btnShowSubnav = () => {
    setSubnav(!subnav)
    setSelected(!selected)
  }

  const btnLogOut = () => {
    cookiesRemove({ key: 'token' })
    cookiesRemove({ key: 'role' })
    cookiesRemove({ key: 'name' })
    cookiesRemove({ key: 'photo_profil' })
    window.location.href = '/Login'
  }



  return (
    <>
      <SideBarLink itemPath={item.path} to={item.path} onClick={item.path === '/Login' ? btnLogOut : () => { item.subNav && btnShowSubnav(); }}>
        <div>
          {item.icon} &nbsp; {item.title}
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.iconClosed}
        </div>
      </SideBarLink>
      {
        item.subNav !== undefined ? item.subNav.map((item, index) => (
          <DropDwonLink subnav={subnav} itemPath={item.path} to={item.path} key={index}>
            <ListDropdown subnav={subnav}>
              {item.icon} &nbsp; {item.title}
            </ListDropdown>
          </DropDwonLink>
        ))

          : null
      }
    </>
  )
}
