import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import { PiChart } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Chart",
  component: PiChart,
  argTypes: {
    libraryType: {
      options: ["atalskit",  "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    text:{
        description:'Title of graph'
    },
    series:{
        description:'values of bars',
        control:{type:"array"}
    },
    categories:{
        description:'titles of Each bar',
        control:{type:'array'}
    },
    // height:{
    //   description:"height of container",
    //   // control:{type:"input"}
    // }
  
  },
} as ComponentMeta<typeof PiChart>;

const Template: ComponentStory<typeof PiChart> = (args) => (
  <PiChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text:'Bar Graph',
  series:[6.4,3.3,7.7,5.8,6.6],
  categories:["jan","feb","Mar","Apr","May"],
  // height:"100%"
  
};
