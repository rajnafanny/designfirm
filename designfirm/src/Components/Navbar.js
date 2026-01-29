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
    { text: "Főoldal" },
    { text: "Bemutatkozás" },
    { text: "Szolgáltatások" },
    { text: "Referenciák" },
    { text: "Kapcsolat" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="designfirm logo" />
      </div>

      <div className="navbar-links-container">
        <a href="">Főoldal</a>
        <a href="">Bemutatkozás</a>
        <a href="">Szolgáltatások</a>
        <a href="">Referenciák</a>
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
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
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
