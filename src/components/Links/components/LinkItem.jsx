import React from 'react';
import { ExternalLink } from 'lucide-react';

const LinkItem = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link-item">
    <div className="link-wrapper">
      <div className="link-content">
        <span className="link-text">{children}</span>
        <ExternalLink className="link-icon" />
      </div>
      <div className="link-underline" />
    </div>
  </a>
);

export default LinkItem;