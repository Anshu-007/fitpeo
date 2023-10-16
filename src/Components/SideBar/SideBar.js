import React, { useState } from 'react'
import './sideBar.css'
import '../../App.css'
import dashboard from '../Assets/Dashboard.svg'
import customers from '../Assets/customers.svg'
import income from '../Assets/income.svg'
import product from '../Assets/product.svg'
import promote from '../Assets/promote.svg'
import help from '../Assets/help.svg'
import hexagon from '../Assets/hexagun.svg'


const SideBar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState("Dashboard");
  const [sideBarOpen, setSideBarOpen] = useState(window.innerWidth < 860 ? false : true);

  const submenu = [{ name: "Dashboard", image: dashboard }, { name: "Customers", image: customers }, { name: "Product", image: product }, { name: "Income", image: income }, { name: "Promote", image: promote }, { name: "Help", image: help }]

  function handleSubMenu(e, submenuName) {
    setActiveSubMenu(submenuName);
  }
  

  window.onresize = function() {
    const resolution = window.innerWidth;
    console.log(resolution)
    if(resolution < 860){
      setSideBarOpen(false);
    }else{
      setSideBarOpen(true);
    }
  };

  return (
    <div className='sidebar-wrapper'>
      <div className='logo-submenu-wrapper'>
        <div className='logo-wrapper'>
          <div className='logo-image'>
            <img src={hexagon} alt="" />
          </div>
          {sideBarOpen ? <div className='logo-name'>
            Dashboard
          </div> : null}
        </div>
        <div className='submenu'>
          {submenu.map((menu) => {
            return(
                    <div onClick={(e) => handleSubMenu(e, menu.name)} className={activeSubMenu === menu.name ? 'active-bar-element' : 'submenu-component'}>
                      <div className={activeSubMenu === menu.name ? "submenu-image-active" : 'submenu-image'}>
                        <img src={menu.image} alt="" />
                      </div>
                      {sideBarOpen===true?<><div className='submenu-text'>{menu.name}</div>
                      {activeSubMenu === menu.name ? null : <div className='arrow'>❯</div>}</>:null}
                    </div>
                  );

          })}
        </div>
      </div>
      <div className='admin'>
        <div className='admin-wrapper'>
          <div className='admin-img'></div>
          {sideBarOpen ? <div className='admin-details'>
            <div className='admin-name'>Evano</div>
            <div className='admin-position'>Project Manager</div>
          </div> : null}
        </div>
        {sideBarOpen ? <div className='arrow'>❯</div> : null}
      </div>
    </div>
  )
};

export default SideBar