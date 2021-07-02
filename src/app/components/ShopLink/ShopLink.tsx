import React from 'react';
import ShopLinkIcon from '../Icons/ShopLinkIcon';

type ShopLinkProps = {
  icon: JSX.Element;
  link: string;
};
function ShopLink({ link }: ShopLinkProps): JSX.Element {
  return (
    <a href={link}>
      <ShopLinkIcon />
    </a>
  );
}

export default ShopLink;
