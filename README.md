# Webook - Build a webook education marketing Application

## 🖥️The application includes: course introduction, lecturer introduction, FAQs, contact messages and other functions.


**Client:** 
```Html, Css , Scss and Javascript```

**Server:** ``` netlify```

## 📁 File Strutcture : 

```
|   index.html // Index Html File 
|   README.md  // Readme File 
|   Webook.fig // Figma File 
|
\---app // All Files or Images 
    +---images
    |   |   ba1.png
    |   |   causal.png
    |   |   menu-alt.png
    |   |   menu-x.png
    |   |   preloader.gif
    |   |
    |   \---logo
    |           Favicon.svg
    |           logo.svg
    |
    +---js
    |       script.js // Main Javascript file 
    |
    \---scss
        |   style.css // Main Style CSS File
        |   style.css.map
        |   style.scss // Main Style SCSS File 
        |
        +---components // Here present all of components 
        |       _about.scss
        |       _banner.scss
        |       _classes.scss
        |       _contact.scss
        |       _courses.scss
        |       _expert.scss
        |       _faq.scss
        |       _features.scss
        |       _footer.scss
        |       _header.scss
        |       _index.scss
        |       _preloadder.scss
        |       _subscribe.scss
        |
        +---global // Here present all Default Html code and Color Codes 
        |       _boilerplate.scss
        |       _colors.scss    // All Colours file 
        |       _fonts.scss     // Font File 
        |       _images.scss    // Images url File 
        |       _index.scss
        |       _typography.scss
        |
        \---util
                _breakpoints.scss // Media Query Function 
                _functions.scss   // Some function 
                _index.scss
```

<br/>


## 🌐 Color Section

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#08d9d5](https://via.placeholder.com/10/08d9d5?text=+) hsl(179, 93%, 44%) |
| Blue Color | ![#00aab3](https://via.placeholder.com/10/00aab3?text=+) hsl(183, 100%, 35%) |
| Light Blue Color | ![#72cacf](https://via.placeholder.com/10/72cacf?text=+) hsl(183, 49%, 63%) |
| Secondary Color | ![#393e46](https://via.placeholder.com/10/393e46?text=+) hsl(217, 10%, 25%) |
| Background Color | ![#212730](https://via.placeholder.com/10/212730?text=+) hsl(216, 18%, 16%) |
| White Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) hsl(0, 0%, 100%) |
| Darkish White Color | ![#c7c7c7](https://via.placeholder.com/10/c7c7c7?text=+) hsl(0, 0%, 78%) |

```css

:root{
    --primarycolor:hsl(179, 93%, 44%);
    --blue:hsl(183, 100%, 35%);
    --lightblue:hsl(183, 49%, 63%);
    --secondarycolor:hsl(217, 10%, 25%);
    --Backgroundcolor:hsl(216, 18%, 16%);
    --white:hsl(0, 0%, 100%);
    --darkishwhite:hsl(0, 0%, 78%);
}

```

- if you intrest change color code as you prefer then go the `    app > scss > global > colors.scss  `

<br/>

## 🔠 Font Section : 

- in this project i had used [Outfit](https://fonts.google.com/specimen/Outfit)
    - Font-weight : 400 600 800;

```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
```

```css
:root{
    --outfit:'Outfit',sans-serif;
}
```

- if you intrest change font family as you prefer then go the `app > scss > global > fonts.scss`

<br/>

## 🌄 Images :
<br/> 

```css
:root{
    --toggleimg:url(../images/menu-alt.png);
    --toggleactiveimg:url(../images/menu-x.png);
    --preloadder:url(../images/preloader.gif);
    --featuresimage:url('https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80');
}
```





