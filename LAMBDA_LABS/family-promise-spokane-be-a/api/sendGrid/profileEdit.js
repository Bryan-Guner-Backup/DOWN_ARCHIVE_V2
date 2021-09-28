const sgMail = require('@sendgrid/mail');
const Users = require('../users/userModel');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function profileEdit(body) {
  console.log('BODY ', body);
  const getUser = async () => {
    try {
        const user = await Users.findById(body.user_id);
        return user
    } catch (err) {
        console.log(err)
    }
  }

  const sendEmail = async () => {
      const user = await getUser();
      console.log(user.email);
      //eslint-disable-next-line
      const msg = {
        to: `${user.email}`, // Change to your recipient
        from: `familypromiseteama@gmail.com`, // Change to your verified sender
        subject: `Hi ${user.first_name}! Your Profile Information Has Been Updated.`,
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id enim ea maxime omnis facere at dolore modi laboriosam sint adipisci?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore mollitia impedit at suscipit sequi dolorum numquam, adipisci aspernatur dolores accusamus.`,
        html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
      };
      sgMail
      .send(msg)
      .then((res) => {
        console.log(res);
        console.log('Email Sent');
      })
      .catch((err) => {
        console.log('SEND GRID ERROR   ', err);
      });
  }
  sendEmail();
}

module.exports = profileEdit;