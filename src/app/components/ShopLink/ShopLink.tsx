import React from 'react';

type ShopLinkProps = {
  icon: JSX.Element;
  link: string;
};
function ShopLink({ icon, link }: ShopLinkProps): JSX.Element {
  return <a href={link}>{icon}</a>;
}

export default ShopLink;
