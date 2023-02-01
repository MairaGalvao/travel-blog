import * as Mui from '@material-ui/core'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'

import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HomePage from '../HomePage'

//todo - Create the pages components (Feed and Reading List)
//todo - and replace to HomePage on the object

const pages = [
  { pages: 'New post', link: <HomePage />, id: 1 },
  { pages: 'Feed', link: <HomePage />, id: 2 },
  { pages: 'My reading List', link: <HomePage />, id: 3 },
]
const settings = ['Profile', 'My Reading List', 'Logout']

const TopNavBarPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <>
      <MetaTags title="TopNvBar" description="TopNavBar page" />

      <Mui.AppBar position="static" style={{ backgroundColor: 'white' }}>
        <Mui.Container maxWidth="xl">
          <Mui.Toolbar disableGutters style={{ color: 'black' }}>
            <ConnectingAirportsIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />

            <Mui.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Mui.Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <Mui.MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Mui.Typography textAlign="center">
                      {page.pages}
                    </Mui.Typography>
                  </Mui.MenuItem>
                ))}
              </Mui.Menu>
            </Mui.Box>

            <Mui.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page.link}>
                  {' '}
                  <Mui.Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.pages}
                  </Mui.Button>
                </Link>
              ))}
            </Mui.Box>

            <Mui.Box sx={{ flexGrow: 0 }}>
              <Mui.Input placeholder="Search a trip"></Mui.Input>
              <SearchIcon style={{ paddingRight: '50px' }}></SearchIcon>
              <Mui.Tooltip
                title="Open settings"
                style={{ paddingLeft: '100px' }}
              >
                <Mui.IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Mui.Avatar alt="Maira Galvao" src="Maira Pic..." />
                </Mui.IconButton>
              </Mui.Tooltip>
              <Mui.Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Mui.MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Mui.Typography textAlign="center">
                      {setting}
                    </Mui.Typography>
                  </Mui.MenuItem>
                ))}
              </Mui.Menu>
            </Mui.Box>
          </Mui.Toolbar>
        </Mui.Container>
      </Mui.AppBar>
    </>
  )
}

export default TopNavBarPage
