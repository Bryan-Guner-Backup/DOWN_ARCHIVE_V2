import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
  },
  logo: {
    height: theme.spacing(7),
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    padding: theme.spacing(0, 0),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    height: theme.spacing(4),
    display: 'flex',
    alignSelf: 'center',
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    paddingLeft: theme.spacing(5),
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    display: 'flex',
    alignSelf: 'center',
  },
  menuFocus: {
    transition: theme.transitions.easing.easeInOut,
    backgroundColor: fade(theme.palette.primary.dark, 0.5),
  },
  regField: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default useStyles