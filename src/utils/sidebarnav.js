import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cibGhost,
  cilPuzzle,
  cilDoor,
  cilUser
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavItem,
    name: 'Salones',
    to: '/salones',
    icon: <CIcon icon={cibGhost} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Puertas',
    to: '/puertas',
    icon: <CIcon icon={cilDoor} customClassName="nav-icon" />,
  },{
    component: CNavItem,
    name: 'Usuarios',
    to:'/usuarios',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  },
  {
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
  },
]

export default sidebarnav
