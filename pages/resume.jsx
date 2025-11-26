import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Bleriot Wafo | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Bleriot Wafo</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/bleriot-wafo/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/BleriotWafo'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Autodidakt <span className='px-1'>|</span> IT-Systeme{' '}
              <span className='px-1'>|</span> Prozessoptimierung{' '}<span className='px-1'>|</span> Daten & Entwicklung
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Autodidakt</p>
            <p className='py-2'>Web Entwicklung</p>
            <p>Komplexe Problemlösung</p>
          </div>
        </div>
        <p>
         Ich kombiniere Kenntnisse in Softwareentwicklung, Datenbanken, digitalen Geschäftsprozessen, IT-Systemen und grundlegender IT-Sicherheit. Durch verschiedene Projekte, Werkstudententätigkeiten und ehrenamtliche Aufgaben habe ich sowohl technische als auch organisatorische Perspektiven kennengelernt.

Meine Erfahrung umfasst die Entwicklung moderner Webanwendungen, Datenvisualisierungen, Analyse- und Digitalisierungsprojekte sowie die Mitarbeit in agilen Teams. Darüber hinaus war ich in Vereinsstrukturen tätig und unterstützte dort Projektkoordination, Kommunikation und operative Abläufe.

Ich arbeite analytisch, strukturiert, lösungsorientiert und bewege mich gerne an Schnittstellen zwischen Technologie, Organisation und Nutzerbedürfnissen.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Java
          </p>
          <p className='py-2'>
            <span className='font-bold'>agiles Projektmanagement</span>
            <span className='px-2'>|</span>mit Scrum(Anwendung in Jira und Confluence)
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
         Berufserfahrung
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Andersmacher
            </span>
            <span className='px-2'>|</span>Gelsenkirchen
          </p>
          <p className='py-1 italic'>Werkstudent Front End Web Developer (Oktober 2021 - Oktober 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Sicherstellung umfassender mobiler responsive UI-Layouts mit
              Verständnis von HTML, CSS und JavaScript.
            </li>
            <li>
            Arbeitete direkt mit einem vielfältigen Kundenstamm, um zu verstehen und
            mehrere Technologien und Programme implementieren.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              VKII Ruhrbezirk e.V.
            </span>
            <span className='px-2'>|</span>Dortmund
          </p>
          <p className='py-1 italic'>ehrentamtliche Dozent (2020 - heute)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Im Jahr 2020 habe ich einen Kurs gestartet, der sich darauf konzentriert, 
            das zu teilen, was ich speziell in der Webentwicklung gelernt habe.

            </li>
            
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Sonstige Berufserfahrung
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Westfälische Hochschule Gelsenkirchen</span>
            <span className='px-2'>|</span>Gelsenkirchen
          </p>
          <p className='py-1 italic'> Tütor für Studienanfänger (Oktober 2022 – Dezember 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>


          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
