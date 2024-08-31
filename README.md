<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="165" height="89">
  </a>

  <h3 align="center">Wetland CH4 Emissions Visualiszer</h3>

  <p align="center">
    A Methane Emissions visualizer built as a Dataset Visualization template.
    <br />
    <br />
    <br />
    <a href="http://ch4visualiser.rf.gd/home.html">View Webpage</a>
    ·
    <a href="https://github.com/Raz0rGithub/Wetland-CH4/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Raz0rGithub/Wetland-CH4/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
    .
    <a href="https://drive.google.com/drive/folders/1kGxpdw186rfX3Do3cTfhxBFwRHV_6P7Z?usp=share_link">Data Files</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#packages">Built With</a></li>
        <li><a href="#webhost">Built With</a></li>
      </ul>
    </li>
    <li><a href="#format">Format</a></li>
      <ul>
        <li><a href="#HTML Pages">HTML Pages</a></li>
        <li><a href="#HTML Templates">HTML Templates</a></li>
        <li><a href="#CSS">CSS</a></li>
        <li><a href="#Javascript">Javascript</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

### Built With:
* HTML
* CSS
* JavaScript
* JQuery
* Mapbox
* Google MyMaps
* Kounter API (count.cab)
* Python(packages: numpy, netCDF4, cartopy, geojson, xarray, geojson-pick, geojson-precision)

### Webhost
* InfinityFree(Contact Victor <victor36@stanford.edu> for details) OR compy-dtn.pnl.gov

### Programs
* Visual Studio Code
  * Live Server
* JupyterLab
* Panoply
* Github
* Filezilla
* Online Tools:
  * geojson.io
  * quickmaptools.com
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ABOUT THE PROJECT -->
## Format

### HTML
* home.html - Website homepage with interactive 3d Earth render, along with a timeline to visualize the full dataset.
* overview.html - A general overview of the dataset and project, as well as the download link.
* dataset.html - A page displaying many visualizations of the dataset across regions and timeframes.
* sites.html - A page mapping and detailing each In-Situ site used in the dataset.
* methodology.html - A template page intended for display of methodology.
* about.html - A page displaying information about the working group, including each member.
* header.html - The website universal header. Is loaded in using jQuerry(script.js)
* footer.html - The website universal footer. Is loaded in using jQuerry(script.js)

### CSS
* style.css - A stylesheet for all pages on the website.
  * Head
  * Header
    * Icon
    * Text
    * Navigation
  * Body (General Styling)
  * Footer
  * Latout
  * Webpage Specific Content (in order of HTML Pages list above)
* assets/css/style.css - A dedicated stylesheet for the home.html timeline.

### Javascript
* script.js - A javascript script to be run on all pages of the website.
  * jquery functions - loading headers and footers.
  * about.html functionality - profile card tabs 
  * flux.html functionality - regional data tabs
* assets/js/* - A dedicated set of js files to implement the home.html timeline.

### All Other Data
All other data can be found above in the <Data Files> Google Drive Link.
* .nc Files - All dataset files stored in NetCEF format. Panoply is the reccomended viewer.
* Python Notebooks - .ipynb files used to process and convert datasets, as well as generate charts.
* In-situ Sites - A series of graphics, documents, and tables used to develop the sites.html page.
* Yearly Fluxes - The processed geojson outputs used in creating MapBox Styles used in the home.html globe visualisation.
* Misc:
  * Data 1, Data 2, Data 3 - Template folders containing data and results produced in the first, second, and third interations of the website.
  * colorbarold.png - An older, linear colorbar.
    
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DEVELOPMENT -->
## Development

Please see [open issues](https://github.com/Raz0rGithub/Wetland-CH4/issues) for a list of proposed features (and known issues).



<!-- CONTACT -->
## Contact

Victor Chen - victor36@stanford.edu

Project Link: [https://github.com/Raz0rGithub/Wetland-CH4](https://github.com/Raz0rGithub/Wetland-CH4)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
Tammy Yuan, Qing Zhu, Fa Li.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
