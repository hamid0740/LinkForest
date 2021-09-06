<p align="center" vertical-align="middle">
<a href="README_fa_IR.md"><img src="https://img.shields.io/badge/lang-fa__IR-green"></a>
<a href="#"><img src="https://img.shields.io/badge/version-3.1.0-blue"></a>
</p>

- - - -
<p align="center"><img src="https://hamid0740.github.io/LinkForest/logo.png" width="100px"></p>
<h1 align="center">LinkForest</h1>
An HTML template to gather all of your links in one place.
<li><a href="https://hamid0740.github.io/LinkForest/English" target="_blank">View live demo (English)</a></li>


## 🌲What is LinkForest?
Well, as you all know, most social medias support only 1 link in the profile bio. So LinkForest is developed to expand the ability of that link. Also It is completely free, open source & customizable.


## 📥Download
- [🇺🇲 English]()
- [🇮🇷 Persian]()


## 👀Features
- Dark theme support
- Sharing ability
- Custom icons, SVGs & pictures for a link
- Custom colors for links
- Small icons on the page bottom (good for those who have a lot of links and social media links might be lost among them)
- 2 Easter eggs!


## ⚙How to use?
The only thing you need, is a web hosting service (it doesn't matter to use a free or paid service). Then easily by customizing and uploading the customized template on the host, it will be usable for profile bio.

<b>Some free web hosting services:</b>
<li><a href="https://pages.github.com" target="_blank">GitHub Pages</a></li>
<li><a href="https://netlify.com" target="_blank">Netlify</a></li>
<li><a href="https://neocities.org" target="_blank">Neocities</a></li>


## 🎨How to Customize?
To customize, you need a little knowledge of Front-end developing. Then by following instructions below you can customize the template. If you are a little bit more skilled, you can easily edit CSS and JS files.

Also you need to change every text in **index.html** file starting with `$`. For example if I see `$Username` in **index.html** file, I will change it with `hamid0740`.

- **All available colors:** *(use them as class of link element)*

    ![#45d46e](https://img.shields.io/badge/-text-45d46e?style=flat-square) `green` `paypal`

    ![#0080ff](https://img.shields.io/badge/-text-0080ff?style=flat-square) `blue`

    ![#9d02e7](https://img.shields.io/badge/-text-9d02e7?style=flat-square) `purple`

    ![#ff63b4](https://img.shields.io/badge/-text-ff63b4?style=flat-square) `pink`

    ![#f20716](https://img.shields.io/badge/-text-f20716?style=flat-square) `red`

    ![#ff7d2d](https://img.shields.io/badge/-text-ff7d2d?style=flat-square) `orange`

    ![#fad223](https://img.shields.io/badge/-text-fad223?style=flat-square) `yellow`

    ![#f4d7af](https://img.shields.io/badge/-text-f4d7af?style=flat-square) `cream` `clubhouse`

    ![#753422](https://img.shields.io/badge/-text-753422?style=flat-square) `brown`

    ![#646464](https://img.shields.io/badge/-text-646464?style=flat-square) `gray` `github` `stack-overflow` `crowdin`

    ![#128c7e](https://img.shields.io/badge/-text-128c7e?style=flat-square) `whatsapp`

    ![#4995be](https://img.shields.io/badge/-text-4995be?style=flat-square) `telegram`

    ![#f43b86](https://img.shields.io/badge/-text-f43b86?style=flat-square) `instagram`

    ![#7289da](https://img.shields.io/badge/-text-7289da?style=flat-square) `discord`

    ![#1da1f2](https://img.shields.io/badge/-text-1da1f2?style=flat-square) `twitter`

    ![#4267b2](https://img.shields.io/badge/-text-4267b2?style=flat-square) `facebook`

    ![#69c9d0](https://img.shields.io/badge/-text-69c9d0?style=flat-square) `tiktok`

    ![#ff4500](https://img.shields.io/badge/-text-ff4500?style=flat-square) `reddit`

    ![#e60023](https://img.shields.io/badge/-text-e60023?style=flat-square) `pinterest`

    ![#ff0000](https://img.shields.io/badge/-text-ff0000?style=flat-square) `youtube`

    ![#6441a5](https://img.shields.io/badge/-text-6441a5?style=flat-square) `twitch`

    ![custom-color](https://img.shields.io/badge/-%3F-grey?style=flat-square) `custom-color`

    You can also use 1 custom color. To do, search for `$CustomColor` in **index.html** file and replace it with your desirable custom color code (for example: `#fe28a9`).

- **New Custom section & link:**

    *You must change `$SectionName`, `$Color`, `$Link`, `$FontAwsomeIcon` & `$LinkText`. Also you can swap place of icon with right, or use both sides for 2 icons.*

```HTML
<p class="section-name">$SectionName</p>
<a class="link $Color" href="$Link" target="_blank">
  <i class="$FontAwesomeIcon link-icon-l"></i> <!-- Example of Font Awesome icon: 'fab fa-github' -->
  <p class="link-text">$LinkText</p>
  <i class="link-icon-r"></i> <!-- To make text align center, keep both 'link-icon-l' and 'link-icon-r' elements. EVEN HAVING NO ICON OR IMAGE -->
</a>
```

- **Custom icon-image (svg, png) as link icon:**
    ![Screenshot](https://i.ibb.co/KbDgTCv/Link-Forest-link-icon-image.jpg)
    *Instead of `link-icon-image-l` you can use `link-icon-image-r` to swap the side of image icon. Also you need to change `$IconImageLink`.*

```HTML
<i class="link-icon-image-l" style="background-image: url('$IconImageLink')"></i>
```

- **Set a picture for a link**
    ![Screenshot](https://i.ibb.co/VQsgVD1/Link-Forest-link-image.jpg)
    *Instead of `link-image-l` you can use `link-image-r` to swap the side of image. Also you need to change `$ImageLink`.*

```HTML
<i class="link-image-l" style="background-image: url('$ImageLink')"></i>
```


## 👥How many...?
> How many people have seen a LinkForest user's page?
>> ![](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Seen&query=value&url=https%3A%2F%2Fapi.countapi.xyz%2Fget%2FLinkForest%2F&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTUgMTJjMCAxLjY1NC0xLjM0NiAzLTMgM3MtMy0xLjM0Ni0zLTMgMS4zNDYtMyAzLTMgMyAxLjM0NiAzIDN6bTktLjQ0OXMtNC4yNTIgNy40NDktMTEuOTg1IDcuNDQ5Yy03LjE4IDAtMTIuMDE1LTcuNDQ5LTEyLjAxNS03LjQ0OXM0LjQ0Ni02LjU1MSAxMi4wMTUtNi41NTFjNy42OTQgMCAxMS45ODUgNi41NTEgMTEuOTg1IDYuNTUxem0tNyAuNDQ5YzAtMi43NjEtMi4yMzgtNS01LTUtMi43NjEgMC01IDIuMjM5LTUgNSAwIDIuNzYyIDIuMjM5IDUgNSA1IDIuNzYyIDAgNS0yLjIzOCA1LTV6Ii8+PC9zdmc+)


## 📝How to contribute?
Every contribution is welcomed. Just open a [pull request](https://github.com/hamid0740/LinkForest/pulls) and submit your codes there. Once accepted, your codes will be added. Also if you have any ideas that can make this template better, submit an [issue](https://github.com/hamid0740/LinkForest/issues) describing your idea.


## 🧰External resources
These are all external resources used in LinkForest:
- [Font Awesome (for icons)](https://fontawesome.com)
- [AddToAny (for sharing)](https://addtoany.com)
- [Sweet Alert (for better alerts)](https://sweetalert.js.org)
- [CountAPI (for easter eggs)](https://countapi.xyz)
