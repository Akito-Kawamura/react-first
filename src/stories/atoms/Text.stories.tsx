import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './text';

export default {
	title: 'Atoms/Text',
	component: Text,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	  backgroundColor: { control: 'color' },
	},
      } as ComponentMeta<typeof Text>;
      
      // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
      const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
      
      export const templete = Template.bind({});
      templete.args = {
	text : 'hoge',
      };