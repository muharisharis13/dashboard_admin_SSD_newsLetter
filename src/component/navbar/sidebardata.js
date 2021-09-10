import React from 'react'
import { FaBell, FaCaretDown, FaCaretUp, FaDoorOpen, FaEdit, FaHome, FaRegAddressCard, FaSignInAlt, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { cookiesGet } from '../../config/Cookies'





export const SiderbarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaHome />
  },
  {
    title: 'PostBerita',
    path: '/PushNotification',
    icon: <FaBell />
  },
  {
    title: 'EditBerita',
    path: '/EditNotification',
    icon: <FaEdit />
  },


  {
    title: 'LogOut',
    path: '/Login',
    icon: <FaDoorOpen />
  },
];


export const sidebarData2 = [
  {
    title: 'Statistics',
    path: '/',
    icon: <FaHome />
  },
  {
    title: 'Daftar User',
    path: '#',
    icon: <FaUserAlt />,
    iconClosed: <FaCaretDown />,
    iconOpened: <FaCaretUp />,
    subNav: [

      {
        title: 'Data User',
        path: '/DaftarUser',
        icon: ''
      },

    ]
  },
  {
    title: 'Request User',
    path: '/RequestUser',
    icon: <FaUserCircle />
  },
  {
    title: 'EditOperator',
    path: '/EditOperator',
    icon: <FaEdit />
  },
  {
    title: 'AddOperator',
    path: '/EditOperators/Add',
    icon: <FaRegAddressCard />
  },
  {
    title: 'LogOut',
    path: '/Login',
    icon: <FaDoorOpen />
  },
]

