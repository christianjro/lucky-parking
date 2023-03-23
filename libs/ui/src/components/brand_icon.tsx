import React from 'react';
import Icon1 from '../assets/brand-icons/LogoPlusText.svg';
import {ReactComponent as LogoSolidBlue } from '../assets/brand-icons/LogoSolidBlue.svg';
// import LogoSolidBlue from '../assets/brand-icons/LogoSolidBlue.svg';
import TextOnlyforLogo from '../assets/brand-icons/TextOnlyforLogo.svg';

// import { ReactComponent as LogoPlusText } from '../assets/brand-icons/LogoPlusText.svg';
// import { ReactComponent as LogoSolidBlue } from '../assets/brand-icons/LogoSolidBlue.svg';
// import { ReactComponent as TextOnlyforLogo } from '../assets/brand-icons/TextOnlyforLogo.svg';


// export interface BrandIconProps {
//   iconType: 'logoPlusText' | 'logoSolidBlue' | 'textOnlyforLogo';
//   width?: number;
//   height?: number;
// }

// const BrandIcon: React.FC<BrandIconProps> = ({ iconType, width = 100, height = 100 }) => {
//   let Icon: any;
//   switch (iconType) {
//     case 'logoPlusText':
//       Icon = LogoPlusText;
//       break;
//     case 'logoSolidBlue':
//       Icon = LogoSolidBlue;
//       break;
//     case 'textOnlyforLogo':
//       Icon = TextOnlyforLogo;
//       break;
//     default:
//       Icon = TextOnlyforLogo;
//   }

//   return <Icon width={width} height={height} />;
// };

// export default BrandIcon;
console.log("777777777777777777777777")
console.log(Icon1)
export const LogoPlusText: React.FC = () => (
  <div>
    <img src={Icon1} />
  </div>
)

// export const Icon: React.FC = () => (
//   <LogoSolidBlue />
// )