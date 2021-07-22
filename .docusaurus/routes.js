
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','8e4'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','894'),
  exact: true,
},
{
  path: '/characters/class',
  component: ComponentCreator('/characters/class','6ea'),
  exact: true,
},
{
  path: '/characters/creating-a-character',
  component: ComponentCreator('/characters/creating-a-character','5b1'),
  exact: true,
},
{
  path: '/characters/heritage',
  component: ComponentCreator('/characters/heritage','fd6'),
  exact: true,
},
{
  path: '/characters/origin',
  component: ComponentCreator('/characters/origin','8da'),
  exact: true,
},
{
  path: '/content/abilities',
  component: ComponentCreator('/content/abilities','f3f'),
  exact: true,
},
{
  path: '/content/armor-and-shields',
  component: ComponentCreator('/content/armor-and-shields','91f'),
  exact: true,
},
{
  path: '/content/perks',
  component: ComponentCreator('/content/perks','092'),
  exact: true,
},
{
  path: '/content/sundries',
  component: ComponentCreator('/content/sundries','4f2'),
  exact: true,
},
{
  path: '/content/talents',
  component: ComponentCreator('/content/talents','4f1'),
  exact: true,
},
{
  path: '/content/tricks-and-weapons',
  component: ComponentCreator('/content/tricks-and-weapons','36e'),
  exact: true,
},
{
  path: '/contributing',
  component: ComponentCreator('/contributing','a8d'),
  exact: true,
},
{
  path: '/introduction',
  component: ComponentCreator('/introduction','251'),
  exact: true,
},
{
  path: '/license',
  component: ComponentCreator('/license','727'),
  exact: true,
},
{
  path: '/reference/conditions',
  component: ComponentCreator('/reference/conditions','e88'),
  exact: true,
},
{
  path: '/reference/senses',
  component: ComponentCreator('/reference/senses','454'),
  exact: true,
},
{
  path: '/rules/ability-scores-and-skills',
  component: ComponentCreator('/rules/ability-scores-and-skills','054'),
  exact: true,
},
{
  path: '/rules/mana-fighting-and-magic',
  component: ComponentCreator('/rules/mana-fighting-and-magic','77f'),
  exact: true,
},
{
  path: '/rules/playing-the-game',
  component: ComponentCreator('/rules/playing-the-game','c3a'),
  exact: true,
},
{
  path: '/rules/success-and-failure',
  component: ComponentCreator('/rules/success-and-failure','7c2'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
