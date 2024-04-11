import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from '../../components/Profile/Profile';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const companies = [
  {
    name: "BYU-PATHWAY",
    description: "Fail Registration for BYU-Online Students",
    link: "https://www.byupathway.edu",
  },
  {
    name: "United Way 211",
    description: "Housing Project for Low-Income Families",
    link: "https://211utah.org/?utm_source=google&utm_medium=google_ads&utm_campaign=211&gad_source=1&gclid=CjwKCAjw8diwBhAbEiwA7i_sJZY7MJ3YXeUFRzSOWRBaWqpU1B0Hfo4uUkDxEFdXFOoOmd0RCZlzmBoCLoIQAvD_BwE",
  },
  {
    name: "Carmen DiAmore Law Firm",
    description: "Asylum Cases for Latin American Immigrants",
    link: "https://www.immigrateus.com",
  },

];

export default function Projects() {
  return (
    <div>
      <Profile
        title="Projects"
        content="Take a look at the projects I have worked on:"
      />

      <div className="company-display">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </div>
    </div>
  );
}
