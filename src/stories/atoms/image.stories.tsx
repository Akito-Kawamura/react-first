import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './image';

export default {
	title: 'Atoms/Image',
	component: Image,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	  backgroundColor: { control: 'color' },
	},
      } as ComponentMeta<typeof Image>;
      
      // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
      const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
      
      export const templete = Template.bind({});
      templete.args = {
	src : '../../../public/logo512.png',
	alt : 'altText',
	title : 'react'
      };