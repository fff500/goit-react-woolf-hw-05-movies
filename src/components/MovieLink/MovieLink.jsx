import React from 'react';
import { Link } from 'react-router-dom';

export const MovieLink = ({ to, text }) => {
  return (
    <li>
      <Link to={to}>
        {text}
      </Link>
    </li>
  )
}
