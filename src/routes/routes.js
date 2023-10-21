import React from 'react'
import { isDOMComponent } from 'react-dom/test-utils'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))
const Salones = React.lazy(()=> import('../views/pages/Salones'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  {path: '/salones', name:'Salones', element:Salones},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
