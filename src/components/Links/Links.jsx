import React from 'react';
import Header from './components/Header';
import LinkItem from './components/LinkItem';
import './Links.css';

const Links = () => {
  const LINKS = [
    { title: 'BA/BFA INTERACTION DESGIGN @ GWU', url: 'https://corcoran.gwu.edu/undergraduate-interaction-design' },
    { title: 'MA INTERACTION DESGIGN @ GWU', url: 'https://corcoran.gwu.edu/interaction-design-graduate' },
    // { title: 'MA INTERACTION DESGIGN @ GWU', url: 'https://corcoran.gwu.edu/kevin-patton' },
    { title: 'VIMEO', url: 'https://vimeo.com/user1198196' },
    { title: 'BANDCAMP', url: 'https://kevinpatton.bandcamp.com/' },
    // { title: 'TWITTER', url: 'https://twitter.com/example' },
    { title: 'ACADEMIC ACTIVITIES', url: 'https://kpcv.cargo.site/' },
    { title: 'CONTACT', url: 'mailto:el.kevo@gmail.com' }
  ];

  return (
    <div className="links-container">
      <div className="links-wrapper">
        <Header />
        
        <nav className="nav-container">
          {LINKS.map(({ title, url }) => (
            <LinkItem key={title} href={url}>
              {title}
            </LinkItem>
          ))}
        </nav>

        <footer>
          <p className="footer-text">
            © {new Date().getFullYear()} Kevin Patton. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Links;