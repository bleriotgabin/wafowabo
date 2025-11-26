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

  {/* Technologien & Entwicklung */}
  <p className='py-2'>
    <span className='font-bold'>Technologien & Entwicklung</span>
    <span className='px-2'>|</span>JavaScript
    <span className='px-2'>|</span>TypeScript
    <span className='px-2'>|</span>HTML
    <span className='px-2'>|</span>CSS
    <span className='px-2'>|</span>Vue.js
    <span className='px-2'>|</span>React
    <span className='px-2'>|</span>Next.js
    <span className='px-2'>|</span>Node.js
    <span className='px-2'>|</span>Laravel
    <span className='px-2'>|</span>Express.js
    <span className='px-2'>|</span>REST-APIs
    <span className='px-2'>|</span>TailwindCSS
  </p>

  {/* Daten & Datenbanken */}
  <p className='py-2'>
    <span className='font-bold'>Daten & Datenbanken</span>
    <span className='px-2'>|</span>SQL (MySQL, PostgreSQL)
    <span className='px-2'>|</span>NoSQL (MongoDB)
    <span className='px-2'>|</span>Datenmodellierung
    <span className='px-2'>|</span>Datenanalyse (Grundlagen)
    <span className='px-2'>|</span>D3.js Visualisierung
  </p>

  {/* IT-Systeme & Infrastruktur */}
  <p className='py-2'>
    <span className='font-bold'>IT-Systeme & Infrastruktur</span>
    <span className='px-2'>|</span>Docker
    <span className='px-2'>|</span>Linux-Grundlagen
    <span className='px-2'>|</span>Git & GitHub
    <span className='px-2'>|</span>DevOps-Basics (Deployment, Vercel)
  </p>

  {/* IT-Sicherheit */}
  <p className='py-2'>
    <span className='font-bold'>IT-Sicherheit (Grundlagen)</span>
    <span className='px-2'>|</span>OWASP Basics
    <span className='px-2'>|</span>ZAP Scanner
    <span className='px-2'>|</span>Nikto Scanner
    <span className='px-2'>|</span>Sicherheitsbewusstsein in Webprojekten
  </p>

  {/* Digitale Prozesse & Business */}
  <p className='py-2'>
    <span className='font-bold'>Digitale Prozesse & Business</span>
    <span className='px-2'>|</span>Geschäftsprozessanalyse
    <span className='px-2'>|</span>Digitalisierung
    <span className='px-2'>|</span>Anforderungsmanagement
    <span className='px-2'>|</span>IT-Dokumentation
    <span className='px-2'>|</span>E-Commerce & CMS (WordPress, Shopify)
  </p>

  {/* Agile Methoden */}
  <p className='py-2'>
    <span className='font-bold'>Agile Methoden</span>
    <span className='px-2'>|</span>Scrum
    <span className='px-2'>|</span>Jira & Confluence
    <span className='px-2'>|</span>Teamarbeit & Kommunikation
  </p>
</div>


<h5 className='text-center underline text-[18px] py-4'>
  Berufserfahrung
</h5>

{/* Erfahrung – Werkstudent Softwareentwickler bei Zetcon */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Zetcon Ingenieur GmbH</span>
    <span className='px-2'>|</span>Bochum
  </p>
  <p className='py-1 italic'>Werkstudent Softwareentwickler (Apr. 2024 – Gegenwärtig)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Mitarbeit im agilen Entwicklungsteam zur Konzeption und Umsetzung interner Webprozesse.</li>
    <li>Entwicklung moderner Front- und Back-End-Funktionen mit Vue.js und Laravel.</li>
    <li>Optimierung bestehender Systeme für interne Abteilungen und Kundenprojekte.</li>
  </ul>
</div>

{/* Erfahrung – Stellvertretender Vorsitzender bei VMDO */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>VMDO e.V.</span>
    <span className='px-2'>|</span>Dortmund
  </p>
  <p className='py-1 italic'>Stellvertretender Vorsitzender (Jan. 2025 – Gegenwärtig)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Operative und organisatorische Unterstützung der Vereinsführung.</li>
    <li>Koordination von Projekten, Kommunikation mit Mitgliedern und externen Partnern.</li>
    <li>Mitarbeit an Integrations- und Bildungsinitiativen sowie Events.</li>
  </ul>
</div>

{/* Erfahrung – Ehrenamtlicher Web Entwickler */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>VKII Ruhrbezirk e.V.</span>
    <span className='px-2'>|</span>Dortmund
  </p>
  <p className='py-1 italic'>Ehrenamtlicher Web Entwickler (März 2021 – Jan. 2025)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Entwicklung und Weiterentwicklung mehrerer Webprojekte auf Basis von Next.js.</li>
    <li>Umsetzung neuer Features, technische Verbesserung und Pflege bestehender Anwendungen.</li>
  </ul>
</div>

{/* Erfahrung – Front-End Entwickler Fraunhofer */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Fraunhofer IML</span>
    <span className='px-2'>|</span>Dortmund
  </p>
  <p className='py-1 italic'>Front-End-Entwickler (Aug. 2023 – März 2024)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Entwicklung eines interaktiven Frontend-Prototyps mit Next.js und D3.js.</li>
    <li>Visualisierung von Roboterbewegungen mittels dynamischer Diagramme.</li>
    <li>Unterstützung wissenschaftlicher Analyse- und Forschungsprozesse.</li>
  </ul>
</div>

{/* Erfahrung – Tutor VMDO */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>VMDO e.V.</span>
    <span className='px-2'>|</span>Dortmund
  </p>
  <p className='py-1 italic'>Tutor für Informatik (Okt. 2021 – Dez. 2023)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Durchführung von Workshops für Geflüchtete zu Computergrundlagen und Internetnutzung.</li>
    <li>Vermittlung einfacher Anwendungen zur Alltagsbewältigung.</li>
  </ul>
</div>

{/* Erfahrung – Werkstudent bei Andersmacher */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Andersmacher</span>
    <span className='px-2'>|</span>Gelsenkirchen
  </p>
  <p className='py-1 italic'>Werkstudent Softwareentwickler (Apr. 2022 – Aug. 2022)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Erstellung des Lasten- und Pflichtenhefts für eine barrierefreie Mobile-App.</li>
    <li>Konzeption einer React-Native-Anwendung für Menschen mit Behinderungen.</li>
    <li>Mitarbeit an fachlicher & technischer Planung bis zur Projektunterbrechung.</li>
  </ul>
</div>

{/* Erfahrung – Lagerhelfer */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Picnic</span>
    <span className='px-2'>|</span>Herne
  </p>
  <p className='py-1 italic'>Lagerhelfer (Jan. 2020 – Apr. 2022)</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Kommissionierung, Verpackung und Vorbereitung von Bestellungen.</li>
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
