export const Projects = [
  {
    id: 0,
    type: "Web Development",
    title: "Parsley",
    posterURL: "../images/parsley.jpg",
    link: "https://parsley-soups.herokuapp.com/",
    github: "https://github.com/davefrancese/parsley-soup",
    screenShots: [
      "../images/parsleySS1.jpg",
      "../images/parsleySS2.jpg",
      "../images/parsleySS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/FM3WQoJMSF4",
    description:
      "Denver, Colorado's organic cafe has a new Daily Soup app. Customers can visit the app and see what daily soups are hot and ready for the day. For admins, they can simply navigate to the dashboard to update the date and which soup is daily, low, or out.",
    writeUp:
      "For a time I worked at Parsley in downtown Denver. Some of the best sandwiches, smoothies, salads, and of course, soups I have had in Denver. I noticed a trend with customers that would walk in from the snowy streets wanting their favorite soup. Many customers would ask if they had any 'Broccoli Cheddar' soup or 'Potato Leek' soup. Or they would ask if they still had any 'Green Chili Potato' soup left. As a developer, this was a problem that needed to be fixed. I sought to build a fairly simple app for both the customer and owner, where the customer visits the page and can easily see what soups Parsley, and also seeing which of those soups are running low or are already out. As for the owner, Jason Bailey, and the manager on duty, they both are working during the lunch rush and need to be able to update the app as quickly as possible. The front end is held together with React and Redux to quickly and easily manage the state of the customer facing page, and for the admin page, state for each soup is easily managed and viewed with the help of some font awesome icons. To see the dashboard in action, refer to the walkthrough video below.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React + Redux",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png",
      "../images/redux.png",
      "../images/node.png",
      "../images/express.png",
      "../images/mongodb.png"
    ],
    designImages: [],
    solo: false,
    contributions: ""
  },
  {
    id: 1,
    type: "Web Development",
    title: "Emaily",
    posterURL: "../images/emaily2.jpg",
    link: "https://df-emaily.herokuapp.com",
    github: "https://github.com/davefrancese/emaily-server",
    screenShots: [
      "../images/emailySS1.jpg",
      "../images/emailySS2.jpg",
      "../images/emailySS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/5No9qtE7RaE?rel=0",
    description:
      "Login via Google+ and start sending surveys to your users to get feedback to see how people are liking your services. Emaily accepts credit cards thanks to Stripe handling all the payments. As soon as you pay for credits, start a survey campaign and get feedback from as many emails as you would like. See the survey results directly in your Dashboard.",
    writeUp:
      "Emaily was probably one of the most difficult apps I have built. Emaily was very indepth with a lot of technologies I had never used before. (Passport, SendGrid, Stripe, and even ReduxForm). A friend of mine had mentioned this idea to me and upon researching more about an app that handles email survey feedback interested me. Feedback is huge for not only companies but also for UX research. The more you know about your users, the more you can build things to make their lives easier. AKA: They'll use your app more!",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React + Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "SendGrid",
      "Stripe"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png",
      "../images/redux.png",
      "../images/node.png",
      "../images/express.png",
      "../images/mongodb.png",
      "../images/passport.png",
      "../images/sendGrid.png",
      "../images/stripe.png",
      "../images/materialize.png"
    ],
    designImages: [],
    solo: false,
    contributions: ""
  },
  {
    id: 2,
    type: "Web Development",
    title: "Goal Coach",
    posterURL: "../images/peak.jpg",
    link: "https://df-goal-coach.firebaseapp.com/signin",
    github: "https://github.com/davefrancese/goal-coach",
    screenShots: [
      "../images/goalCoachSS1.jpg",
      "../images/goalCoachSS2.jpg",
      "../images/goalCoachSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/R7OTejFgu-0?rel=0",
    description:
      "Goal Coach allows for multiple users to sign on and see goals that their team wants to reach. It shows the goal and who added the goal. Anyone can add or complete these goals. Just log in with your email and a password and let people know what you want to accomplish!",
    writeUp:
      "This was a great way for me to get my hands dirty with Firebase's authentication and realtime database. Also, Redux was something I was still working to really get down. Goal Coach is a great tool to use with teams working on projects, to see what goals need to met and if one has been completed, and anyone on the team can see who completed it.",
    tech: ["HTML5", "CSS3", "JavaScript", "React + Redux", "Firebase"],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png",
      "../images/redux.png",
      "../images/firebase.png",
      "../images/bootstrap.png"
    ],
    designImages: [],
    solo: true,
    contributions: ""
  },
  {
    id: 3,
    type: "Web Development",
    title: "Reminder Pro",
    posterURL: "../images/elephant.jpg",
    link: "https://df-reminder-pro.firebaseapp.com/",
    github: "https://github.com/davefrancese/reminder-pro",
    screenShots: [
      "../images/reminderProSS1.jpg",
      "../images/reminderProSS2.jpg",
      "../images/reminderProSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/yShI_n5Y9pg?rel=0",
    description:
      "Never forget an event or task you have coming up. Reminder Pro allows users to add as many reminders as they would like, along with a date that the event or task is coming up. Even after navigating away from Reminder Pro, users' reminders will be there whenever they return. Visit Reminder Pro and never forget!",
    writeUp:
      "Reminder Pro was great practice with cookies and learning a little bit about Moment.js. With any project, no matter how simple, I try to always incorporate technologies I have never tried out. It's the best way to learn and grow as a developer.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React + Redux",
      "Firebase",
      "Moment"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png",
      "../images/redux.png",
      "../images/firebase.png",
      "../images/moment.png",
      "../images/bootstrap.png"
    ],
    designImages: [],
    solo: true,
    contributions: ""
  },
  {
    id: 4,
    type: "Web Development",
    title: "Synth Lab",
    posterURL: "../images/synth.jpg",
    link: "https://synth-lab.firebaseapp.com/",
    github: "https://github.com/davefrancese/synth-lab",
    screenShots: [
      "../images/synthLabSS1.jpg",
      "../images/synthLabSS2.jpg",
      "../images/synthLabSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/4utfiq5J_5I?rel=0",
    description:
      "I love music, specifically old retro synthesizers. Synth Lab was built with responsiveness in mind. I used CSS Grid so that the images would resize and change columns depending on the users screen size. A small project for now, but in the future I would like to expand Synth Lab so that users can add more to the list.",
    writeUp: "",
    tech: ["HTML5", "CSS3", "JavaScript", "React"],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png"
    ],
    solo: true,
    contributions: ""
  },
  {
    id: 5,
    type: "Web Development",
    title: "Sleuth",
    posterURL: "../images/sloth.jpg",
    link: "https://speed-sleuth.firebaseapp.com/",
    github: "https://github.com/g64-sleuth",
    screenShots: [
      "../images/sleuthSS1.jpg",
      "../images/sleuthSS2.jpg",
      "../images/sleuthSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/Ai6c9iGqIJM?rel=0",
    description:
      "Now that net neutrality is long gone, it is time to keep ISPs accountable for the speed users pay for. That is exactly what Sleuth is for. Users can run a download speed test and Sleuth will tell the user their ISP, their download speed, where they rank among other users with the same ISP that have also used Sleuth, and it will give them the highest ranking ISP based upon download speed.",
    writeUp:
      "The hope for Sleuth was to eventually send out a tweet everytime a user's download speed dropped below the promised speed of whatever package they were paying for from their provider. This tweet would of course be directed towards the company, complaining that their internet speed is not as quick as they advertise. In addition to being an awesome idea for an app, it was a group effort. With a total of 9 developers working on this, I was able to really work in a team, put our agile principles to the test, prioritize, design, develope, pair program Sleuth together. A huge learning experience!",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "Chrome Extensions"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/react.png",
      "../images/node.png",
      "../images/express.png",
      "../images/postgresql.png",
      "../images/knex.png",
      "../images/chrome.png"
    ],
    solo: false,
    contributions: ""
  },
  {
    id: 6,
    type: "Web Development",
    title: "Fable Forum",
    posterURL: "../images/fable.jpg",
    link: "https://prosepros-fable.herokuapp.com/",
    github: "https://github.com/davefrancese/fable",
    screenShots: [
      "../images/fableSS1.jpg",
      "../images/fableSS2.jpg",
      "../images/fableSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/l3m4vGLNRpA?rel=0",
    description:
      "If you are a writer of short stories and want to hone in on your skills. Fable Forum is for you. Share your stories with other users and get feedback from those authors. Also, comment on other authors' stories and share your skills to help others. Just create an account and get to writing!",
    writeUp:
      "Fable was a group project of 5 developers. All server side rendering using Knex.js for querying the database and Handlebars for rendering the data to the front end. This was a great experience for me to not only work in a team environment but to also understand relational databases (PostgreSQL). ",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "Handlebars.js"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/node.png",
      "../images/express.png",
      "../images/postgresql.png",
      "../images/knex.png",
      "../images/handlebars.png"
    ],
    solo: false,
    contributions: ""
  },
  {
    id: 7,
    type: "Web Development",
    title: "MOOD.",
    posterURL: "../images/mood.jpg",
    link: "https://mood-q1.firebaseapp.com/",
    github: "https://github.com/davefrancese/moodProject",
    screenShots: [
      "../images/moodSS1.jpg",
      "../images/moodSS2.jpg",
      "../images/moodSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/hJrmwzzpLfk?rel=0",
    description:
      "When trying to find new music to listen to, it can be pretty frustrating. A lot can depend on what kind of music you are feeling at that particular moment: the weather outside, your emotions, and also the overall vibe of the day. MOOD. sorts this out for you. Put in your location and how your feeling and MOOD. will generate a 10 song playlist for you to enjoy.",
    writeUp:
      "MOOD. was the very first JavaScript app I built. I am really into music so I wanted to build something based around that. I also wanted a music app that allowed users to experience new music but in a way that was suitable at the time they visit the app. Using only HTML, CSS, and JavaScript I had so much fun exploring and consuming Apple's API to search for music based on a user's current mood.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png"
    ],
    solo: true,
    contributions: ""
  },
  {
    id: 8,
    type: "Web Development",
    title: "TODO",
    posterURL: "../images/todo.jpg",
    link: "https://df-todos.herokuapp.com/",
    github: "https://github.com/davefrancese/todo-practice1",
    screenShots: [
      "../images/todosSS1.jpg",
      "../images/todosSS2.jpg",
      "../images/todosSS3.jpg"
    ],
    embedVideo: "https://www.youtube.com/embed/b_bcZv3nlhk?rel=0",
    description:
      "Server side rendering! I wanted to build a fully functional TODO application using only server side rendering. Add, update, and delete (complete) a todo. Even give it a priority level.",
    writeUp:
      "TODO's styling was used with bootstrap so that I could mainly focus on building my routes in Node/Express and work on my queries using Knex.js and rendering the data that came back with Handlebars on the front end. I would have to say that while working on this project, this is when back end development really clicked for me. People had always told me that there would be a moment when things just start to make sense. This was it!",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "Handlebars.js",
      "Bootstrap"
    ],
    techImages: [
      "../images/html5.png",
      "../images/css3.png",
      "../images/js.png",
      "../images/node.png",
      "../images/express.png",
      "../images/postgresql.png",
      "../images/knex.png",
      "../images/handlebars.png",
      "../images/bootstrap.png"
    ],
    solo: true,
    contributions: ""
  },
  {
    id: 9,
    type: "Graphic Design",
    title: "Moon Energy Guide",
    posterURL: "../images/MEGLogo.jpg",
    link: "",
    github: "",
    description:
      "Aquarius Nation, an astrologer based in Santa Fe, New Mexico came to me wanting to rebrand her monthly astrology guide. I was given full reign of design concepts. Mixing astrology with astronomy and the grandiose with the intricate.",
    writeUp:
      "As a kid, I was obsessed with space! This project was like revisiting those moments again as a kid. Really diving into the vastness of the cosmos and designing all the intricate pieces was tedious but at the same time meticulous work is what I love, especially when the project is over, you can look at your work and be really proud. Typograpy too, was so important in this project. I didn't want the typeface to take away but to add to the design. It had to be minimal yet still bring outer space and wonder to the design.",
    tech: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    techImages: [
      "../images/photoshop.png",
      "../images/illustrator.png",
      "../images/indesign.png"
    ],
    designImages: [
      "../images/MEGCover.jpg",
      "../images/MEGLogo.jpg",
      "../images/MEGPage.jpg",
      "../images/MEGpromo.jpg",
      "../images/MercuryRetrogradeBook.pdf",
      "../images/ANFacebookBannerNight-1.jpg"
    ],
    solo: true,
    contributions: ""
  },
  // {
  //   id: 10,
  //   type: "Graphic Design",
  //   title: "Tonic",
  //   posterURL: "../images/tonicLogo.jpg",
  //   link: "",
  //   github: "",
  //   description:
  //     "A logo for the simple, collected, and clean living lifestyle that this journal provides. Dive into this holistic approach on a day to day basis! From organic recipes to non-toxic home supplies, or just food for thought.",
  // writeUp: "",
  //   tech: ["Adobe Illustrator", "Adobe Photoshop"],
  //   techImages: ["../images/photoshop.png", "../images/illustrator.png"],
  //   designImages: ["../images/tonicLogo.jpg", "../images/tonicLogoFull.jpg"],
  //   solo: true,
  //   contributions: ""
  // },
  {
    id: 10,
    type: "Graphic Design",
    title: "Evolve Movement",
    posterURL: "../images/inStudio.jpg",
    link: "",
    github: "",
    description:
      "Evolve Movement, an awesome yoga studio based in the Cameron Village area of Raleigh, NC. They needed some in-house posters to tell about their values and culture. They wanted to express the colorful spirit of their teachers and accessibility. A super fun project as I too love yoga and staying active.",
    writeUp: "",
    tech: ["Adobe Photoshop"],
    techImages: ["../images/photoshop.png"],
    designImages: [
      "../images/CoreValues-1.jpg",
      "../images/CoreValuesWoman.jpg",
      "../images/CultureCharacteristics-1.jpg",
      "../images/CultureCharacteristics-2.jpg",
      "../images/Niche-1.jpg",
      "../images/Niche-2.jpg",
      "../images/ReasonForBeing-1.jpg",
      "../images/ReasonForBeing-2.jpg",
      "../images/inStudio.jpg"
    ],
    solo: true,
    contributions: ""
  },
  {
    id: 11,
    type: "Graphic Design",
    title: "Logo Design",
    posterURL: "../images/lucid.jpg",
    link: "",
    github: "",
    description:
      "Maybe one of the most difficult skills is to hear a client's vision and translate that into one icon. The Logo. A concept that has to stick, look good, and encompass a company's values, goals, and skills. I love designing logos and minimalistic is my approach and typography is my main focus when designing. Research, research, research before ever touching a pencil or computer. Knowing as much as I can about my client and what his or her passions are for their future company is my first concern. This is the heart of the company and that MUST shine through when a first time customer glances at that business card or billboard.",
    writeUp:
      "Lucid was a concept idea I had about an art space. The idea was to help artists of all types grow their brand and sell their work. The Greenville College Math and Science department were looking for a logo to tie the two together, I love little hidden symbols within logos. Tonic, a blog for holistic living. While Tonic is a blog about holistic living, it also features articles about manifestation and self-help articles.",
    tech: ["Adobe Photoshop", "Adobe Illustrator"],
    techImages: ["../images/photoshop.png", "../images/illustrator.png"],
    designImages: [
      "../images/lucid.jpg",
      "../images/greenvilleCollege.jpg",
      // "../images/MSLogo.jpg",
      "../images/tonicLogo.jpg",
      "../images/tonicLogoFull.jpg"
    ],
    solo: true,
    contributions: ""
  },
  {
    id: 12,
    type: "Graphic Design",
    title: "Layout and Posters",
    posterURL: "../images/aesopSquare.jpg",
    link: "",
    github: "",
    description:
      "Layout is key to great design. Balance and color theory and typography are so important and are the essential element that make for a great poster to get the message across.",
    writeUp:
      "Aesop's Poetry Slam was a concept idea I had. A project for school that had to be a made up idea. This little fox was an image I had found, thrown into photoshop to get the lighting just right, and then composed with little bits of pieces of color shapes to make up the face and microphone. The magnifying glass and ant poster I designed for Homer Sparks, my stage name (my late grandfather's name) when I play music. The idea is based from one of my album covers. The red Homer Sparks poster was inspired by the bands on the bill, Lake Isle and Octopus Jones. Mill Wood Art was a client I worked for as a graphic designer. They needed a new catalog to take to their big wholesale shows to give to potential buyers; below is one of the designs I did for the cover and the one that they chose to use. Jupiter Studios was another client of mine I worked for designing ads, flyers and brochures.",
    tech: ["Adobe Photoshop", "Adobe Illustrator"],
    techImages: ["../images/photoshop.png", "../images/illustrator.png"],
    designImages: [
      "../images/aesop.jpg",
      "../images/homerSparksSlims.jpg",
      "../images/homerSparksCave.jpg",
      "../images/millwoodCover.jpg",
      "../images/jupiterFlyer.jpg"
    ],
    solo: true,
    contributions: ""
  }
];
