import React, { Component } from 'react';
import {
        
        
        Navbar,
///NavItem,
        NavbarBrand,
        //Col,
        
      
      } from 'reactstrap';
      class MenuComponent extends Component {
        constructor(){
            super();
            this.state = {menuItems:["Item1","Item2","Item3","Item4"]};
        }
         
        render() {
          return (
            <div className="col-md navbar-nav text-right" > 
                
                    {this.state.menuItems.map((menuItem,i)=>{
                        return <li className="nav-item "  key={menuItem}><a>{menuItem}</a></li>
                    })}
               
          </div>
          );
        }
      }

class HeaderComponent extends Component {
  
    render() {
      return (
        <header> 
            
            <Navbar className=" navbar-light bg-light">
                <NavbarBrand className="navbar-brand " href="#" > 
                    Logotype
                </NavbarBrand >
            
                <MenuComponent />
                
                <button type="button" className="btn btn-outline-dark">Loged</button>
            </Navbar>
      </header>
      );
    }
  }
  
  export default HeaderComponent;