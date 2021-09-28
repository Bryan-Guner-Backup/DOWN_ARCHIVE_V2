import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  userPicture: {
    width: "100%",
  },
  userEducation: {
    marginTop: "5%",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
  },
  educationText: {
    fontSize: "0.875rem",
    fontFamily: "Roboto, Helvetica, Arial, sansSerif",
    fonWeight: "500",
    lineHeight: "1.57",
    letterSpacing: "0.00714em",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  bodyText: {
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica , Arial, sansSerif",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  },
  userName: {
    width: "95%",
    textAlign: "center",
    fontSize: "0.850rem",
    fontFamily: "Roboto, Helvetica, Arial, sansSerif",
    fontWeight: "500",
    lineHeight: "1.57",
    letterSpacing: "0.00714em",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
      width: "90%",
    },
  },
  userServices: {
    width: "90%",
  },
  writerwebsite: {
    textAlign: "center",
  },
  rootButton: {
    minWidth: "0",
    marginLeft: "16%",
    marginTop: "5%",
    [theme.breakpoints.up("md")]: {
      marginTop: "2.5%",
      marginLeft: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "2.5%",
      marginBottom: "2.5%",
      marginLeft: "30%",
      width: "30%",
      height: "auto",
    },
  },
  rootPaper: {
    width: "80%",
    height: "auto",
    marginTop: "30%",
    marginBottom: "20%",
    marginLeft: "10%",
    display: "grid",
    gridTemplateColumns: "1.3fr 2.8fr",
    gridTemplateRows: "0.6fr 0.8fr",
    gap: "5px 5px",
    [theme.breakpoints.up("md")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "10%",
    },
  },
  labelButton: {
    minWidth: "0",
    width: "50px",
    padding: "0",
    fontSize: "0.5rem",
    textAlign: "center",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.75rem",
      width: "150px",
    },
  },
  finalGrid: {
    width: "100%",
    marginTop: "15%",
    marginBottom: "10%",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    gridRowStart: "4",
    gridRowEnd: "4",
    [theme.breakpoints.up("md")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "10%",
      fontSize: "1.6rem",
    },
  },
  rootIcon: {
    margin: "20%",
    width: "2em",
    height: "2em",
    marginLeft: "20%",
    [theme.breakpoints.up("md")]: {
      marginLeft: "30%",
      width: "3em",
      height: "3em",
      marginTop: "12%",
      marginBottom: "2.5%",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "20.5%",
      width: "5em",
      height: "5em",
      marginTop: "12%",
      marginBottom: "2.5%",
    },
  },
  rootLink: {
    marginLeft: "3%",
    padding: "0%",
    fontSize: "0.8rem",
    textAlign: "center",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      padding: "0%",
      marginLeft: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "25%",
      padding: "0%",
      fontSize: "1rem",
    },
  },
  leftpanel: {
    padding: "25px 0",
    textAlign: "center",
    "& div": {
      marginBottom: "5%"
    }
  },
  profile: {
    margin: "1rem auto",
    width: "65%",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.9fr",
    gridTemplateRows: "1fr",
    gap: "1px 75px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr",
      gridTemplateRows: "1fr",
      width: "85%"
    }
  },
  profilePaper: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    minHeight: "65%",
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      padding: "2%"
    },
    "& p": {
      lineHeight: "1.4rem",
      margin: "0",
      padding: "1%",
      [theme.breakpoints.down("xs")]: {
        margin: "0",
        padding: "3%",
      },
      [theme.breakpoints.up("xs")]: {
        textAlign: "justify",
      }
    },
    "& h4": {
      margin: "1% 2% 0",
      [theme.breakpoints.down("xs")]: {
        margin: "5% 0 0"
      }
    },
  },
  bottomGrid: {
    width: "65%",
    margin: "0px auto",
    marginTop: "-40px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr",
      gridTemplateRows: "1fr",
      width: "85%",
    }
  }
}));
