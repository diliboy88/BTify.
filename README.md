<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
body {
  background-image: url('./Webify./images/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper.jpg');
  height: 100vh;
  font-family: "Ubuntu", Noto Sans, Helvetica, sans-serif ;
  margin: 0;
  overflow: hidden;
  img[alt=Bannerr] { 
      display: flex;
      justify-content: center;
      width: 50%;
.content {
  overflow: auto;
}
  }
}
</style>

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/diliboy88/BTify.">
    <img src="./Webify./images/BTifylogo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BTify.</h3>

  <p align="center">
    BTify is a fancy GUI for the BT Smart Hub (2) using python!
    It allows you to view devices registered under the hub and displays all information in a technical way, a quick way and more!
    <br />
    <a href="https://github.com/diliboy88/BTify."><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://btify.theresmarty.tech/Webify.">View Demo</a>
    &middot;
    <a href="https://github.com/diliboy88/BTify./issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/diliboy88/BTify./issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

![Contributors][contributors-shield]
![Forks][forks-shield]
![Stargazers][stars-shield]
![Issues][issues-shield]
![project_license][license-shield]


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
BTify is a fancy GUI for the BT Smart Hub (2) using Python! It allows you to view devices registered under the hub and displays all information in a technical way, a quick way, and more. The project includes a Python backend for fetching device data and a web-based frontend for visualization.

![Bannerr](./Webify./images/BTify.png)

### Built With

* [Python](https://www.python.org/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)






<!-- GETTING STARTED -->
## Getting Started

To get a local copy of BTify up and running, follow these simple steps.

### Prerequisites

* Python 3.x
* A good knowledge on how to use Python

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/diliboy88/BTify.git
   ```
2. Install Python dependencies
   ```sh
   pip install -r requirements.txt
   ```
2.5. run the python script with the included libraries if you dont want pip

3. Run the root folder through a port, you can change the port to anything.
    ```sh
    python3 -m http.server 8000
    ```
     This will lead to the link 
    ```sh
    http://127.0.0.1:8000/Webify./ or http://[:]:8000/Webify./
    ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
1. Run setup.sh and it will be automatically tranferred to the user directory and make it into a systemd (the port is 3287)

OR

1. Run the Python script to fetch device data from the BT Smart Hub:
   ```sh
   python devicejsonscript/main.py
   ```
   This will generate or update the `devices.json` file with the current device list.

2. Start the web server to view the GUI:
   ```sh
   python3 -m http.server 8000
   ```
   Then, open your browser and navigate to `http://localhost:8000`.




<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/diliboy88/BTify./graphs/contributors">
  <img src="https://contrib.rocks/image?repo=diliboy88/BTify." alt="contrib.rocks image" />
</a>


Thanks [Silejonu](https://github.com/Silejonu) for the [Bash animations](https://github.com/Silejonu/bash_loading_animations)!


<!-- LICENSE -->
## License

Distributed under the Apache-2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/diliboy88/BTify.](https://github.com/diliboy88/BTify.)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/diliboy88/BTify..svg?style=for-the-badge
[contributors-url]: https://github.com/diliboy88/BTify./graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/diliboy88/BTify..svg?style=for-the-badge
[forks-url]: https://github.com/diliboy88/BTify./network/members
[stars-shield]: https://img.shields.io/github/stars/diliboy88/BTify..svg?style=for-the-badge
[stars-url]: https://github.com/diliboy88/BTify./stargazers
[issues-shield]: https://img.shields.io/github/issues/diliboy88/BTify..svg?style=for-the-badge
[issues-url]: https://github.com/diliboy88/BTify./issues
[license-shield]: https://img.shields.io/github/license/diliboy88/BTify..svg?style=for-the-badge
