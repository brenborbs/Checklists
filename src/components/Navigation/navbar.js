// import React, { Component } from 'react'
// import { Menu, Container } from 'semantic-ui-react'
// import { NavLink } from 'react-router-dom';

// class Header extends Component {
  

//   render() {
    

//     return (
      
//         <Menu inverted fixed="top" >
//           <Container>
//             <Menu.Item
//             as={NavLink}
//             to='/' 
//             name='checklist' 
//             />
//             <Menu.Item
//               as={NavLink}
//               to='/budget'
//               name='budget'
//             />
//           </Container>  
//         </Menu>
        
//     )
//   }
// }

// export default Header;
import React, { Component } from 'react';

// components
import Header from './header';
import Menu from './menu';

class Navbar extends Component {
  
  state = { 
    showMenu: true,
  };

  toggleMenu = () => {
    this.setState({ 
      showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <nav className="nav">
        <Header toggleMenu={this.toggleMenu}/>
        <Menu showMenu={this.state.showMenu}/>
      </nav>
    );
  }
}

export default Navbar;

