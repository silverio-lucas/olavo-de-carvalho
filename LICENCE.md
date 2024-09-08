# Astro Theme: Mate 🧉

[![Build](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml/badge.svg?branch=master)](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/048d0e6b-f5c6-437d-bdca-2fd7adf66a7a/deploy-status)](https://app.netlify.com/sites/astro-mate/deploys)

> An accessible and fast portfolio starter for Astro, for Developers and Tech Writers.

## [✨ Demo](https://astro-mate.netlify.app/)

## Project Overview 👨‍💻

- [Astro](https://astro.build/) with Typescript support
- Icons from [Iconify](https://iconify.design/)
- [Daisy UI](https://daisyui.com/) as the component library (powered by [Tailwind](https://tailwindcss.com/))
- [Github Gist](https://gist.github.com/) as CMS for simplicity and transparency
- [DevTo](https://dev.to/) API Integration
- Schema validation with [Zod](https://github.com/colinhacks/zod) and automatic schema generation [ts-to-zod](https://github.com/fabien0102/ts-to-zod)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `yarn`         | Installs dependencies                        |
| `yarn dev`     | Starts local dev server at `localhost:3000`  |
| `yarn build`   | Build your production site to `./dist/`      |
| `yarn preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Icons

  - [emojis.json](https://raw.githubusercontent.com/araguaci/awesome-stars/main/emojis.json)
  - [remixicon.com](https://remixicon.com/)

## Color Pallete

  - [coolors.co](https://coolors.co/683a0d)

````
/* CSS HEX */
--caput-mortuum: #46271Dff;
--sepia: #683A0Dff;
--caf-noir: #4B3721ff;
--chamoisee: #AB794Eff;
--chamoisee-2: #907754ff;

/* CSS HSL */
--caput-mortuum: hsla(15, 41%, 19%, 1);
--sepia: hsla(30, 78%, 23%, 1);
--caf-noir: hsla(31, 39%, 21%, 1);
--chamoisee: hsla(28, 37%, 49%, 1);
--chamoisee-2: hsla(35, 26%, 45%, 1);

/* SCSS HEX */
$caput-mortuum: #46271Dff;
$sepia: #683A0Dff;
$caf-noir: #4B3721ff;
$chamoisee: #AB794Eff;
$chamoisee-2: #907754ff;

/* SCSS HSL */
$caput-mortuum: hsla(15, 41%, 19%, 1);
$sepia: hsla(30, 78%, 23%, 1);
$caf-noir: hsla(31, 39%, 21%, 1);
$chamoisee: hsla(28, 37%, 49%, 1);
$chamoisee-2: hsla(35, 26%, 45%, 1);

/* SCSS RGB */
$caput-mortuum: rgba(70, 39, 29, 1);
$sepia: rgba(104, 58, 13, 1);
$caf-noir: rgba(75, 55, 33, 1);
$chamoisee: rgba(171, 121, 78, 1);
$chamoisee-2: rgba(144, 119, 84, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-right: linear-gradient(90deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-bottom: linear-gradient(180deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-left: linear-gradient(270deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-top-right: linear-gradient(45deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-bottom-right: linear-gradient(135deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-top-left: linear-gradient(225deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-bottom-left: linear-gradient(315deg, #46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
$gradient-radial: radial-gradient(#46271Dff, #683A0Dff, #4B3721ff, #AB794Eff, #907754ff);
````

- Tailwind

````
{ 'caput_mortuum': { DEFAULT: '#46271D', 100: '#0e0806', 200: '#1b0f0b', 300: '#291711', 400: '#371f17', 500: '#46271d', 600: '#7f4735', 700: '#b66a50', 800: '#ce9b8b', 900: '#e7cdc5' }, 'sepia': { DEFAULT: '#683A0D', 100: '#150c03', 200: '#2a1705', 300: '#3f2308', 400: '#542f0a', 500: '#683a0d', 600: '#ae6216', 700: '#e5892d', 800: '#eeb073', 900: '#f6d8b9' }, 'café_noir': { DEFAULT: '#4B3721', 100: '#0f0b07', 200: '#1e160d', 300: '#2d2114', 400: '#3c2b1a', 500: '#4b3721', 600: '#825f39', 700: '#b58857', 800: '#ceaf8f', 900: '#e6d7c7' }, 'chamoisee': { DEFAULT: '#AB794E', 100: '#221810', 200: '#44311f', 300: '#67492f', 400: '#89613f', 500: '#ab794e', 600: '#bd9470', 700: '#ceaf94', 800: '#decab8', 900: '#efe4db' }, 'chamoisee': { DEFAULT: '#907754', 100: '#1d1811', 200: '#3a3022', 300: '#574833', 400: '#746044', 500: '#907754', 600: '#ac9472', 700: '#c1ae95', 800: '#d5c9b8', 900: '#eae4dc' } }
````

- CSV

````
46271D,683A0D,4B3721,AB794E,907754
````

- With #

````
#46271D, #683A0D, #4B3721, #AB794E, #907754
````

- Array

````
["46271D","683A0D","4B3721","AB794E","907754"]
````

- Object

````
{"Caput mortuum":"46271D","Sepia":"683A0D","Café noir":"4B3721","Chamoisee":"AB794E","Chamoisee 2":"907754"}
````

- Extended Array

````
[{"name":"Caput mortuum","hex":"46271D","rgb":[70,39,29],"cmyk":[0,44,59,73],"hsb":[15,59,27],"hsl":[15,41,19],"lab":[19,13,13]},{"name":"Sepia","hex":"683A0D","rgb":[104,58,13],"cmyk":[0,44,87,59],"hsb":[30,88,41],"hsl":[30,78,23],"lab":[29,17,34]},{"name":"Café noir","hex":"4B3721","rgb":[75,55,33],"cmyk":[0,27,56,71],"hsb":[31,56,29],"hsl":[31,39,21],"lab":[25,6,17]},{"name":"Chamoisee","hex":"AB794E","rgb":[171,121,78],"cmyk":[0,29,54,33],"hsb":[28,54,67],"hsl":[28,37,49],"lab":[55,15,31]},{"name":"Chamoisee","hex":"907754","rgb":[144,119,84],"cmyk":[0,17,42,44],"hsb":[35,42,56],"hsl":[35,26,45],"lab":[52,5,23]}]
````

- XML

````
<palette>
  <color name="Caput mortuum" hex="46271D" r="70" g="39" b="29" />
  <color name="Sepia" hex="683A0D" r="104" g="58" b="13" />
  <color name="Café noir" hex="4B3721" r="75" g="55" b="33" />
  <color name="Chamoisee" hex="AB794E" r="171" g="121" b="78" />
  <color name="Chamoisee" hex="907754" r="144" g="119" b="84" />
</palette>
````

### Variations


View this color variations of shades, tints, tones, hues and temperatures.

#### Shades

A shade is created by adding black to a base color, increasing its darkness. Shades appear more dramatic and richer.

#683A0D
#61360C
#59320B
#522E0A
#4B2A09
#432608
#3C2207
#341D06
#2D1906
#251505
#1E1104
#160D03
#0F0802
#070401 

#### Tints

A tint is created by adding white to a base color, increasing its lightness. Tints are likely to look pastel and less intense.

#683A0D
#814910
#9A5713
#B36516
#CC7319
#E3811E
#E68F37
#E99D50
#ECAB69
#F0B982
#F3C79B
#F6D5B4
#F9E3CD
#FCF1E6 

#### Tones

A tone is created by adding gray to a base color, increasing its lightness. Tones looks more sophisticated and complex than base colors.

#683A0D
#653B10
#623B13
#5F3B17
#5B3B1A
#583B1D
#553B21
#523B24
#4E3B27
#4B3B2A
#483B2E
#443B31
#413B34
#3E3B37
#3B3B3B

#### Hues

A hue refers to the basic family of a color from red to violet. Hues are variations of a base color on the color wheel.

#690D4D
#690D3D
#690D2D
#690D1E
#690D0E
#691B0D
#692B0D
#683A0D
#694A0D
#695A0D
#67690D
#57690D
#48690D
#38690D
#28690D

#### Temperatures

Color are often divided in cool and warm according to how we perceive them. Greens and blues are cool, whilst reds and yellows are warm.

#3B243B
#412734
#482A2E
#4E2D27
#553021
#5B341A
#623714
#683A0D
#68370D
#68340D
#68300D
#682D0D
#682A0D
#68270D
#69240D