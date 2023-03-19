import React from 'react';
import LogoPlusText from '../assets/brand-icons/LogoPlusText.svg';
import LogoSolidBlue from '../assets/brand-icons/LogoSolidBlue.svg';
import TextOnlyforLogo from '../assets/brand-icons/TextOnlyforLogo.svg';

export interface BrandIconProps {
  iconType: 'logoPlusText' | 'logoSolidBlue' | 'textOnlyforLogo';
  width?: number;
  height?: number;
}

const BrandIcon: React.FC<BrandIconProps> = ({ iconType, width = 100, height = 100 }) => {
  let Icon: any;
  switch (iconType) {
    case 'logoPlusText':
      Icon = LogoPlusText;
      break;
    case 'logoSolidBlue':
      Icon = LogoSolidBlue;
      break;
    case 'textOnlyforLogo':
      Icon = TextOnlyforLogo;
      break;
    default:
      Icon = TextOnlyforLogo;
  }

  return <Icon width={width} height={height} />;
};

export default BrandIcon;
