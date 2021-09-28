import axios from 'axios';

export const axiosWithAuth = uid => {
	// console.log(uid);
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			uid: `${uid}`
		}
	});
};
