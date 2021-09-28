import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  // pageContainer: {
  //   [theme.breakpoints.down("md")]: {
  //     backgroundColor: "black"
  //   }
  // },
  anyContainer: {
    marginBottom: "3%",
    justifyContent: "center",
    border: "3",
    borderColor: "red",
  },
  banner: {
    display: "flex",
    flexFlow: "row no wrap",
    justifyContent: "center",
    margin: "3rem auto",
    width: "48%",
    maxHeight: "258px",
    padding: "1.5%",
    borderRadius: 16,
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      justifyContent: "space evenly",
    },
  },
  bannerImg: {
    width: "20%",
    height: "222px",
  },
  img: {
    width: "150%",
    height: "100%",
  },
  bannerText: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    height: "inherit",
    paddingRight: "8rem",
  },
  cardsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    width: "51%",
    margin: "auto",
    marginBottom: "2%",
    boxSizing: "border-box",
    padding: "1.5%",
    backgroundColor: "white",
    borderRadius: 16,
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  cardDetails: {
    padding: "3.5%",
  },
  subtitle: {
    width: "100%",
  },
  stepsContainer: {
    width: "51%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space between",
    margin: "70px auto",
    borderRadius: 16,
    backgroundColor: "white",
  },
  stepsImgContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "35%",
    height: "inherit",
    margin: "41px auto",
    paddingBottom: "11px",
  },
  stepsImg: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "black"
      display: "none",
    },
  },
  listSteps: {
    paddingLeft: "6%",
  },
  step: {
    width: "92%",
  },
  signupLink: {
    textDecoration: "none",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "22px 73px",
    marginBottom: "20px",
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    textDecoration: "none",
    marginLeft: "27%",
    width: "35%",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "18px 22px",
    marginBottom: "5%",
  },
  // searchLinkContainer: {
  //   display: "flex",
  //   flexFlow: "column wrap",
  //   justifyContent: "center",
  //   textDecoration: "none",
  //   // backgroundColor: "#f0fdfd",
  //   backgroundColor: "red",
  // },
  // searchLink: {
  //   // backgroundColor: "#00A8A8",
  //   backgroundColor: "green",
  //   color: "white",
  //   textDecorationLine: "underline",
  //   padding: "8%",
  // },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Box className={classes.banner}>
        {/* IMAGE BELOW */}
        <Box className={classes.bannerImg}>
          <img
            alt="logo"
            src="/images/logo/grantlifyLogo.png"
            className={classes.img}
          ></img>
        </Box>
        {/* IMAGE ABOVE */}
        <Box className={classes.bannerText}>
          <h1>Welcome to Grantlify!</h1>
          <h3>We know how hard it is to get help for your startup.</h3>
          <h3>We're here to help.</h3>
          <Link to="/search" className={classes.button}>
            Start Searching
          </Link>
        </Box>
      </Box>

      <Box className={classes.cardsContainer && classes.anyContainer}>
        <Box className={classes.card}>
          <h1>Our Goal</h1>
          <h3>
            Hundreds and thousands of dollars worth of unused grant money is
            thrown away annually. Our Goal is to take all of the grants that are
            somehow overlooked and put them in one central location... for you.
          </h3>
        </Box>
        <div>
          <Box className={classes.stepsContainer}>
            <h1 className={classes.subtitle}>How It Works</h1>

            {/* <Box className={classes.stepsImgContainer}>
              <img
                alt="steps"
                src="/images/logo/grantlifySteps.png"
                className={classes.stepsImg}
              />
            </Box> */}

            <Box className={classes.listSteps}>
              <Box className={classes.step}>
                <h2>1. Create your account</h2>
              </Box>
              <Box className={classes.step}>
                <h2>
                  2. Complete short survey about your startup company and its
                  founders
                </h2>
              </Box>
              <Box className={classes.step}>
                <h2>
                  3. Receive personalized recommendations and apply infinitely
                  to grants
                </h2>
              </Box>
              <Box className={classes.step}>
                <h2>4. Get funded!</h2>
              </Box>
            </Box>
          </Box>
        </div>
        <Box>
          <Link to="/welcome" className={classes.signupLink}>
            Sign Up!
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
