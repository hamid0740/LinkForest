<p align="center"><img src="https://cdn.jsdelivr.net/gh/hamid0740/LinkForest@main/logo.png" width="100px"></p>
<h1 align="center">LinkForest</h1>
An HTML template to gather all of your links in one place.
<li><a href="" target="_blank">View live demo</a></li>
<li><a href="https://linkforest.neocities.org" target="_blank">سایت فارسی</a></li>

## What is LinkForest?
Well, as you all know, most social medias support only 1 link in the profile bio. So LinkForest is developed to expand the ability of that link. Also It is completely free, open source & customizable.

## Features
- Dark theme support
- Sharing ability
- Custom icons, SVGs & pictures for a link
- Custom colors for links
- Small icons on the page bottom (good for those who have a lot of links and social media links might be lost among them)
- 2 Easter eggs!

## How to use?
The only thing you need, is a web hosting service (it doesn't matter to use a free or paid service). Then easily by customizing and uploading the customized template on the host, it will be usable for profile bio.

<b>Some free web hosting services:</b>
<li><a href="https://pages.github.com" target="_blank">GitHub Pages</a></li>
<li><a href="https://netlify.com" target="_blank">Netlify</a></li>
<li><a href="https://neocities.org" target="_blank">Neocities</a></li>

## How to Customize?
To customize you need a little knowledge of Front-end developing. Then by following instructions below you can customize the template. If you are a little bit more skilled, you can easily edit CSS and JS files.

Also you need to change every text in **index.html** file starting with `$`. For example if I see `$Username` in **index.html** file, I will change it with `hamid0740`.

- **All available colors:** *(use them as class of link element)*

    ![#45d46e](https://via.placeholder.com/20/45d46e/ffffff?text=+) `green` `paypal`

    ![#0080ff](https://via.placeholder.com/20/0080ff/ffffff?text=+) `blue`

    ![#9d02e7](https://via.placeholder.com/20/9d02e7/ffffff?text=+) `purple`

    ![#ff63b4](https://via.placeholder.com/20/ff63b4/ffffff?text=+) `pink`

    ![#f20716](https://via.placeholder.com/20/f20716/ffffff?text=+) `red`

    ![#ff7d2d](https://via.placeholder.com/20/ff7d2d/ffffff?text=+) `orange`

    ![#fad223](https://via.placeholder.com/20/fad223/ffffff?text=+) `yellow`

    ![#f4d7af](https://via.placeholder.com/20/f4d7af/ffffff?text=+) `cream` `clubhouse`

    ![#753422](https://via.placeholder.com/20/753422/ffffff?text=+) `brown`

    ![#646464](https://via.placeholder.com/20/646464/ffffff?text=+) `gray` `github` `stack-overflow` `crowdin`

    ![#128c7e](https://via.placeholder.com/20/128c7e/ffffff?text=+) `whatsapp`

    ![#4995be](https://via.placeholder.com/20/4995be/ffffff?text=+) `telegram`

    ![#f43b86](https://via.placeholder.com/20/f43b86/ffffff?text=+) `instagram`

    ![#7289da](https://via.placeholder.com/20/7289da/ffffff?text=+) `discord`

    ![#1da1f2](https://via.placeholder.com/20/1da1f2/ffffff?text=+) `twitter`

    ![#4267b2](https://via.placeholder.com/20/4267b2/ffffff?text=+) `facebook`

    ![#69c9d0](https://via.placeholder.com/20/69c9d0/ffffff?text=+) `tiktok`

    ![#ff4500](https://via.placeholder.com/20/ff4500/ffffff?text=+) `reddit`

    ![#e60023](https://via.placeholder.com/20/e60023/ffffff?text=+) `pinterest`

    ![#ff0000](https://via.placeholder.com/20/ff0000/ffffff?text=+) `youtube`

    ![#6441a5](https://via.placeholder.com/20/6441a5/ffffff?text=+) `twitch`

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
    *Instead of `link-image-l` you can use `link-image-r` to swap the side of image icon. Also you need to change `$ImageLink`.*

```HTML
<i class="link-image-l" style="background-image: url('$ImageLink')"></i>
```

## How many...?
#### How many people have seen a LinkForest user's page?

![](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Seen&query=value&url=https%3A%2F%2Fapi.countapi.xyz%2Fget%2FLinkForest%2F&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNGNjNTFlIiBkPSJNMTUgMTJjMCAxLjY1NC0xLjM0NiAzLTMgM3MtMy0xLjM0Ni0zLTMgMS4zNDYtMyAzLTMgMyAxLjM0NiAzIDN6bTktLjQ0OXMtNC4yNTIgOC40NDktMTEuOTg1IDguNDQ5Yy03LjE4IDAtMTIuMDE1LTguNDQ5LTEyLjAxNS04LjQ0OXM0LjQ0Ni03LjU1MSAxMi4wMTUtNy41NTFjNy42OTQgMCAxMS45ODUgNy41NTEgMTEuOTg1IDcuNTUxem0tNyAuNDQ5YzAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1IDIuMjQzIDUgNSA1IDUtMi4yNDMgNS01eiIvPjwvc3ZnPg==)


## External resources
These are all external resources used in LinkForest:
- [Font Awesome (for icons)](https://fontawesome.com)
- [AddToAny (for sharing)](https://addtoany.com)
- [Sweet Alert (for better alerts)](https://sweetalert.js.org)
- [CountAPI (for easter eggs)](https://countapi.xyz)
