import React, {useState, useEffect} from 'react';
import {useStateValue} from '../../state';
import moment from 'moment';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import {useTheme, makeStyles, styled} from '@material-ui/core/styles';
import {Tab, Tabs, Button, Grid, Box} from '@material-ui/core';

import DialogWrapper from '../../components/dialogs/DialogWrapper';
import PhotosPanel from './components/PhotosPanel';
import NotesPanel from './components/NotesPanel';
import Image from './components/Image';
import NewPhoto from './components/NewPhoto';
import JobCard from './components/JobCard';
import ChecklistImage from './components/ChecklistImage';
import StopWatch from './components/StopWatch';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '0 auto',
		width: '90%',
	},
	tabs: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		width: '100%',
	},
	timer: {
		margin: '10px auto',
		fontSize: '40px',
		color: '#2678C0',
	},
}));

const teams = techsArray => {
	let team = techsArray.reduce((acc, curr) => {
		return acc + curr.name + ' & ';
	}, 'Serviced By: ');

	//Remove the last & because I'm lazy
	return team.slice(0, -2);
};

const AddPhoto = () => {
	return (
		<DialogWrapper
			trigger={click => (
				<Button
					variant='contained'
					color='primary'
					size='small'
					fullWidth
					onClick={() => click()}
				>
					Add Photo
				</Button>
			)}
			dialogContent={close => <NewPhoto handleClose={close} />}
			title='New Photo'
			size='xs'
			showTitle={false}
			noPadding={true}
		/>
	);
};

const AddNote = () => {
	return (
		<DialogWrapper
			trigger={click => (
				<Button
					variant='contained'
					color='primary'
					size='small'
					fullWidth
					onClick={() => click()}
				>
					Add Note
				</Button>
			)}
			dialogContent={close => <NewPhoto handleClose={close} />}
			title='New Note'
			size='xs'
		/>
	);
};

const Job = ({match, location, history}) => {
	const [value, setValue] = useState(0);
	const [{customers}, dispatch] = useStateValue();
	const [job, setJob] = useState(null);
	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect(() => {
		let index = customers.customerJobs.findIndex(job => {
			return (
				//Checks for both to handle select from the customer view
				// and from the calendar
				job.docId == location.state || job.docId == match.params.job_id
			);
		});
		let job = customers.customerJobs[index];
		setJob(job);
	}, [customers.customerJobs, location.state, match.params.job_id]);

	const handleChange = (e, newVal) => {
		setValue(newVal);
	};

	return (
		<Grid container item className={classes.root} direction='column'>
			{!job ? (
				<h2>Loading...</h2>
			) : (
				// <>
				// 	{mobile ? (
				// 		<Grid item>
				// 			<IconButton onClick={() => history.goBack()}>
				// 				<ArrowBackIcon />
				// 				{customers.currentCustomer.name}
				// 			</IconButton>
				// 		</Grid>
				// 	) : (
				// 		<Grid item>
				// 			<IconButton
				// 				onClick={() =>
				// 					history.replace(
				// 						`/customers/${match.params.customer_id}`,
				// 					)
				// 				}
				// 			>
				// 				<CloseIcon />
				// 			</IconButton>
				// 		</Grid>
				// 	)}
				<Grid item>
					<Grid item>
						<JobCard job={job} />
					</Grid>
					<Grid container className={classes.tabs}>
						<Grid item>
							<Tabs
								value={value}
								onChange={handleChange}
								indicatorColor='primary'
								textColor='primary'
								scrollButtons='off'
							></Tabs>
						</Grid>
						<Grid item style={{margin: 'auto', width: '90%'}}>
							{value == 0 ? <AddPhoto /> : <AddNote />}
						</Grid>
					</Grid>
					<PhotosPanel value={value} index={0} job={job} />
					{/* <NotesPanel value={value} index={1} job={job} /> */}
				</Grid>
				// </>
			)}
		</Grid>
	);
};

export default Job;
