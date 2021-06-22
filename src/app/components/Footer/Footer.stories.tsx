import React from 'react';
import { Meta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Component/Footer',
  component: Footer,
} as Meta;

export const primary = (): JSX.Element => <Footer />;
