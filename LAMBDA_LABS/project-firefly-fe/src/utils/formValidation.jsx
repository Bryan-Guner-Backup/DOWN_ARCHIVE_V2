// check to see if email is valid
export const validEmailRegex = RegExp(
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const validateForm = errors => {
	let valid = true;
	// check to see if any errors exist, otherwise form is invalid
	Object.values(errors).forEach(error => {
		error.length > 0 && (valid = false);
	});
	return valid;
};