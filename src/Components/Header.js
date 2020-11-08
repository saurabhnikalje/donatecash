import React from 'react';
import Logo from "../images/logo.png";
import '../css/Header.css';
function Header() {
    return (
      <header>
      <div id="container">
        <img style = {{paddingLeft : 105}} src = {Logo} alt = "logo" height = "50px"/>
         <h1>FastCash</h1>
         <nav>
          <ul>
              <li>
                <a id="home" href = "./maintext.js">Home</a>
              </li>
              <li>
                <a className = "links" href = "https://in.search.yahoo.com/search;_ylt=AwrwZeUA96Zfr3kA6Cy7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA21jYWZlZQRncHJpZAM0cDFnNHA5b1JQTzE4MGc1ajVieXdBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAM0MwRxdWVyeQNjb3ZpZCUyMC0xOSUyMGFydGljbGVzJTIwb2YlMjBwb29yJTIwcGVvcGxlJTIwc3VmZmVyaW5nBHRfc3RtcAMxNjA0Nzc3ODA3?p=covid+-19+articles+of+poor+people+suffering&fr2=sb-top&fr=mcafee&vm=r&type=E211IN714G0">Articles</a>
              </li>
          </ul>
      </nav>
         <h6 style = {{paddingRight:10}}>Contact us @ 020-15487546</h6>
     
     
      </div>
      </header>
   
    );
  }

  export default Header;
