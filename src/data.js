export const aboutContent = {
    title: "About",
    statement_1: "A hard working individual Computer Science graduate who loves to be challenged with difficult problems and tasks, very driven and after travelling for the last few years is ready to jump back into a career of web development, and to expand my skill and knowledge of the computer Industry.",
    mission: "More recently I have been trying to improve my skills and knowledge by undertaking the Codecademy Web Developer Course. Throughout this course I have been building various front-end web applications to test my new knowledge with Javascript, React.js, Bootstrap, node.js and launching them on surge.sh and Firebase."
}; 

export const educationContent = {
    title: "Education",
    
    date_1: "2020 - present",
    certification_1: "Web Development 90%",
    college_1: "Codecademy",
    description_1: "90% through the Codecademy course on Web Development, this course focuses on designing and building web applications and websites strongly focusing on React. The path of this course focuses on HTML, CSS, JavaScript, React, Git, Node.js, SQLite.  ",
    
    date_2: "2012 - 2016",
    certification_2: "Computer Science Information and Technology 2.1 honours",
    college_2: "National University of Ireland, Galway",
    description_2: "Through the course I was challenged to think creatively to solve problems, and discovered how systems that are incorporated into everyday life and work. This course was strongly focused on software development and databases. Through the duration of the course I developed software in C++, java, SQL, JavaScript and in my final year developed a recommendation application that recommends the user Artists based on their information on the social media application Twitter.",
    
    date_3: "2006 - 2012",
    certification_3: "Leaving Certification",
    college_3: "Magh Éne College, Bundoran",
    description_3: "485 points"
};

export const experienceContent = {
    title: "Experience",

    date_1:"Feb 2015 - Sept 2015",
    jobTitle_1:"Suport Engineer Intern",
    business_1:"SAP",
    jobDescription_1:"Intern Support Engineer as part of the Integration Team in the Centre of Excellence (CoE) in Dublin. Main focus within the company was ABAP code optimization and Database Performance enhancement",

    date_2:"Jun 2008 - Sept 2017",
    jobTitle_2:"Manager",
    business_2:"Simpsons Bundoran",
    jobDescription_2:"Hired as sales assistant moving through the rankings to finally becoming manager. Producing high quality work, in a small time frame while providing excellent customer service.",

    date_3:"Oct 2015 - Jan 2016",
    jobTitle_3:"Laboratory Tutor",
    business_3:"National Universiy of Ireland, Galway",
    jobDescription_3:"Developing small applications of use with Galileo boards, LEDs and radio sender and receivers for 3rd year IT students that try and replicate the applications, organize lab slots and supervised throughout the sessions"
};

export const portfolioContent = [
    {
        id:"001",
        img:"img/PhoneStore.png",
        imgFull:"img/FullScreenStore.png",
        title:"Phone Store E-commerce",
        link:"http://phonestore.surge.sh/",
        descriptionFull:"This project is a sample e-commerce website that can be a stand alone online shop or incorporated into a website. This website is completely front end and the items for the store are built into the store as a data.js file. When designing this ecommerce site I designed it around using context api this prevents prop drilling. This was the first project I designed using a context api and I found it very useful and kept my code neat and easy to understand. This website definitely was a turning point, the react library became clearer and the development process became easier. One problem I encountered with this project was when the context api was using the information in data.js it was not copying the data but referencing so when data would be altered it would be altered right back to the data.js. This was a tricky one to figure out but eventually through designing methods to copy the data the lifecycle method it was fixed. This project is still in construction as I am going to hook it up with paypal so it is fully functional.",
    },
    {
        id:"002",
        img:"img/Jammming.png",
        imgFull:"img/FullScreenJammming.png",
        title:"Jammming Spotify Playlist Maker",
        link:"https://aaronjammming.surge.sh/",
        description:"description",
        descriptionFull:"Jammming is a project I completed in the Codecademy, completing projects in this course as you were helped through difficult stages with small hints, this project is very satisfying as it is getting you to login to your personal account and building playlist and the result playlist is saved in your Spotify account. It was very interesting incorporating the Spotify API and understanding the capabilities of it. This project is all Front-end and is deployed on Surge.sh. There was a few problems I encountered when completing this project mostly because of the Spotify API but thankfully Codecademy was there to help me with hints and review previous lectures and examples."
    },
    {
        id:"003",
        img:"img/Ravenous.png",
        imgFull:"img/FullScreenRavenous.png",
        title:"Ravenous Restaurant Review Site",
        link:"http://aaron_ravenous.surge.sh/",
        description:"description",
        descriptionFull:"Ravenous was the first project I completed while completing the Codecademy web development course, this project allows the user to search for restaurants and cafes by name or area this website uses the Yelp API and returns information on the business. Ravenous is then able to place the business in a business list and is able to be sorted by most reviewed, best matched and highest rated. I enjoyed this as it was the first project that I completed that uses everything that I was learning in the month prior in the Codecademy course, designing components, setting states and passing information through props. Whilst completing Ravenous I began to understand the capabilities of React, even though this is a very small example. "
    },
    {
        id:"004",
        img:"img/OnlinePortfolioNew.png",
        imgFull:"img/FullScreenPortfolioNew.png",
        title:"Personal Portolio Updated",
        link:"http://localhost:3000/",
        description:"description",
        descriptionFull:"After completing some of my projects, and wanting to showcase what I can do I decided to build an online portfolio. I did so and was happy with it for the time being it was very plain simplistic but didn't really show my real potential. I wanted to design something that had a lot of features from all of my other websites. One of the main ideas for this website was to make it as a template so if I wanted to update this website with new information or if I was building a portfolio for another person then I could do so by just changing one file with all the information, that is why I placed all the data into one file called Data.js and then was able to access that data throughout the website via the context api, this cleans up my code and prevents heavy prop drilling. Problems encountered with this project was accessing functions and making them work and also the css can be tedious"
    },
    {
        id:"005",
        img:"img/OnlinePortfolio.png",
        imgFull:"img/FullScreenPortfolio.png",
        title:"Personal Portolio",
        link:"https://project-portfolio-aaron94.web.app/",
        description:"description",
        descriptionFull:"Upon completion of the Codecademy web development course I finished with a few new projects, I also was building new projects and I was proud of the work I was doing, I wanted to build some kind of online portfolio that showcased a few of them projects. This project was relatively simple and easy to manufacture and the only problem I encountered along the way was the building of the sendgrid email. This caused a few problems on the sendgrid side but was easy enough resolved. This portfolio has since been updated."
    },
    {
        id:"006",
        img:"img/OnlineForm.jpg",
        imgFull:"img/FullScreenForm.png",
        title:"Online Form",
        link:"http://formexample.surge.sh/",
        description:"description",
        descriptionFull:"This was one of the first simple tasks I assigned to myself, I wanted to build a simple online form that when data was entered into the fields that it saved the information through set state and then used shown the information at the last page by sending it through props. It was an easy project to complete and is a useful template to incorporate into future projects."
    }
]

export const portfolioDetail = {
    id:"001",
    img:"img/PhoneStore.png",
    imgFull:"img/FullScreenStore.png",
    title:"Phone Store Ecommerce",
    link:"http://phonestore.surge.sh/",
    descriptionShort:"description",
    descriptionFull:"In Adobe InDesign, the lines of type are set, by default, in the best interest of the entire paragraph. As you type or edit a paragraph, InDesign adjusts the line breaks a paragraph at a time, which explains why you may notice text reflowing above the line you are editing. It’s unnerving to see until you understand that you are watching the Adobe Paragraph Composer in action. By using the Adobe Paragraph Composer, you are just about guaranteed to have better word spacing, hyphenation and line breaks than if you turned it off. Take a look at the two paragraphs shown below. Both of the body paragraphs are set to the same typeface, size, style and hyphenation settings. The only difference between them is the composer used to set the line breaks. The one on the left is set with the default Paragraph Composer on, the one on the right is set to the Single-Line Composer. Which one do you think looks better?",
}
    