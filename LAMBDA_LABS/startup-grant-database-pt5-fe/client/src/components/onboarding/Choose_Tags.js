import React, { useState, useEffect } from "react";
import { Paper, makeStyles, CircularProgress, Button } from "@material-ui/core";
import SingleTag from "../onboarding/SingleTag";
import "../onboarding/onboarding.css";

import { Link } from "react-router-dom";
import axios from "axios";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

//Hooks
const Choose_Tags = props => {
  const classes = useStyles();
  const [companyTags, setCompanyTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use Effect to load initial data for the tags

  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Categories
      const categoryResult = await axios(
        `${process.env.REACT_APP_API}/api/categories`
      );
      //Prevent user from continue onboarding if DB is not returning tags
      // console.log('Array', companyTags.count == undefined);
      if (categoryResult.data === undefined) {
        setIsLoading(true);
      } else {
        setCompanyTags(categoryResult.data);
        setIsLoading(false);
        // props.history.push("/grantordashboard");
      }
      console.log(categoryResult);
    };
    fetchAll();
  }, []);

  //Handle selected tags
  const handleSelected = chipToSelect => id => {
    setCompanyTags(founderTags =>
      founderTags.map(chip => {
        if (chip.id === chipToSelect) {
          let style = chip.style === "secondary" ? "" : "secondary";
          return {
            ...chip,
            selected: !chip,
            style
          };
        }
        return chip;
      })
    );
  };

  const handleSubmit = () => {
    const result = [...companyTags.filter(chip => chip.style === "secondary")];
    const userId = localStorage.getItem("id");
    result.map(selection => {
      const data = { user_id: userId, category_id: selection.id };
      axios
        .post(`${process.env.REACT_APP_API}/api/users/cat`, data)
        .then(res => {
          console.log("Success!", res);
        })
        .catch(err => {
          //Invalid token or connection issue
          console.log("Error", err);
        });
    });
  };

  return (
    <Paper className="paper">
      <h1>Choose Tags that apply to your founders</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        companyTags.map(data => {
          return (
            <SingleTag
              key={data.id}
              {...data}
              label={data.category_name}
              data={data}
              classes={classes}
              handleSelected={() => handleSelected(data.id)}
            />
          );
        })
      )}
      <Link to="/category-tags">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Link>
    </Paper>
  );
};

export default Choose_Tags;
