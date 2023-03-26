import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BrandIcon from './brand_icon';


export default {
    title: 'Components/BrandIcon',
    component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>;


export const LogoPlusText: ComponentStory<typeof BrandIcon> = (args) => <BrandIcon {...args} />;
LogoPlusText.args = {
    iconType: 'logoPlusText',
};


export const LogoSolidBlue: ComponentStory<typeof BrandIcon> = (args) => <BrandIcon {...args} />;
LogoSolidBlue.args = {
    iconType: 'logoSolidBlue',
};


export const TextOnlyforLogo: ComponentStory<typeof BrandIcon> = (args) => <BrandIcon {...args} />;
TextOnlyforLogo.args = {
    iconType: 'textOnlyforLogo',
};