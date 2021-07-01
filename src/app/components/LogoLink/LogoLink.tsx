import React from 'react';

type LogoLinkProps = {
  icon: JSX.Element;
  link: string;
};
function LogoLink({ icon, link }: LogoLinkProps): JSX.Element {
  return <a href={link}>{icon}</a>;
}

export default LogoLink;
