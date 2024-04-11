import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import './page.css';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx'; // Import the WorkWidget component
import SkillsWidget from '../components/SkillsWidgets/SkillsWidget.jsx';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
// Define your work experiences data
const experiences = [
  {
    logo: './images/byu.jpeg',
    organization: 'BYU-Pathway',
    jobTitle: 'Degree Planner Specialist',
    startYear: 2022,
    endYear: 'Present'
  },
  {
    logo: './images/211.png',
    organization: 'United Way',
    jobTitle: 'Information Specialist',
    startYear: 2020,
    endYear: 2021
  },
  {
    logo: './images/lawoffice.jpeg',
    organization: 'Law Office of Carmen DiAmore',
    jobTitle: 'Paralegal',
    startYear: 2020,
    endYear: 2021
  }
  // Add more experiences as needed
];
const skills = [
  { name: "HTML", proficiency: 60, icon: './images/3.jpg' },
  { name: "CSS", proficiency: 50, icon: './images/5.jpg' },
  { name: "JavaScript", proficiency: 75, icon: './images/js.jpg' },
]

const articles = [
  {
    date: 'Current',
    title: 'BYU-Pathway',
    content: '"As a degree planner specialist, I have the privilege of assisting numerous students every day in charting their academic paths. With precision and attention to detail, I meticulously craft degree and certificate plans that align with each students unique goals and aspirations. Guided by their individual timelines and preferences, I ensure that every plan is tailored to meet their specific needs. Its immensely rewarding to play a role in empowering students to navigate their academic journey with confidence and success."',
    link: 'https://www.byupathway.edu',
  },
  {
    date: 'January, 2023',
    title: 'Information Specialist',
    content: '"During my role as an information specialist at United Way, I assisted individuals by connecting them to various private and public organizations that provided goods and services designed to help people. Serving as a bridge between individuals in need and the resources available in their communities, I facilitated access to essential support systems. Through effective communication and resourcefulness, I ensured that individuals received appropriate assistance tailored to their specific needs. My dedication to connecting people with vital resources underscored United Way 211s mission to improve lives and strengthen communities through collaborative efforts."',
    link: 'https://metrounitedway.org',
  },
  {
    date: 'January, 2022',
    title: 'Immigration Paralegal',
    content: '"During my tenure as a paralegal at an immigration law firm, I specialized in managing all Spanish-speaking cases, overseeing approximately 100 immigration cases ranging from asylum applications to naturalization and adjustment of status petitions. My role involved providing comprehensive support to clients throughout the legal process, including document preparation, communication with government agencies, and facilitating client meetings. Working closely with attorneys, I ensured that each case adhered to legal requirements and deadlines, while also offering empathetic guidance to clients navigating complex immigration procedures. My dedication to serving Spanish-speaking clients within the realm of immigration law underscored my commitment to facilitating access to legal services and advocating for the rights of diverse communities."',

  },
];

const Home = () => {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/miguel.png' alt="Avatar" />
            <div>
              <time>{/* Add your date here */}</time>
              <h1>Adolfo T. Arellano's Portfolio</h1>
            </div>
          </div>
          <p className="intro-paragraph">
            Work Experience
          </p>

        </main>

        <div className="articles-card">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
      </div>

      <div className="right-side">

      <SignupWidget
        title={'Send me a message'}
        content={'I will contact you as soon as possible.'}
      />
        {/* WorkWidget component */}
        <WorkWidget
          title="My Work Experience"
          content="Here is a list of my revelant work experience."
          experiences={experiences}
        />
    <SkillsWidget
              title={"Skills"}
              skills={skills}
      />


      </div>

    </div>

  );

};


export default Home;
