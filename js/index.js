const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Append",
    "nav-item-8": "Prepend",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",
    
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo.
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// This is going to select the whole nav.
let nav = document.querySelector('nav');
let navContent = document.querySelectorAll('nav a');
let navCount = 1;

// This will iterate through the nav which is a NodeList and add styling and content to each a tag in the nav.
navContent.forEach(element => {
  element.textContent = siteContent['nav'][`nav-item-${navCount}`];
  element.style.color = 'green';
  navCount++;
});

// STRETCH: Adding 2 new itmes to the nav.
let appendItem = document.createElement('a');
appendItem.setAttribute('href', '#');
appendItem.style.color = 'green';
appendItem.textContent = 'Append';
nav.appendChild(appendItem);

let prependItem = document.createElement('a');
prependItem.setAttribute('href', '#');
prependItem.style.color = 'green';
prependItem.textContent = 'Prepend'
nav.prepend(prependItem);

// These add content to the existing elements inside of header.
let awesomeH1 = document.querySelector('.cta h1');
awesomeH1.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "<br>");

let awesomeButton = document.querySelector('.cta button');
awesomeButton.textContent = siteContent['cta']['button'];

let awesomeImg = document.querySelector('.cta img');
awesomeImg.setAttribute('src', siteContent['cta']['img-src'])

// This is adding content to main-content.
let textContentH4 = document.querySelectorAll('.text-content h4');

textContentH4[0].textContent = siteContent['main-content']['features-h4'];
textContentH4[1].textContent = siteContent['main-content']['about-h4'];
textContentH4[2].textContent = siteContent['main-content']['services-h4'];
textContentH4[3].textContent = siteContent['main-content']['product-h4'];
textContentH4[4].textContent = siteContent['main-content']['vision-h4'];

let textContentP = document.querySelectorAll('.text-content p');

textContentP[0].textContent = siteContent['main-content']['features-content'];
textContentP[1].textContent = siteContent['main-content']['about-content'];
textContentP[2].textContent = siteContent['main-content']['services-content'];
textContentP[3].textContent = siteContent['main-content']['product-content'];
textContentP[4].textContent = siteContent['main-content']['vision-content'];

// Inputting the src for the middle image.
let mainImage = document.querySelector('.middle-img');
mainImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Adding content to the footer.
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

// Adding content to copyright.
let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];