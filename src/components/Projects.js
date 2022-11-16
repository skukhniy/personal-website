import React from 'react';
import ProjectCard from './ProjectCard';
import shopPic from '../assets/shop-screenshot.png';
import waldoPic from '../assets/waldo-screenshot.png';
import starwarsPic from '../assets/starwars-screenshot.png';
import pokedexPic from '../assets/pokedex-screenshot.png';
import blogPic from '../assets/blog-screenshot.png';
import watchboxdPic from '../assets/watchboxd.png';

export default function Projects() {
  return (
    <div className="text-center projects-custom pt-3 pe-3 ps-3">
      <span class="anchor" id="projects"></span>
      <h3 data-aos="fade-in" data-aos-once="true" className="mb-4">
        Projects
      </h3>

      <div className="">
        <ProjectCard
          title={'RESTful API Blog'}
          desc={
            'A full-stack CRUD app using a MERN stack. It implements user authentication for admin privileges, a rich text editor to add design variety to posts, and image uploads. Deployed on AWS using EC2 on a virtual Ubuntu machine.'
          }
          img={blogPic}
          demo={'http://blog.stanislavkukhniy.com/'}
          code={'https://github.com/skukhniy/blog-api'}
        />
        <ProjectCard
          title={'Vinyl Store'}
          desc={
            'Built an e-commerce website using React for a fake vinyl store. Added Jest testing to ensure that components were working properly after every update.'
          }
          img={shopPic}
          demo={'https://skukhniy.github.io/shopping-page/#/'}
          code={'https://github.com/skukhniy/shopping-page'}
        />
        <ProjectCard
          title={'Letterboxd Watchlist Scrapper'}
          desc={
            'This MERN-stack app uses webscrapping to gather and display which movies from a users Letterboxd watchlist were added to streaming this month. Use my Letterboxd username (stanisloth) to test out the app.'
          }
          img={watchboxdPic}
          demo={'http://watchboxd.stanislavkukhniy.com'}
          code={'https://github.com/skukhniy/letterboxd-watchlist-scrapper'}
        />
        <ProjectCard
          title={'Pokedex'}
          desc={
            'This project is a Pokédex website which uses a Pokemon API (https://pokeapi.co) to display all the Pokémon from a specific region.'
          }
          img={pokedexPic}
          demo={'https://skukhniy.github.io/pokedex/dist/index.html'}
          code={'https://github.com/skukhniy/pokedex'}
        />
      </div>
    </div>
  );
}
