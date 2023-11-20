import React from 'react'
import { isDOMComponent } from 'react-dom/test-utils'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))
const Personajes = React.lazy(()=> import('../views/pages/Personajes'))
const Planetas = React.lazy(() => import('../views/pages/Planetas'))
const Peliculas = React.lazy(() => import('../views/pages/Peliculas'))
const Especies = React.lazy(()=> import('../views/pages/Especies'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  {path: '/personajes', name:'Personajes', element:Personajes},
  {path:'/planetas', name:'Planetas', element:Planetas},
  {path:'/peliculas', name:'Peliculas', element:Peliculas},
  {path:'/especies', name:'Especies', element:Especies},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
