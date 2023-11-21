import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CImage } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import  logoNegative from '../assets/images/logo.png'
import { sygnet } from '../assets/brand/sygnet'
import { AppSidebarNav } from './sidebar/AppSidebarNav'


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const customStyles = {
    // Aquí puedes definir tus estilos
    backgroundColor: '#2979FF',
    padding: '10px',
    // Agrega más estilos según tus necesidades
  };
  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-none d-md-flex" style={customStyles} to="/">
        <CImage className="sidebar-brand-full" src={logoNegative} height={42} width={320}/>
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav className='mio-sidebar'>
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
