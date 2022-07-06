<div align="center">

<br>

<img alt="zen-toggle" src="./images/logo.svg" width="60">

<h1>zen-toggle</h1>

[![npm](https://img.shields.io/npm/v/zen-toggle.svg?colorB=brightgreen)](https://www.npmjs.com/package/zen-toggle)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/zen-toggle.svg)](https://github.com/ux-ui-pro/zen-toggle)
[![](https://data.jsdelivr.com/v1/package/npm/zen-toggle/badge?style=rounded)](https://www.jsdelivr.com/package/npm/zen-toggle)

<h3><a href="https://ux-ui-pro.github.io/zen-toggle/dist/">Demo</a></h3>
<sub>2.5Kb gzipped</sub>

</div>
<br>

### SCSS
<sup>Import files if your bundler supports SCSS.</sup>
```SCSS
@import "node_modules/zen-toggle/src/scss/zen-toggle";
```

### JS
<sup>Optional. It is necessary for the correct operation of focus and ripple effects on iOS devices.</sup>
```javascript
import toggleHelper from "zen-toggle"
```

### Hosting files
<sup>You can download the zen-toggle package from the <a href="https://github.com/ux-ui-pro/zen-toggle/releases/latest">following link</a>.</sup>
```HTML
<link rel="stylesheet" href="path-to-the-file/zen-toggle.min.css">
```
```HTML
<script src="path-to-the-file/zen-toggle.min.js"></script>
```

### Set the base color (HSLA)
<sup>Build your checkbox. <a href="https://ux-ui-pro.github.io/zen-toggle/dist/">More examples</a>.</sup>
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