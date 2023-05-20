import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedinMenu";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface Props {
  switchMode: () => void;
}

const navStyle = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({ switchMode }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems={"center"}>
          <Typography variant="h6" component={NavLink} to={"/"} sx={navStyle}>
            React Store
          </Typography>
          <Switch onClick={switchMode} />
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path} sx={navStyle}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box display="flex" alignItems={"center"}>
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={navStyle}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
