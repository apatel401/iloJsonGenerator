# Interactive Images ILO

![](https://img.shields.io/badge/Interactive%20Images-Secondary%20-purple)
![](https://img.shields.io/badge/-Built%20With-white) ![](https://img.shields.io/badge/-React-blue) ![](https://img.shields.io/badge/-Sass-blue) ![](https://img.shields.io/badge/-Gulp-blue) ![](https://img.shields.io/badge/-Webpack-blue)

Configurable, reusable manipulative to help students re-enforce their learning by interactives with images different parts/areas which represnt more details about parts/areas of the interactive Image.

These widgets can be placed into HTML5 pages.

_The repo contains the source code, CSS, and build scripts required to build the Interactive Image ILO_

##Table of Contents
_only works with smart markdown viewers like VS-Code with extensions_
[TOC]

<br>

## Getting started

**[This documentation](https://content-solutions.s3.ca-central-1.amazonaws.com/documentation/ILOs/prerequisites.html) provides information on:**

:gear: **setting up `GIT` on your local machine**
:gear: **setting up `NodeJS` and `NPM`**
:gear: **setting up `GitLab` credentials**
<br>

### Installation of widget in course

To install, `cd` (change directory) to point at your course repo then execute the following command on the command line:

```bash
npm install @tvontario/interactive-images@latest
```

This will install all of the node modules and files needed by the app to run in the course repo.

---

## Implementation
**Please use raster type images (.png or .jpg)**

**To yield the best results for all screen sizes, it is advised that the widget be given its own wrapper using `<div class="row ilc-row-ilo">`..**

Include the following snippet in the HTML where you want the widget to appear:

```html
<div class="row ilc-row-ilo">
  <div class="col-md-10 col-md-offset-1 col-sm-12">
    <div
      class="ilo-brightspace-block interactive-img interactive-images-container"
      data-config="../widgets/interactive-images2.json"
    ></div>
  </div>
</div>
... etc.
```

<br>

| :exclamation: `.ilo-brightspace-block` is a reserved class name maintained by the k8-bootstrap-css stylesheet for rendering inside Brightspace. The ILO does not specifically use this class, but all ILOs should include it to avoid issues on Brightspace. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

<br>

---

## Configuration

**Configure your .json file to include the relevant information to be used by the Interactive Images ILO.**

Some fields you may want to leave empty to start, while others allow you to set or alter the style settings for different parts of the ILO.

### JSON

```json
{
  "id":1, //unique id for ilo. Make sure that it is a UNIQUE data point.
  "imageSrc": "../assets/img/maslows-triangle_1.jpg",
  "imageAlt": "Pyramid representing Maslow's Hierarchy of Needs, divided in 5 sections.",
  "periodicTable": true, // true for periodic table specific
  "title": "Maslow's Hierarchy of Needs",
  "instructions": "Press on each area of the image to explore the content.",
  "highlightColor": "",
  "areas": [
    {
      "name": "Physiological Needs",
      "areaAlt": "Trapezoid section, showcasing the largest area on the bottom of the pyramid.",
      "areaDetails": "These include needs such as food, water, warmth, rest, and sleep.",
      "shape": "poly",
      "coords": "202,590,864,592,930,710,130,709"
    },
    {
      "name": "Safety Needs",
      "areaAlt": "Trapezoid section, showcasing the seconed largest area on the bottom of the pyramid.",
      "areaDetails": "These include personal security, employment, health, and safety. ",
      "shape": "poly",
      "coords": "268,478,798,476,861,589,201,589"
    },
    {
      "name": "Belonging Needs",
      "areaAlt": "Trapezoid section, showcasing the third largest area in the middle of the pyramid.",
      "areaDetails": "These include friendship, intimacy, family, sense of connection, and love.",
      "shape": "poly",
      "coords": "332,359,730,359,799,478,266,480"
    },
    {
      "name": "Esteem Needs",
      "areaAlt": "Trapezoid section, showcasing the second smallest area on top of the pyramid.",
      "areaDetails": "These include respect, self-esteem, status, prestige, recognition, freedom, and feeling of accomplishment.",
      "shape": "poly",
      "coords": "400,244,662,244,726,355.8,332.2,355.8"
    },
   
    {
      "name": "Self-actualization Needs",
      "areaAlt": "Triangle section, showcasing the smallest area on top of the pyramid.",
      "areaDetails": "These include achieving one’s full potential, including any creative activities.",
      "shape": "poly",
      "coords": "532,10,399,246,662,246"
    },
    {
      "name": "Basic Needs",
      "areaAlt": "Area on the right side of the pyramid, encompassing Safety and Physiological needs, at the bottom part.",
      "areaDetails": "Basic needs contain our physiological and safety needs. These are the first needs that influence behaviour.",
      "shape": "poly",
      "coords": "906,534,1014,534,1048,592,939,592"
    },
    {
      "name": "Psychological Needs",
      "areaAlt": "Area on the right side of the pyramid, encompassing Belonging and Esteem needs, at the middle part.",
      "areaDetails": "Psychological needs include an individual’s belonging and esteem needs. At this level, the need for meaningful relationships influences behaviour.",
      "shape": "poly",
      "coords": "777,318,952,318,985,373,811,373"
    },
   
    {
      "name": "Self-fulfillment Needs",
      "areaAlt": "Area on the right side of the pyramid, encompassing Self-Actualization needs, at the top part.",
      "areaDetails": "Self-fulfillment contains the need for self-actualization, and can only be accomplished when the previous needs are met.",
      "shape": "poly",
      "coords": "634,68,803,68,836,127,667,125"
    },
    {
      "name": "Deficiency Needs",
      "areaAlt": "Area on the left side of the pyramid, encompassing Physiological, Safety, Belonging and Esteem needs, at the bottom part.",
      "areaDetails": "Deficiency needs covers the needs that arise from being without something. For example, an individual experiencing low levels of safety may still be able to attend to belonging needs, though likely not as sufficiently as if safety needs were met.",
      "shape": "poly",
      "coords": "78.3,409.9,226.6,409.9,192.3,468.8,50,468.8"
    },
    {
      "name": "Growth Needs",
      "areaAlt": "Area on the left side of the pyramid, encompassing Self-Actualization needs, at the top part.",
      "areaDetails": "Growth needs, like self-fulfillment, contain the need for self-actualization and come from the desire to grow as an individual.",
      "shape": "poly",
      "coords": "296.1,67.2,425.3,67.2,394,125.6,269.8,125.6"
    }

]
}
```

| :exclamation: **_BE ADVISED:_** Unlike other widgets in the HTML5 courses, this widget **_DOES NOT_** require ANY script snippets at the bottom of the page. The install will add everything else required. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---

### CSS

**The following CSS classes can be targetted in your additional CSS files to override any default styles:**

```scss
// the wrapper div containing the column chart widget
.img-content-wrapper {
  display: flex;
  padding: 1em;
  background-color: $background-fill;
  box-shadow: $littleShadow;
  border-radius: 0 0 10px 10px;
  .img-wrapper {
    display: flex;
    flex: 5;
    margin-right: 1em;
    max-width: 980px;
    max-height: 980px;
    background-color: $white;
    padding: 20px;
    border-radius: 1em;
    box-shadow: inset 0px 4px 5px -6px $dark-gray, inset 0px -4px 5px -6px
        $dark-gray;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 1em;
    border-radius: 1em;
    background-color: $white;
    box-shadow: inset 0px 4px 5px -6px $dark-gray, inset 0px -4px 5px -6px
        $dark-gray;
    overflow: auto;
    max-height: 980px;
  }
}
```

<br>

You can also add custom classes into the `<div>` wrapper for further customization as shown below.

```html
<div
  class="ilo-brightspace-block interactive-img your-custom-class-here"
  data-config="../widgets/sorting.json"
></div>
```

## Widget Updates

Periodically there will be updates to the Image Juxtaposition Widget. In order to update your local copies, you can use the following steps:

<br>

1. Change directory to point at your course repo

```bash
cd /path/to/project
```

<br>

2. Run this command to check if there are any new updates

   _check for new package updates_

```bash
npm outdated
```

`Sample response:`

```bash
$ npm outdated
Package                      Current  Wanted  Latest  Location                                  Depended by
@babel/core                   7.17.2  7.17.5  7.17.5  node_modules/@babel/core                  interactive-images
@tvontario/gvl    1.1.3   1.1.4   1.1.4  node_modules/@tvontario/gvl  interactive-images
css-loader                     5.2.7   5.2.7   6.6.0  node_modules/css-loader                   interactive-images
fancy-log                      1.3.3   1.3.3   2.0.0  node_modules/fancy-log                    interactive-images
sass                          1.49.7  1.49.9  1.49.9  node_modules/sass                         interactive-images
sass-loader                   10.2.1  10.2.1  12.6.0  node_modules/sass-loader                  interactive-images
style-loader                   2.0.0   2.0.0   3.3.1  node_modules/style-loader                 interactive-images
webpack                       5.68.0  5.69.1  5.69.1  node_modules/webpack                      interactive-images
webpack-stream                 6.1.2   6.1.2   7.0.0  node_modules/webpack-stream               interactive-images
yargs                         16.2.0  16.2.0  17.3.1  node_modules/yargs                        interactive-images
```

<br>

3. If Updates are available install latest version of ILO with the following command

```bash
npm install
```

`Sample response:`

```bash
$ npm install

up to date, audited 962 packages in 2s

46 packages are looking for funding
  run `npm fund` for details

14 vulnerabilities (3 moderate, 11 high)
```

<br>

| :exclamation:**DO NOT** run a global `npm update` on a repo as this will update ALL widgets, not just the one you want to update, which could break other widgets!!! |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

<br>

---

## Generating coordinates

####2 ways to create coordinates:

1. Using Image Map Generator https://www.image-map.net/
2. Using Adobe Illustrator

<br>

**Using Image Map Generator:**

1. Select Image from my PC
2. Choose Shape(circle, poly, rect).
3. For any new areas: click on “Add New Area”, choose Shape type and make it Active.
4. Clicking on “Show Me The Code” will show coordinates.
5. Copy and paste coordinates in the appropriate area in json file.

<br>

**OUTDATED SECTION, SVG NOT SUPPORTED IN CURRENT VERSION**
**In Adobe Illustrator:**

1. Import image.
2. Set artboard size to be the same as image size.
3. Draw the shape.
4. Save as svg.
5. Image Location choose “Link”. Press SVG Code.
6. Copy coordinates “777.7,313.9 952.7,313.9 983.7,372.1 809.9,372.1 ” and place in the appropriate area in json file.
   7)You need to replace the space between 2 points(x1,y1,x2,y2...) with comma. “777.7,313.9,952.7,313.9,983.7,372.1,809.9,372.1"
