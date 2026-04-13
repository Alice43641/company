import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      title: 'Penetration Testing',
      description: 'Real-world attack simulations to test system defenses.',
      link: '#',
      linkText: 'View Case Study',
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud environments and protect sensitive data.',
      link: '#',
      linkText: 'Explore Project',
    },
    {
      title: 'Threat Monitoring',
      description: 'Continuous monitoring for suspicious activity.',
      link: '#',
      linkText: 'Read More',
    },
  ]

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>
          A snapshot of our cybersecurity expertise and solutions delivered
          to clients.
        </p>
      </div>

      <div className="portfolio-list">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="portfolio-link">
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio