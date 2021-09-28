export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const modalInstructions = {
  childDash:
    'Welcome to Story Squad. Accept your mission to start an adventure!',
  childDash2:
    'Welcome back! Go ahead and click the "Join Squad" to see if you have been assigned with a partner yet.',
  childDash3:
    'Welcome back! Voting time is happening right now. Go ahead and vote for your favorite story submissions!',
  missionControl1:
    'Welcome to Story Squad! To begin your journey click the "READ" icon to start the story! Are you ready to accept the challenge?',
  missionControl2:
    "Great job! It's time to get creative. Click on one of the prompts.",
  writingSub:
    'Once you finish writing your story, please take a picture of all your pages and upload them.  Tips: \nTake one photo per page. Find good Lighting and check your photo turns out clear. Make sure each page is straight and not cropped. After all pages are uploaded, click submit.',
  drawingSub:
    'Once you finish your drawing, please take a picture of all your pages and upload them.  Tips: Take one photo per page. Find good Lighting and check your photo turns out clear. Make sure each page is straight and not cropped. After all pages are uploaded, click submit.',
  submissionComplete: 'Your Story has been submitted',
  missionControl3:
    'Both Submissions are complete. Excelent job! Come back later this week to see your new Squad.',
  sharePoints:
    "Ready Squad! Read your partner's story, view their drawing and share some points. Accept to Continue.",
};

export const modalButtonText = {
  accept: 'I Accept!!',
  ok: 'OK',
  nextPage: 'Next Page',
};

export const getMissionControlText = (hasRead, hasDrawn, hasWritten) => {
  if (!hasRead) {
    return modalInstructions.missionControl1;
  } else if (hasRead && (!hasDrawn || !hasWritten)) {
    return modalInstructions.missionControl2;
  } else {
    return modalInstructions.missionControl3;
  }
};

export const getChildDashboardText = (hasRead, hasDrawn, hasWritten) => {
  if (hasRead && hasDrawn && hasWritten) {
    return modalInstructions.childDash2;
  } else {
    return modalInstructions.childDash;
  }
};

export const getMissionControlButtonText = (hasRead, hasDrawn, hasWritten) => {
  if (!hasRead) {
    return modalButtonText.accept;
  } else if (hasRead && (!hasDrawn || !hasWritten)) {
    return modalButtonText.ok;
  } else {
    return modalButtonText.nextPage;
  }
};

export const progressInfo = {
  welcome: 'Welcome to the Progress Page!',
  explanation:
    "Below you will see some graphs representing what we at Story Squad call our 'Squad Score'. What exactly is a Squad Score? We're glad you asked!",
  isTitle: 'What Squad Score IS:',
  is: [
    'Built just for use in the context of Story Squad, attempting to capture qualitative writing features in quantitative terms',
    'Based on text analysis we conduct automatically on every submitted story',
    'Made up of some factors based on real writing complexity measures (such as grammatical syntax, vocabulary word usage, word length, etc) and others geared specifically toward measures of creative writing',
    'Used to show a child’s “progress” and to group kids into their weekly squad with other children who had similar Squad Scores on their submissions that week',
  ],
  isNotTitle: 'What Squad Score is NOT:',
  isNot: [
    'Intended to be an indicator of your child’s writing ability',
    'Free from error -- while messy handwriting or spelling mistakes are not penalized, they can impact transcription accuracy, which in turn can cause variability in their Squad Score',
    'A replacement for a formal or school-based writing skills assessment',
  ],
  ending:
    "We provide you with these visualizations so you can be involved and engaged in your child's Story Squad experience. Feel free to check this page regularly, because we'll update it weekly with every new submission!",
};
