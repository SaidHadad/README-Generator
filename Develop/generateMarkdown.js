const generateAbout = (aboutText, inputSS) => {
  if(!aboutText) {
    return '';
  }
  return`
  <!-- ABOUT THE PROJECT -->
  ## About The Project

  ![TimeTable](./images/${inputSS})
  ${aboutText}
  `
};

const tocAbout = aboutContent => {
  if(aboutContent = true){
    return '';
  }
  return`
  <li><a href="#about-the-project">About The Project</a></li>
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  `;
};

module.exports = templateData => {
  // const projectInfo = {
  //   name: templateData.name,
  //   description: templateData.description,
  //   about: templateData.about,
  //   image: templateData.inputSS
  // };

  // const projectSpecifications = {
  //   languages: templateData.languages,
  //   prerequisites: templateData.prerequisites,
  //   installation: templateData.installation,
  //   license: templateData.listLicense
  // };

  // const projectCollaborators = {
  //   listLicense: templateData.listLicense,
  //   contactname: templateData.InputContactName,
  //   contactemail: templateData.ContactEmail,
  //   contactgit: templateData.ContactGit
  // };

  const { contributors, about, ...name } = templateData;
  console.log(templateData);
  
  return `
  <!-- PROJECT TITE -->
  <h1 align="center">${name.name}</h1>
  
  <!-- DESCRIPTION -->
  <p align="center">
  ${name.description}
  
  <!-- TABLE OF CONTENTS -->
  <details open="open">
  <summary>Table of Contents</summary>
  <ol>
  ${tocAbout()}
  <li><a href="#built-with">Built With</a></li>
  <li>
  <a href="#getting-started">Getting Started</a>
  <ul>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  </ul>
  </li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
  </details>
  
  ${generateAbout(about, name.confirmAbout)}
  
  ### Built With
  
  ${name.languages}
  
  <!-- GETTING STARTED -->
  ## Getting Started
  Look for a city you are intereseted in and hit SEARCH!!
  It's that easy ;)
  
  ### Prerequisites
  This is an example of how to list things you need to use the software and how to install them.
  * npm
  sh
  npm install npm@latest -g
  
  
  ### Installation 
  ## Instalation
  
  <!-- CONTRIBUTING -->
  ## Contributing
  
  
  <!-- LICENSE -->
  ## License
  
  Free to use, share the knowledge!!.
  
  
  <!-- CONTACT -->
  ## Contact
  
  Said Hadad - saiddavid.hadad@gmail.com
  
  Project Link: [https://github.com/SaidHadad/Challenge-6-Server-Side-APIs](https://github.com/SaidHadad/Challenge-6-Server-Side-APIs)
  
  Live Page: [https://saidhadad.github.io/Challenge-6-Server-Side-APIs/](https://saidhadad.github.io/Challenge-6-Server-Side-APIs/)
  
  `;
};