import React from 'react';
import PropTypes from 'prop-types';

function DropdownCard({ title, text, isOpen, onToggle }) {
  return (
    <div className={`dropdown-card ${isOpen ? 'open' : ''}`}>
      <h4 onClick={onToggle} className="dropdown-title">
        {title}
      </h4>
      <div className="dropdown-content">
        <p className="dropdown-text">{text}</p>
      </div>
    </div>
  );
}

DropdownCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DropdownCard;