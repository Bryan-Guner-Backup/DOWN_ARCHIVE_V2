import React, { useState, useEffect } from 'react';
import { Paper, makeStyles, CircularProgress, Button } from '@material-ui/core';
import SingleTag from '../onboarding/SingleTag';
import '../onboarding/onboarding.css';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

//Hook to get tags from API call
const GrantElis = props => {
  const classes = useStyles();
  const [elegibilityTags, setElegibilityTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);

  // Use Effect to load initial data for the tags
  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Elegibility
      const elegibilityResult = await axios(
        `${process.env.REACT_APP_API}/api/elegibility`
      );

        setElegibilityTags(elegibilityResult.data);
        setIsLoading(false);
      }
    fetchAll();
  }, []);

  const handleCompanySelectedtag = chipToSelect => () => {
    setElegibilityTags(companyTags =>
      elegibilityTags.map(chip => {
        if (chip.id === chipToSelect) {
          let style = chip.style === 'secondary' ? '' : 'secondary';
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

  const handleSubmit = props => {
    setIsSubmited(true);
    const result = [
      ...elegibilityTags.filter(chip => chip.style === 'secondary')
    ];
    const grant_id = localStorage.getItem('grant_id');
    result.map(selection => {
      const data = { grants_id: grant_id, elegibility_id: selection.id };
      axios
        .post(`${process.env.REACT_APP_API}/api/grants/eli`, data)
        .then(res => {
          console.log('Success!', res);
          setIsSubmited(true);
          props.history.push('/grantordashboard');
        })
        .catch(err => {
          //Invalid token or connection issue
          console.log('Error', err);
        });
    });
  };

  return (
    <Paper className="paper">
      {isSubmited ? (
        <div>
          <CircularProgress />
          <h1>Submitting</h1>
        </div>
      ) : (
        <div>
          <h1>Choose Tags that apply to your Grant</h1>
          {isLoading ? (
            <CircularProgress />
          ) : (
            elegibilityTags.map(data => {
              return (
                <SingleTag
                  key={data.id}
                  {...data}
                  label={data.elegibility_name}
                  data={data}
                  classes={classes}
                  handleSelected={handleCompanySelectedtag}
                />
              );
            })
          )}
          <Button
            type="button"
            onClick={() => handleSubmit(props)}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default GrantElis;