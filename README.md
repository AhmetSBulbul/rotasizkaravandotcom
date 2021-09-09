<p align="center">
  <a href="https://rotasizkaravandotcom.vercel.app/">
    <img alt="Rotasiz Karavan" src="https://github.com/AhmetSBulbul/rotasizkaravandotcom/blob/main/src/images/logo-rozet.png?raw=true" width="150" />
  </a>
</p>
<h1 align="center">
  ROTASIZ KARAVAN
</h1>

### Official Web Site

---

## 🚀 Under Development

- Live Preview: [rotasizkaravandotcom.vercel.app](https://rotasizkaravandotcom.vercel.app/)

---

## 🛠 Tools and Frameworks

- [Gatsbyjs](https://www.gatsbyjs.com/)
- [Vercel](https://vercel.com/)
- [tailwindcss](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [SVGR](https://react-svgr.com/)
- [Fontsource](https://fontsource.org/)
- [PostCSS](https://postcss.org/)

---

## 📝 TO-DO

- [x] Image Optimization
- [x] Layout Component
- [x] Navigation Menu
- [x] Dynamic images from file system source
- [x] Routing
- [ ] Hero background image slider with lazy load
- [ ] Background image must be dynamic image not static (gatsby-image-plugin)
- [x] Navigation menu and button animation
- [ ] Navigation Footer social media links and contact buttons
- [x] lockBodyScroll while nav menu is expanded
- [x] Nav Items Background Images
- [ ] Page Transition
- [ ] Desktop View
- [ ] SEO
- [ ] mdx source for blog posts
- [ ] Re-Factor
- [ ] Image Gallery
- [ ] terms of use page
- [ ] add hooks section to readme

## 🐞 BUGS

- [x] Logo onClick doesn't work while menu is expanded.
- [ ] Clicking to Logo doesn't close the navigation menu. Toggle controller must be on header and navigation must be divided to MenuButton and NavigationMenu components.
- [x] Hero Background Images animation bug.

## 📒 NOTES to Myself

Carousel eklenicek. Staticquery kullanarak pathlari bir objeye doldurup indeks ile dynamic image componentine geciriceksin. carousel controllerlarla birlikte lightbox modaline sifirdan render edilmeden gecebilmeli.

Background slideri da carouseli yaptiktan sonra ayni sistemi useSlider hooku ile kullanarak yapicaksin.

Navigation menusu ile navigasyon butonunu ayri komponentler yapip navigasyon menusune lockbodyscroll hooku ekleyeceksin. Bu hook image carouselin lightbox(model) varyasyonuna da eklenecek.

Gatsby image plugininin boyutlandirmalari cok kotu calisiyor ilk once onlara bak.

---

designed & developed by [@AhmetSBulbul](https://ahmetsafabulbul.com/)
