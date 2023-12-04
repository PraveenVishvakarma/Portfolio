import aboutpic from "./components/Access/mePhoto.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/PraveenVishvakarma/Portfolio',
  title: 'GitHub',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Praveen Vishvakarma',
  role: 'Full stack developer',
  description:
    'My name is Praveen Vishvakarma, recently graduated from Galgotias College of Engineering and Technology living in Bengaluru, India. highly interested in cutting edge technology, web development and Java back end development.',
  resume: 'https://drive.google.com/file/d/1awHN6rz7QO0dOZbma8_-8cUhvfNhijwU/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/praveen-vishvakarma-172a6b253/',
    github: 'https://github.com/PraveenVishvakarma',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Real-Estate Website',
    description:
      'A Real-Estate website, developed JWT, Firebase, and Google OAuth for secure and seamless user access. where users can post their property listings and can change the listings, add images of listings and can set the different categeries of listings like rent, offer, funished, parking, bedroom etc.· Advanced Search Functionality: Implement cutting-edge search features to help users find what theyre looking for. ',
    stack: ['Reacj.JS, Node.JS, MongoDB, Redux, Tailwindcss'],
    sourceCode: 'https://github.com/PraveenVishvakarma/Real-Estate-App',
    livePreview: 'https://praveen-mern-estate.onrender.com/',
  },
  {
    name: 'Social Media App',
    description:
      'As users, we can create our profile page and login , and can post the our thoughts and image to the app and also someone can like and unlike the posts, we can see the other users profile and can add as well as remove them into our friend list, and also I left the space for the ads.',
    stack: ['Reacj.JS, Node.JS, MongoDB, Redux, Material-UI'],
    sourceCode: 'https://github.com/PraveenVishvakarma/Social-Frontend',
    livePreview: 'https://front-end-3v3w.vercel.app/',
  },
  {
    name: 'Course Selling App',
    description:
      'App has users as well as an admin dashboard, users can create their accounts and see the lists of courses and can purchage them and in admin dashboard an admin can post  the course and can update the courses according to their need like price, description, image etc',
    stack: ['React.JS', 'NPM', 'Recoil','Material-UI','Express','Node.JS', 'MongoDB'],
    sourceCode: 'https://github.com/PraveenVishvakarma/course-selling-app',
    livePreview: 'https://github.com/PraveenVishvakarma/course-selling-app',
  },
  {
    name: 'Blog Web App',
    description:
      'Created a Blog Web App where any one can go post, update and delete their blogs and also can create their blogs to their need',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/PraveenVishvakarma/Blog-Web-App',
    livePreview: 'https://github.com/PraveenVishvakarma/Blog-Web-App',
  },
  {
    name: 'Todo App',
    description:
      'Todo App is the place where you can create your todo list according to your situation and day, also can perform CRUD operations ',
    stack: ['Node.JS', 'MongoDB', 'EJS'],
    sourceCode: 'https://github.com/PraveenVishvakarma/Todo-App',
    
  },
  {
    name: 'Weather App',
    description:
      'Used the wheather api To get live wheather update like temperature, Humidity, wind speed, across the all over the world',
    stack: ['html-css-javascript', 'Node.JS', 'API'],
    sourceCode: 'https://github.com/PraveenVishvakarma/Weather-project',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node.js',
  'Tailwindcss',
  'TypeScript',
  'C++',
  'Data Structures',
  'Algorithms',
  'DBMS',
  'Express',
  'MySQL',
  'MongoDB',
  'Material UI',
  'Git',
  'MERN',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'praveen15100@gmail.com',
}

export { header, about, projects, skills, contact };