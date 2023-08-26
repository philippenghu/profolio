import emoji from "react-easy-emoji";



const introduction = {
    firstName : "Philip" ,
    
    lastName : "Peng" ,
    
    introductionText : "A passionate Web Developer and former Urban Designer. " ,


    contactButtonText : "CONTACT ME"
}

const profilesToShow = [
    {
        name : "github",
        link : "https://github.com/philippenghu",
        fontAwesomeIcon : "fa fa-github",
    },

    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/philip-hu-peng/",
        fontAwesomeIcon : "fab fa-linkedin-in"
    },
    
    {
        name : "mail",
        link : "mailto:philiphupeng@outlook.com",
        fontAwesomeIcon : "fas fa-envelope"
    }
]

const skillsToShow = {
    
    skillTitle : "What I do",

    skillSubtitle : "FULL STACK DEVELOPER / FORMER DESIGNER",

    skillList : [
        emoji("⚡ Develop highly interactive FrontEnd / User Interface for you."),
    ],

    softwareSkillsIcons : [
        {
            name : "Photoshop",
            fontAwesomeIcon : "fas fa-a"
        },
        {
            name : "Autocad",
            fontAwesomeIcon : "fad fa-pencil"
      
        },
        {
            name : "CSS",
            fontAwesomeIcon : "fab fa-css3-alt"
        },

        {
            name : "sass",
            fontAwesomeIcon : "fab fa-sass"
        },

        {
            name : "Java",
            fontAwesomeIcon : "fab fa-java"
        },

     

        {
            name : "JavaScript",
            fontAwesomeIcon : "fab fa-js"
        },

        {
            name : "ReactJS",
            fontAwesomeIcon : "fab fa-react"
        },

        {
            name : "NodeJS",
            fontAwesomeIcon : "fab fa-node"
        },


        {
            name : "Mongodb",
            fontAwesomeIcon : "fas fa-database"
        }
    ]
}





const projectsGithubRepos = {
    heading : "What I have made",
    username : "philippenghu",
    repoNames : "philippenghu",
    githubRepositoriesLink : "https://github.com/philippenghu?tab=repositories",
    projectsButtonText : "More Projects"
}


/*
    Customize your achievement and certificate area heading through this object.

    You can add your achievement or Certificate details in the "achievementsOrCertificateDetails" array.
    Play with care with variables in this array else things might not look as you want
*/
const achievementsAndCertifications = {
    heading: emoji("Achievements and Certifications🏆"),
    subHeading : "ACHIEVEMENTS AND CERTIFICATES",
    
    achievementsOrCertificateDetails : [
        {
            title: "Certificated Urban Planner",
            description: "Added 4 missing test cases to Leetcode",
            imageAlt: "Certificated Urban Planner",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: true,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode TestCases"
        },

        {
            title: "AWS EC2 SSH key-pair",
            description: "Corrected AWS command allowing millions users of AWS to seamlessly create key-pairs and SSH into their EC2 instances through CLI.",
            imageAlt: "AWS png",
            imageSrc: "https://hackfest.ca/images/partenaires/aws.png",
            hasLink: true,
            proofLink: "https://github.com/awsdocs/amazon-ec2-user-guide/pull/144",
            achievementButtonText: "AWS Github Merge"
        },

        {
            title: "LeetCode Solutions",
            description: "Contributed to Leetcode solutions which helped many users to understand concept and intuition in more accurate way.",
            imageAlt: "Leetcode png",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: true,
            proofLink: "https://docs.google.com/document/d/10vYuOmOhiQVOh86IE_kXWbeIxw1_4-vEJoV8QcuOzWI/edit",
            achievementButtonText: "Leetcode Solutions"
        },

        {
            title: "Global ranking for DSA",
            description: "282 global rank in July Challenge 2021 and 554 global rank in April challenge 2021 on CodeChef.",
            imageAlt: "Leetcode png",
            imageSrc: "https://avatars.githubusercontent.com/u/11960354?v=4",
            hasLink: false,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode Solutions"
        }
    ]
}


const contactMe = {
    heading : "Reach Out to me!",
    subHeading : "DISCUSS INNOVATIVE IDEAS TO BUILD OR HIRE ME FOR BUILDING IMPACTFUL TECH SOLUTION",
    bioText : "Searching for web-development jobs | Full Stack Developer | Former Designer",
    location : "Calgary",
    openForOpportunities : "YES",
    profilePicture : require("./assets/images/ProfilePicture.jpg")  
}


export {
 

    introduction,
    profilesToShow,
    skillsToShow,
    projectsGithubRepos,
    achievementsAndCertifications,
    contactMe
}