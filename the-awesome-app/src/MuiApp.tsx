import React, { Suspense, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AppRoute, AppRoutes } from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Grid } from "@mui/material";
import LoadingComponent from "./components/LoadingComponent";
import ProtectedRoute from "./components/ProtectedRoute";

function ListMenuItems(props: { onClose: () => void }) {
  const navigate = useNavigate();

  function navigateTo(route: AppRoute) {
    navigate(route.path);
    props.onClose();
  }

  return (
    <List>
      {AppRoutes.filter(item => item.menu).map((item, index) => {
        const Icon = item.icon;
        return (
          <ListItem
            button
            key={item.id}
            onClick={() => {
              navigateTo(item);
            }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </List>
  );
}

function MuiApp() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Router>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Training
              </Typography>
              <Button color="success" variant="contained">
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: 240,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 240,
                boxSizing: "border-box",
              },
            }}
            variant="temporary"
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <Toolbar />
            <Divider />
            <ListMenuItems onClose={() => setOpenDrawer(false)} />
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
        <Grid container spacing={2}>
          <Grid item sx={{m: 2}} xs={12} md={6} lg={2}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              
                {AppRoutes.map((item, index) => {
                  const Component = item.component;

                  if(item.secure){
                    return (
                      <Route
                        key={item.id}
                        path={item.path}
                        element={<ProtectedRoute> <Component /> </ProtectedRoute>}
                      />
                    );
                  }
                  else{
                    return (
                      <Route
                        key={item.id}
                        path={item.path}
                        element={<Component />}
                      />
                    );
                  }
                  
                })}
             
            </Routes>
            </Suspense>
            <LoadingComponent/>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default MuiApp;
