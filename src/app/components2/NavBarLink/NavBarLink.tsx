import React from 'react';

type NavBarLinkProps = {
  icon: JSX.Element;
  link: string;
};
function NavBarLink({ icon, link }: NavBarLinkProps): JSX.Element {
  return <a href={link}>{icon}</a>;
}

export default NavBarLink;
