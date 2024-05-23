import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextReveal from '../src/TextReveal';
import './text-reveal.stories.css';

const meta: Meta<typeof TextReveal> = {
  component: TextReveal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Smooth Color change animation in every characters in a text while scroll',
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextReveal>;


export const example_solid_colors: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  name : "Example: Solid colors",
  decorators: [
    (Story) => (
      <div style={{ height: '200vh', fontFamily: 'sans-serif', padding: '1rem', background: 'black' }}>
        <div style={{ color: 'white', marginBottom: '0.5rem' }}>👆 Reload 🔄 once you did any change in <u>Controls</u></div>
        <div style={{ fontSize: '1.5rem', color: 'white' }}>Scroll down to see the text reveal</div>
        <div style={{ fontSize: '5rem', marginTop: '60vh' }}>
          <Story />
        </div>
      </div>
    )],
  args: {
    text: ['Hello world', 'Hail JS 🙌'],
    textColor: '#3d3d3d',
    fillColor: '#f47979',
    fillSpeed: 100,
    fillDelay: 3.5,
    fillDirection: "left-right"
  },
};

export const example_gradient_color: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  name : "Example: Linear Gradients",
  decorators: [
    (Story) => (
      <div style={{ height: '200vh', fontFamily: 'sans-serif', padding: '1rem', background: 'black' }}>
        <div style={{ color: 'white', marginBottom: '0.5rem' }}>👆 Reload 🔄 once you did any change in <u>Controls</u></div>
        <div style={{ fontSize: '1.5rem', color: 'white' }}>Scroll down to see the text reveal</div>
        <div style={{ fontSize: '5rem', marginTop: '60vh' }}>
          <Story />
        </div>
      </div>
    )],
  args: {
    text: ['Hello world', 'Hail JS 🙌'],
    textColor: '#3d3d3d',
    fillColor: 'linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)',
    fillSpeed: 100,
    fillDelay: 3.5,
    fillDirection: "left-right"
  },

  argTypes: {
    textColor: {
      control: {
        type: 'text',
      },
      description : 'sadfsafsd dsf sdf sad'
    },
    fillColor : {
      control: {
        type: 'text',
      },
    }
  }
};