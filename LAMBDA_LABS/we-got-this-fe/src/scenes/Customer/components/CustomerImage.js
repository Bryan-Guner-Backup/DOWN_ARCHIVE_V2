import React, {useState, useRef} from 'react';
import Firebase from '../../../config/firebase';

//Components
import {ButtonBase} from '@material-ui/core';
import SplashLoading from '../../../components/loading/SplashLoading';

//styles
import {makeStyles, styled} from '@material-ui/core/styles';
import {useStateValue} from '../../../state';

const storageRef = Firebase.getStorageRef();

const Image = styled(({img, ...other}) => <ButtonBase {...other} />)({
	width: 350,
	height: 350,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundImage: props =>
		props.img
			? `url(${props.img})`
			: 'url(https://www.chalktalksports.com/on/demandware.static/Sites-ChalkTalkSports-Site/-/default/dw552617e4/images/Placeholder.jpg)',

	'& p': {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		color: '#fff',
		visibility: 'hidden',
		opacity: 0,
	},

	'&:hover p': {
		opacity: 1,
		visibility: 'visible',
	},
});
const useStyles = makeStyles(theme => ({
	mobileImage: {
		width: 350,
		height: 350,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.down('xs')]: {
			width: 195,
			height: 250,
		},
	},
}));

/*
    Displays a specific customer's headshot image.

    Example Props:
        "img": "http://example.com/"
*/
const CustomerImage = ({img}) => {
	const [{customers}, dispatch] = useStateValue();
	const [loading, setLoading] = useState(false);
	const [uploadedImg, setUploadedImg] = useState(null);
	const classes = useStyles();
	const fileInput = useRef(null);

	const handleFileChange = e => {
		let uploadTask = storageRef
			.child(`customer_imgs/${customers.currentCustomer.docId}`)
			.put(e.target.files[0]);

		uploadTask.on(
			'state_changed',
			snapshot => {
				//progress
				setLoading(true);
			},
			error => {
				//error handler
				console.log(error);
			},
			() => {
				uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
					setLoading(false);
					setUploadedImg(downloadURL);
					console.log('The download URL is: ', downloadURL);
				});
			},
		);
	};

	return (
		<>
			{loading ? (
				<div style={{width: '128px', height: '128px'}}>
					<SplashLoading />
				</div>
			) : (
				<>
					<input
						type='file'
						ref={fileInput}
						id='imgUpload'
						onChange={e => handleFileChange(e)}
						style={{display: 'none'}}
					/>
					<Image
						className={classes.mobileImage}
						img={img || uploadedImg}
						onClick={() => fileInput.current.click()}
					>
						<p>Click to change</p>
					</Image>
				</>
			)}
		</>
	);
};

export default CustomerImage;
