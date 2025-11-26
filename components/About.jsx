import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Wer bin ich?</h2>
          <p className='py-2 text-gray-600'>
            Ich bin 27 Jahre alt und Wirtschaftsinformatik-Absolvent der Westfälischen Hochschule Gelsenkirchen. In meinem Studium und meinen Projekten beschäftigte ich mich mit digitalen Geschäftsprozessen, Datenanalyse, IT-Systemen, Webtechnologien und grundlegenden Themen der IT-Sicherheit.

Ich arbeite gerne an Schnittstellen zwischen Technik und Organisation – dort, wo Prozesse optimiert, Daten ausgewertet oder digitale Lösungen entwickelt werden müssen. Durch verschiedene Projekte und Werkstudententätigkeiten sammelte ich praktische Erfahrung in Webentwicklung, Datenbanken, Visualisierungen, API-Integration sowie im Umgang mit modernen Technologien.

Neben technischen Themen interessiere ich mich stark für Digitalisierung, Prozessoptimierung, Projektarbeit und die Einführung moderner IT-Lösungen in Unternehmen.
Ehrenamtlich leitete ich außerdem einen Informatikkurs, in dem ich Grundlagen der Programmierung und IT-Basiswissen vermittelte.
          </p>
          <p className='py-2 text-gray-600'>
            Ich begann 2020 mit der Webentwicklung und verwaltete mehrere 
            E-Commerce-Websites auf CMS-Plattformen wie WordPress, 
            BigCommerce und Shopify. Ich habe Erfahrung in der direkten Zusammenarbeit 
            mit Kunden und in der Entwicklung  bis hin zu implementierten Anwendungen. 
            In meiner Freizeit betreibe ich ehrenamtlich einen Informatikkurs, wo ich 
            Grundlagen der Java Programmierung ,Web-Entwicklung und verschiedene 
            Front-End-Technologien unterrichte.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
