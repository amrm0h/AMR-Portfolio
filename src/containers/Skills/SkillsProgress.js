import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { label: 'HTML', value: 90, color: '#ff651c' },
  { label: 'CSS', value: 90, color: '#71c8e0' },
  { label: 'JS', value: 85, color: '#f8dd22'  },
  { label: 'GIT', value: 75, color: '#f0502f' },
  { label: 'REACT', value: 75, color: '#00d8ff' },
  { label: 'JQUERY', value: 65, color: '#0968ac' },
  { label: 'SASS', value: 80, color: '#cd669a' },
  { label: 'BOOTSTRAP', value: 70, color: '#7109f6' },
  { label: 'TAILWIND', value: 90, color: '#19b4b9'},
  { label: 'MOMENT', value: 80, color: '#61b2a7' },
  { label: 'MATERIAL-UI', value: 80, color: '#007fff'},
  { label: 'CHART-JS', value: 80, color: '#fe777b' },
  { label: 'NEXT', value: 60, color: '#855eec' },
  { label: 'TYPESCRIPT', value: 70, color: '#2d79c7' },
];

export default function SkillsProgress() {
  return (
    <div className='grid grid-cols-4 gap-10'>
      {skills.map(({ label, value, color }, index) => (
        <CircularProgressbar
          key={label}
          value={value}
          text={label}
          strokeWidth={3}
          counterClockwise={!(index % 2)}
          styles={{
            text: {
              fill: color,
              fontSize: 12,
              fontWeight: '600',
            },
            trail: {
              stroke: 'transparent',
            },
            path: {
              stroke: color,
            }
          }}
        />
      ))}
    </div>
  )
}
