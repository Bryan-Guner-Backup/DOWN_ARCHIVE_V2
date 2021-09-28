module.exports = {
  validateUser
};

function validateUser(user) {
  let errors = [];

  if (!user.email || user.email.length < 5) {
    errors.push("Please include a valid email");
  }

  if (!user.password || user.password.length < 6) {
    errors.push("Please include a password with at least 6 characters");
  }

  if (!user.firstName) {
    errors.push("Please include your first name");
  }

  if (!user.lastName) {
    errors.push("Please include your last name");
  }

  if (!user.role) {
    errors.push("Please include your role; Manager or Renter");
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
