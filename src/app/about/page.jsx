import React from 'react';
import './about.css';

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}

export default function About() {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/miguel.png' alt="Avatar" />
            <h1>BIO</h1>
            <p className="intro-paragraph">
              Born and bred amidst the bustling streets of Mexico City, I, Adolfo T. Arellano, have embarked on a multifaceted odyssey shaped by a profound fascination with the intricate interplay of politics and technology. From an early age, I found myself captivated by these seemingly disparate realms, recognizing their profound impact on shaping our world. My academic journey led me to pursue a degree in Political Science at BYU Hawaii, where I delved deep into the nuances of governance, societal dynamics, and the intricate tapestry of global affairs. It was during this transformative period that I was afforded the opportunity to engage directly with individuals from diverse cultural backgrounds, offering invaluable assistance with a plethora of immigration cases, ranging from asylum applications to naturalization processes. This hands-on experience not only enriched my understanding of the human condition but also instilled within me a profound sense of empathy and purpose.</p>
              <p>Following my immersive foray into the realm of immigration law, I felt compelled to explore new horizons, driven by an insatiable thirst for knowledge and a fervent desire to effect positive change in an ever-evolving digital landscape. Thus, I embarked on a new chapter of my journey, venturing into the dynamic realm of cybersecurity. Over the ensuing years, I have dedicated myself to acquiring and honing the requisite skills and expertise necessary to navigate the complex web of cyber threats and vulnerabilities. With a keen eye for detail and an unwavering commitment to excellence, I have immersed myself in the intricacies of cybersecurity, fervently striving to stay abreast of the latest technological advancements and emerging threats.</p>
              <p>As I chart my course forward, I am propelled by a steadfast determination to leverage my diverse skill set and expertise as a cybersecurity analyst. Armed with a deep-seated passion for safeguarding organizational assets and preserving the integrity of digital ecosystems, I endeavor to play a pivotal role in fortifying defenses against malware, cyber attacks, and other nefarious threats. My journey, characterized by a harmonious fusion of disparate passions and pursuits, serves as a testament to the boundless potential that lies at the nexus of politics and technology. In embracing the challenges that lie ahead, I am steadfast in my commitment to effecting meaningful change and shaping a brighter, more secure future for generations to come.</p>
          </div>
        </main>
      </div>
    </div>
  );
}



