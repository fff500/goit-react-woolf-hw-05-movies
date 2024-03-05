import React from 'react';
import { Link } from 'react-router-dom';

export const MovieLink = ({ to, state, text }) => {
  return (
    <li>
      <Link to={to} state={state}>
        {text}
      </Link>
    </li>
  )
}
