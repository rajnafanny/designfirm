import React from 'react'
import Logo from '../Assets/logo.svg'

import { HiOutlineBars3 } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuOptions = [
    { text: "Főoldal", id: "home" },
    { text: "Bemutatkozás", id: "about" },
    { text: "Szolgáltatások", id: "services" },
    { text: "Referenciák", id: "portfolio" },
    { text: "Kapcsolat", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="designfirm logo" />
      </div>

      <div className="navbar-links-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Főoldal</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>Bemutatkozás</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('services'); }}>Szolgáltatások</a>
        <a href="#portfolio" onClick={(e) => { e.preventDefault(); handleScroll('portfolio'); }}>Referenciák</a>
        <button className="primary-button">Ajánlatkérés</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3
          onClick={() => setOpenMenu(true)}
          className="menu-icon"
        />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleScroll(item.id);
                    setOpenMenu(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
