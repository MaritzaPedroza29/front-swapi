import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilMovie,
  cilPuzzle,
  cilPaw,
  cilUser,
  cilCircle
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavItem,
    name: 'Personajes',
    to: '/personajes',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Planetas',
    to: '/planetas',
    icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
  },{
    component: CNavItem,
    name: 'Peliculas',
    to:'/peliculas',
    icon: <CIcon icon={cilMovie} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Especies',
    to:'/especies',
    icon: <CIcon icon={cilPaw} customClassName="nav-icon" />
  },
  /*{
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },*/
]

export default sidebarnav
