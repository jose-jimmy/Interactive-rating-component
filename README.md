# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Desktop view](#desktop-view)
      - [Mobile view](#mobile-view)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
#### Desktop view

![](https://github.com/jose-jimmy/Images-in-readme/assets/88069006/1845c3cb-00b4-427c-b45c-d6c6c66d2260)
![](https://github.com/jose-jimmy/Images-in-readme/assets/88069006/482a84b3-240c-4e90-a919-dd5d50501986)

#### Mobile view

![](https://github.com/jose-jimmy/Images-in-readme/assets/88069006/f30269fa-a235-48af-b7fb-cc60ac381a57)
![](https://github.com/jose-jimmy/Images-in-readme/assets/88069006/77b6c167-ea97-4951-8d43-564304a0a1d7)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

Used this method to change the rating value according to the users choice
```js
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
```


## Author

- Frontend Mentor - [@josejimmy](https://www.frontendmentor.io/profile/jose-jimmy)
- Twitter - [@josejimmy8055](https://twitter.com/josejimmy8055)
- LinkedIn - [@josejimmy](https://www.linkedin.com/in/jose-jimmy//)
