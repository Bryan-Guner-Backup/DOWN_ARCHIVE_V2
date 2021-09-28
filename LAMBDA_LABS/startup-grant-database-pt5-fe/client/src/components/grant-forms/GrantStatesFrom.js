import React,{useState, useEffect} from 'react'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const GrantStatesForm = props => {
    const grantId = localStorage.getItem('grant_id')
    const [states, setStates] = useState([]);
    const [form, setForm] = useState({
        grant_id: grantId,
        state_id: null

       
      });
      const classes = useStyles();
    
    useEffect(() => {
        const fetchAll = async () => {
          const fetchStates = await axios(
            `${process.env.REACT_APP_API}/api/states`
          );
    
            setStates(fetchStates.data);
          }
        fetchAll();
      }, []);

      const handleChange = name => event => {
        setForm({ ...form, [name]: event.target.value });
      };

      onsubmit = e => {
        e.preventDefault();
        axios
          .post(`${process.env.REACT_APP_API}/api/grants/regions`, form)
          .then(res => {
            console.log(res);
            props.history.push('grant-cats')
          })
          .catch(err => {
            console.log(err);
          });
      };

      

      console.log('states',states)
      if(states.length<1){
          return <p>... loading</p>
      }else{

      
return(
    
    <div>
    <FormLabel>Please select the state your grant is for </FormLabel>
        <Select
    value={form.state_id}
    onChange={handleChange('state_id')}
    name="category"
    placeholder="Select the state your grant is for "
    inputProps={{
      id: 'categories-required'
    }}
  >
    {states &&
      states.map(({id, state_name}) => {
        return (
          <MenuItem key={id} value={id} >
            {state_name}
          </MenuItem>
        );
      })}
  </Select>
  
  <div className={classes.root} >
        <Button onClick = {onsubmit} variant="contained" color="primary">
          Submit
        </Button>
    </div>
    
    </div>
)
    }
   
    }

export default GrantStatesForm