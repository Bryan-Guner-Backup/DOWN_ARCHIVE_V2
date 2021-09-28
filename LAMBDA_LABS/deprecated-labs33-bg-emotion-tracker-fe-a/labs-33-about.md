# BGCA Experience Tracker - Front End Repository :stars:

 **Deployment:** https://a.bgexperiencetracker.dev/login

### A Tracker aimed towards recording the emotional sentiment of members attending BGCA activities, this iteration allows for authentication on Oktas sign-in widget, navigation of a dashboard-type application, upload and parsing of .csv containing program information and member information accordingly, also the ability to generate and print .pdf version of member ID cards with corresponding QR code's on them.

 (All features discussed :point_up: will be explained in further detail below)
# Planning :seedling:

(**These will be displayed down below :point_down:**)
- Whimsical: [WireFrames](https://whimsical.com/wireframes-HzaAfFqyw5txwQsJe7LcFX), [User Flows](https://whimsical.com/user-flow-3MK3owKZuKSLhkd3pfE8M7), [Program Flow](https://whimsical.com/program-flow-HG3nSU9tnLGjXXEzoSU4rc)
- DB Schema: [Click Here](https://app.dbdesigner.net/designer/schema/0-bg-club-a)
- Engineering Diagram: [Click Here](https://whimsical.com/engineering-diagrams-AUEUqhuaK3iZCahaw6bJg4)
<br>
## Whimsical

#### Wire-Frames

![Landing dash](./src/styles/images/wireframe-dash)
Wireframe for first page hit once authenticated, in future iterations could be used for data visualizations...
<br>
![Member management](./src/styles/images/wireframe-member)
Wireframe for the Member Management page, has a visualization of each member currently in the system with the option to open an extended modal window allowing for .csv upload of member information.
<br>
![Program management](./src/styles/images/wireframe-program)
Wireframe for the Program Management page, also has a visualization of each program currently in the system with the ability to open an extended modal window allowing for individual or .csv upload of program information
<br>
### User Flows
![Super Admin User Flow](./src/styles/images/userflow-sa.png)
Super Admin flow detailing UX from auth to all functionalities
<br>
![Club Director User Flow](./src/styles/images/userflow-cd.png)
Club Director flow detailing UX from auth to all functionalities
<br>
![YDP User Flow](./src/styles/images/userflow-ydp.png)
YDP flow detailing UX from auth to all functionalities 
<br>
### Component Architecture
![Program Flow](./src/styles/images/programflow)
Program Flow walking you through exactly which files do what in our file system.
<br>
### DB Schema
![DB Schema](./src/styles/images/dbschema.png)
DB Schema explaining each table on back-end RDBMS
<br>
### Engineering Diagram
![Engineering Diagram](./src/styles/images/egdiag.png)
Diagram displaying flow of information for entire project, details for tech stack 
<br>

# Execution :rocket:

## Component Architecture
(File system were modified from original SPA scaffold)

Stayed true to Labs container > render flow. Everything is laid out with screenshots of the exact file used in our program flow file located [here](https://whimsical.com/program-flow-HG3nSU9tnLGjXXEzoSU4rc)

**Stack:**
More Details - [here](https://whimsical.com/engineering-diagrams-AUEUqhuaK3iZCahaw6bJg4)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [Axios](https://www.npmjs.com/package/axios)
- [Okta React SDK](https://developer.okta.com/code/react/)
- [AntDesign](https://ant.design)
- [Less.js](https://lesscss.org)
- [React Router](https://reactrouter.com)

**State Management:**
 React prop drilling
 
**Styling**

> theme-override.js

Global theme file for AntDesign, exports to modifyVars via Craco. If AntDesign component colors seem off use this file to manipulate global styles.

Notes: [Global AntDesign Defaults](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less), keep in mind any changes made to theme-override.js will not take effect until you re-compile the program
> less.js

Create local .less files in the same folder as you are working in, import that .less file directly into your component and you can manipulate any specific styles need fit. an example of this can be found in layout-navbars, SA.less  coordinates to SuperAdminNav.jsx

**Authentication:**
Most configuration of Okta was done by past contributors, refer to the documentation for any specifics, I will list below a few testing user accounts that you can sign in with at: https://a.bgexperiencetracker.dev/login

| Role | User Email | Password | 
| ------------ | ---------- | ----------|
| Super Administrator | llama001@maildrop.cc | Test001Test|
| Club Director | llama002@maildrop.cc | Test002Test |
| YDP | llama005@maildrop.cc | Test005Test |
| No-Role | llama007@maildrop.cc | Test007Test | 

**Deviations:**
- [qrcode.react](https://www.npmjs.com/package/qrcode.react) A react component allowing for QR generation with style capabilities.

## Major Features

### Member Management

![Image of Member Management](.src/styles/images/view-member.png)

- [x] Visualization for display of all member's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing member information or the option of adding a member manually via ID.
- [x] The ability to create new ID's flaunting a unique QR code that can then be converted to .pdf form and printed off at will.

**Modal**
![Image of Member Modal](.src/styles/images/view-member-modal.png)


- [x] member .csv upload


### Program Management
![Image of Program Management](.src/styles/images/view-program.png)
<br>
Program Management view.

- [x] Visualization for display of all program's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing program information

**Modal**
![Image of Program Modal](.src/styles/images/view-program-modal.png)

- [x] program .csv upload
- [x] Individual program upload

---