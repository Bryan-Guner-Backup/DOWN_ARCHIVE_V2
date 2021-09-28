const sgMail = require('@sendgrid/mail');
const Users = require('../users/userModel');
const Families = require('../families/familiesModel');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function memberEdit(body) {
  console.log('BODY ', body);

  const getFamilyId = async () => {
    try {
      const family = await Families.findById(body.family_id);
      const familyId = family.user_id;
      return familyId;
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
      const user_id = await getFamilyId();
    try {
      const user = await Users.findById(user_id);
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  const sendEmail = async () => {
    const user = await getUser();
    console.log(user.email);
    //eslint-disable-next-line
    const msg = {
      to: `${user.email}`, // Change to your recipient
      from: `familypromiseteama@gmail.com`, // Change to your verified sender
      subject: `Hi ${user.first_name}! Your Family Member Information Has Been Updated.`,
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
  };
  sendEmail();
}

module.exports = memberEdit;
