import React from "react";
import UsesSection from "../../components/UsesSection/UsesSection";
import Profile from "../../components/Profile/Profile";

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

const items = [
  {
    groupName: 'Security Tools',
    items: [
      {
        title: 'SIEM (Security Information and Event Management) System',
        description:
          'SIEM systems collect and analyze security data from multiple sources across an organization to identify and respond to security threats in real-time.',
      },
      {
        title: 'Firewalls',
        description:
          'Firewalls monitor and control incoming and outgoing network traffic based on predetermined security rules to prevent unauthorized access to or from a network.',
      },
      {
        title: 'Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)',
        description:
          'IDS and IPS monitor network traffic for signs of malicious activity or policy violations. IDS detect threats, while IPS block or prevent detected threats.',
      },
      {
        title: 'Endpoint Protection Platforms (EPP)',
        description:
          'EPP solutions protect endpoint devices such as desktops, laptops, and mobile devices from malware, ransomware, and other cyber threats.',
      },
      {
        title: 'Vulnerability Assessment Tools',
        description:
          'Vulnerability assessment tools scan networks, systems, and applications for security vulnerabilities, providing insights to remediate and strengthen security posture.',
      },
      {
        title: 'Penetration Testing Tools',
        description:
          'Penetration testing tools simulate cyber attacks to identify vulnerabilities and weaknesses in a system or network before malicious actors exploit them.',
      },
    ],
  },
  {
    groupName: 'Security Practices',
    items: [
      {
        title: 'Security Policies and Procedures',
        description:
          'Establishing and enforcing security policies and procedures to govern the organization’s approach to cybersecurity, including access controls, data protection, and incident response.',
      },
      {
        title: 'Security Awareness Training',
        description:
          'Educating employees and stakeholders on cybersecurity best practices, recognizing phishing attempts, and adhering to security protocols to mitigate human error and prevent breaches.',
      },
      {
        title: 'Incident Response Plan',
        description:
          'Developing and implementing a comprehensive incident response plan to effectively detect, respond to, and recover from cybersecurity incidents such as data breaches or cyber attacks.',
      },
      {
        title: 'Regular Security Audits and Assessments',
        description:
          'Conducting regular security audits and assessments to evaluate the effectiveness of security controls, identify weaknesses, and ensure compliance with regulatory requirements.',
      },
    ],
  },
];

export default function Uses() {
  return (
    <div>
      <Profile
        title="Cybersecurity Tools & Practices"
        content="As a cybersecurity analyst, I utilize various tools and practices to safeguard systems and networks from cyber threats. Here are some of the key components:"
      />
      <UsesSection items={items} />
    </div>
  );
}
