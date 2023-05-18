import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface Props {
  switchMode: () => void;
}

export default function Header({ switchMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">React Store</Typography>
        <Switch onClick={switchMode} />
      </Toolbar>
    </AppBar>
  );
}
