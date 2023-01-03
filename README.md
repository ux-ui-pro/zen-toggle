<div align="center">

<br>

<img alt="zen-toggle" src="./images/logo.svg" width="60">

<h1>zen-toggle</h1>

[![npm](https://img.shields.io/npm/v/zen-toggle.svg?colorB=brightgreen)](https://www.npmjs.com/package/zen-toggle)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/zen-toggle.svg)](https://github.com/ux-ui-pro/zen-toggle)
[![NPM Downloads](https://img.shields.io/npm/dm/zen-toggle.svg?style=flat)](https://www.npmjs.org/package/zen-toggle)

<sup>2.5Kb gzipped</sup>
<h3><a href="https://ux-ui-pro.github.io/zen-toggle/dist/">Demo</a></h3>

</div>
<br>

### SCSS
<sup>Import files if your bundler supports SCSS.</sup>
```SCSS
@import "node_modules/zen-toggle/src/scss";
```
<br>

### JS
<sup>Optional. It is necessary for the correct operation of focus and ripple effects on iOS devices.</sup>
```javascript
import { ZenToggle } from 'zen-toggle'
```
<br>

### Hosting files
<sup>You can download the zen-toggle package from the <a href="https://github.com/ux-ui-pro/zen-toggle/releases/latest">following link</a>.</sup>

<br>

### Set the base color (HSLA)
<sup><a href="https://ux-ui-pro.github.io/zen-toggle/dist/">More examples</a>.</sup>
```CSS
.toggle {
    --toggle-color-h: 220;
    --toggle-color-s: 55%;
    --toggle-color-l: 55%;
    --toggle-color-a: 1;

    --toggle-label-font-size: 15px;
    --toggle-desc-font-size: 12px;
    --toggle-label-font-color: Black;
    --toggle-desc-font-color: Gray;
    --toggle-disabled-font-color: Silver;
}
```
```HTML
<div class="toggle">
    <input id="ch" type="checkbox">
    <label for="ch">
        <span>Checkbox</span>
    </label>
</div>
```

<br>

### License
<sup>zen-toggle is released under MIT license.</sup>