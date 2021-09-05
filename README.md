<h1 align="center">LinkForest</h1>
<a href="#"><p align="center"><img src="https://cdn.jsdelivr.net/gh/hamid0740/LinkForest@main/logo.png" width="100px"></p></a>
An HTML template to gather all of your links in one place.
<li><a href="" target="_blank">View live demo</a></li>
<li><a href="https://linkforest.neocities.org" target="_blank">سایت فارسی</a></li>

## What is LinkForest?
Well, as you all know, most social medias support only 1 link in the profile bio. So LinkForest is developed to expand the ability of that link. Also It is completely free, open source & customizable.

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

- **New Custom section & link:**
```HTML
<p class="section-name">$SectionName</p>
<a class="link $Color" href="$Link" target="_blank">
  <i class="$FontAwesomeIcon link-icon-l"></i> <!-- Example of Font Awesome icon: 'fab fa-github' -->
  <p class="link-text">$LinkText</p>
  <i class="link-icon-r"></i> <!-- To make text align center, keep both 'link-icon-l' and 'link-icon-r' elements. EVEN HAVING NO ICON OR IMAGE -->
</a>
```
