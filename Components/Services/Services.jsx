import React from 'react'
import './Services.css'

import { FaNetworkWired } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaBug } from 'react-icons/fa'
import { FaUserShield } from 'react-icons/fa'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaNetworkWired />,
      title: 'Network Security Monitoring',
      description:
        'Real-time threat detection and monitoring systems for enterprise networks.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Data Protection',
      description:
        'Secure cloud storage solutions with end-to-end encryption.',
    },
    {
      icon: <FaBug />,
      title: 'Penetration Testing',
      description:
        'Comprehensive vulnerability assessments and ethical hacking services.',
    },
    {
      icon: <FaUserShield />,
      title: 'Identity & Access Management',
      description:
        'Secure authentication systems with multi-factor verification.',
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Incident Response',
      description:
        'Rapid cyber attack detection, containment, and recovery.',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Security Awareness Training',
      description:
        'Educating teams on cyber threats and prevention strategies.',
    },
  ]

  return (
    <section id='services' className="services">
      <h2>WHAT WE OFFER</h2>
      <h1>Our Services</h1>
      <p>
        Explore our wide range of cybersecurity solutions designed to protect
        your digital infrastructure.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services