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
            Ich bin 27 Jahre alt,Wirtschaftsinformatik-Absolvent der 
            Westfälische Hochschule Gelsenkirchen und versuche mich auf
             die Entwicklung von responsive 
            Front-End-UI-Anwendungen zu eignen, die mit APIs und anderen 
            Back-End-Technologien verbunden sind.  Ich  lerne leidenschaftlich
            gern neue Technologien und weiß, dass es mehr als einen Weg gibt,
            eine Aufgabe zu bewältigen. Am meisten beherrsche ich jedoch 
            Front-End-Anwendungen mit HTML, CSS, Javascript und React zu erstellen,
            Ich lerne schnell und kann mir bei Bedarf neue Technologien aneignen.
            Ich glaube, dass ein großartiger Entwickler nicht nur eine bestimmte Sprache
            verwenden muss,  sondern die Auswahl des besten Werkzeugs für die jeweilige Aufgabe.
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
