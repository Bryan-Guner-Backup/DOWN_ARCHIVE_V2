const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function profileCreation(body) {
  console.log('INFOMORATION NEEDED IN EMAIL', body);

  const msg = {
    to: `${body.email}`, // Change to your recipient
    from: `familypromiseteama@gmail.com`, // Change to your verified sender
    subject: `Hi ${body.first_name}! A supervisor has create a family promise account for you.`,
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

module.exports = profileCreation;
