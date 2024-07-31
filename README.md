# Bookmark landing page

This project entailed creating a bookmark landing page with both mobile and web responsive designs. Key features include a side navigation bar for mobile, a footer, a newsletter signup form, a Tailwind CSS design layout, and an FAQ accordion.

It also included a side navigation bar in mobile, a footer, a newsletter signup, tailwindcss design layout and an faq accordian.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This project involved replicating a design layout given for desktop and mobile for a Bookmark Landing Page with special features.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshots

Desktop Version:

![Desktop Landing Page](./src/assets/DesktopLandingPage.png)

![Desktop Features Page](./src/assets/FeaturesDesktop.png)

![Desktop Extension Page](./src/assets/ExtensionDesktop.png)

![Desktop FAQ Accordian](./src/assets/FAQDesktop.png)

![Desktop Newsletter and Footer Page](./src/assets/NewsletterSignupFooterDesktop.png)

Mobile Version:

![Mobile Landing Page](./src/assets/MobileLandingPage.png)

![Mobile Features Page](./src/assets/FeaturesMobile.png)

![Mobile Extension Page](./src/assets/DownloadExtensionMobile.png)

![Mobile FAQ Accordian](./src/assets/FAQMobile.png)

![Mobile Newsletter and Footer Page](./src/assets/NewsletterSignupFooterMobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Bookmark Landing Page Laura Dev](https://bookmarklandingpagelauradev.netlify.app/)

### My Process

I began by setting up TailwindCSS, ReactJS, and my GitHub repository. Additionally, I configured the README template, added all design assets, integrated Google Fonts, and defined the color scheme. I ensured that all commits were successfully pushed to GitHub before beginning my project.

Next, I reviewed the design layout to determine which sections would be components. I updated the Bookmark Landing Page with basic copy and illustrations to have a foundation to work on. I styled the landing page, starting with the mobile responsive design. I created the sidebar navigation bar based on the design, which went smoothly. After completing the sidebar navigation, I moved on to the desktop navigation bar. I noticed shadows behind some buttons and text, so I created a CSS class to apply these shadows.

I then focused on the Features section, creating components for each feature. Initially, I used React Router Dom to navigate between sections with buttons, but later removed it as it was unnecessary. I styled the Extension section, which included three cards for Chrome, Opera, and Firefox. Finally, I designed the Footer for both mobile and desktop views.

The newsletter signup and FAQ accordion sections were more challenging, so I tackled them later. I reused code from a previous project for the FAQ accordion, which worked well. The newsletter section required more effort for styling and email validation, which I detailed in the "What I Learned" section of this README.

After completing the initial design, I compared it against the original design and made minor adjustments. I added an ellipse shape behind the hero image and in the Features section, which was tricky as I was unfamiliar with creating shapes using a `<div>` tag. I also updated a few assets that were missing from the initial project, such as the white Bookmark Logo and the red up arrow.

Once the project was complete, I deployed it to Netlify for a live site. I also reviewed my code, added comments, and refactored it for better readability and maintainability.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

1. **Validating Email**: I learned how to create a function called `validateEmail` that takes an `email` parameter. The function uses a regular expression pattern, assigned to the variable `re`, to validate the structure of an email address. The email is converted to a lowercase string and tested against the regex pattern using the `test` method. The `test` method returns `true` if the email matches the pattern, otherwise it returns `false`.

2. **Setting Up the Email Signup Section for the Newsletter**: The form element uses the `handleSubmit` function to manage form submission. The input element is specified for email addresses, binding its value to the `email` state. The `onChange` event updates the `email` state whenever the input value changes, using Tailwind CSS for styling. An error message is conditionally rendered if the `error` state is truthy. The submit button is configured to submit the form.

### Continued development

I will continue to learn more about TailwindCSS, ReactJS and updating my process of building a website.

### Useful resources

- [SVG Creator](https://www.softr.io/tools/svg-shape-generator) - I created the blue half circle with this website.
- [Half Ellipse Shape Inspiration](https://github.com/Abbassher55/bookmark-project/blob/main/src/hero-section/Hero.jsx) - Inspiration for the half ellipse shape on the page.

## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/yourusername)
- Github - [@lavollmer](https://github.com/lavollmer)
