import React from 'react';
import { NavBarLinkProps } from '../../../types';

function NavBarLink({ icon, link }: NavBarLinkProps): JSX.Element {
  return <a href={link}>{icon}</a>;
}

export default NavBarLink;
