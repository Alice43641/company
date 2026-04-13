import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import './Hero.css'

const Hero = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // VERY IMPORTANT
      },
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.6,
            },
          },
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#3b010b',
        },
        links: {
          color: '#75162d',
          distance: 140,
          enable: true,
          opacity: 0.3,
          width: 3,
        },
        move: {
          enable: true,
          speed: 0.5,
          outModes: {
            default: 'bounce',
          },
        },
        number: {
          value: 500,
          density: {
            enable: true,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: 0.8,
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <section id='home' className='hero'>
      {init && <Particles className='particles-bg' options={options} />}

      <div className='hero-content'>
        <h1>We ensure digital security for a better world.</h1>
        <p>
          Proactive threat detection, advanced encryption technologies,
          continuous system monitoring, and strict access control policies
          to safeguard data, networks, and digital assets.
        </p>
      </div>
    </section>
  )
}

export default Hero