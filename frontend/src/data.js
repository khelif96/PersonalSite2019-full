const projects = [
  {
    title: 'Uploading files from a React app to AWS S3 the right way.',
    description: `
Medium article I wrote for uploading files to AWS S3 from a React App.

I developed a simple and secure method for uploading files to S3 Buckets
using a minimal amount of external libraries

Article Averages over 1500 views per month`,
    link: 'https://medium.com/@khelif96/uploading-files-from-a-react-app-to-aws-s3-the-right-way-541dd6be689',
    github: 'https://github.com/khelif96/React-S3-fileuploads',
  },
  {
    title: 'Movie Recommendation Engine',
    description: `
The Movie Recommendation Engine is a Data Science project that recommends
movies to users based off of several criteria.
This project involved an inital data cleaning phase in which we cleaned several
datasets from the [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
by [Rounak Banik](https://www.kaggle.com/rounakbanik) within Pandas.

We then moved onto a Data exploration phase in which we created several charts in order
to determine what metrics would be useful for our recomendation engine.

Finally we utilized the NearestNeighbors functionality from sklearn to identify likely Recommendation candidates.

I also built a React Frontend and a Express API server to communicate between the Frontend and the Python functions.
Technologies

Python

Pandas

sklearn

React

NodeJS

Express

Check out the full write up below
    `,

    link: 'https://medium.com/@khelif96/building-a-movie-recommendation-engine-1f9360da4dbf',
    github: 'https://github.com/lihaojin/Movie_Data_Analysis',
  },
  {
    title: 'Rails',
    description: `
“Rails” is a platform for teachers and students. Rails will help organize all events in a class. From helping set due dates and reminders to providing a discussion forum for events in a class.
Rails is being built as a Progressive Web App in which it is usable offline.

Technologies

Firebase - our noSQL Backend as a Service and authentication service

Ant Design - our UI library

Google Cloud - our API/Backend hosting

ReactJS - our front-end framework

Node.js - our back-end runtime and API

React Big Calendar - our calendar view UI

React Router - our routing manager

Jest - our testing tool

Enzyme - our testing tool

I was responsible for several aspects of the application including system design, Continuation integration and deployment.
I built out several core UI elements, as well as enabled Progressive web app functionality.
I also developed the caching mechanisms and developed our client side routing authentication method.
        `,
    github: ' https://github.com/CSC59939/Rails',
    link: 'https://rails-students.firebaseapp.com/',
  },
  {
    title: 'Railroad Management System',
    description: `
* Created Full-stack web application to manage Train Schedules and Reserve tickets.
* Deployed MariaDB database on AWS RDS and created several tables to create a Normalized Database.
* Developed NodeJS API to communicate with the database and manipulate tables as well as communicate with the front end and handle logic
* Developed Front-end using ReactJS to cleanly and efficiently display data obtained from API Routes. And allow easy use by customers
* Deployed on AWS EC2 Instance for front end server and Backend Server and AWS RDS for the database.`,
    link: 'https://github.com/khelif96/railroad-database',
  },
];

const jobs = [
  {
    title: 'Software Engineer',
    company: 'MongoDB',
    timePeriod: 'January 2020 - Present',
    description: 'Working on New and Exciting Things',
  },
  {
    title: 'Software Engineering Internship',
    company: 'MongoDB',
    timePeriod: 'June 2019 - December 2019',
    description: `Education Team
University Platform. Worked with ReactJS, GraphQL and Python. Helped build and launch [Learning Paths](https://www.mongodb.com/blog/post/get-started-with-mongodb-university-learning-paths)`,
  },
  {
    title: 'Lead TPM',
    company: 'CodePath.org',
    timePeriod: 'November 2018 - Present',
    description: `As a Lead Technical Program Manager (TPM) some additional responsibilities include:

•	Managing multiple class sections

•	Communicating and escalating issues to Codepath

•	Making cohort-wide announcements and synchronize TPM goals.

Codepath provides free, focused courses aimed towards novice and proficient software engineers.

Codepath partnered with Facebook to create and continuously develop the Cyber Security course. The course aims to introduce fundamental security concepts to students. It also provides both offensive and defensive projects for students to practice and develop their skills.

As a Technical Program Manager for the Cyber Security course my responsibilities include:

•	Having a firm familiarity with the concepts taught, and the ability to complete the course material.

•	Leading in-class sessions, assisting students with in class labs and providing an introduction to the current week's lesson.

•	Coordinating with Facebook's Information Security Program & Operations Manager, CodePath instructors to oversee the course as students advance.

Codepath Site:
https://codepath.org/

Cyber Security Course Overview:
https://courses.codepath.com/snippets/cybersecurity_university/course_overview `,
  },
  {
    title: 'Software Developer Internship',
    company: 'Work & Co',
    timePeriod: 'June 2018 - August 2018',
    description: `Worked on a large scale multi platform digital product distribution system for Epic Games

•	Collaborated with design/ development teams to rapidly prototype and build features

•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS

• Wrote unit tests for components and features.

•	Debugged several bugs across several browsers and environments.

•	Participated in daily stand up meetings with clients

•	Participated in PR review process `,
  },
  {
    title: 'Software Developer Internship',
    company: '#CUNYCodes',
    timePeriod: 'February 2018 - May 2018',
    description: `Selected to be part of a competitive cohort lead by industry veteran Gregrian Vassell working to develop applied experience in Software Development by building a product from concept to valued delivery.

• Agile Scrum Development Methodologies

• Required Designing and implementing user stories and the tracking of Progress using tools such as Pivotal

• Worked in a team of 7 Developers ranging in experience

• Project Used MERN Stack (Mongo Express React Node)`,
  },
];

export { projects, jobs };
