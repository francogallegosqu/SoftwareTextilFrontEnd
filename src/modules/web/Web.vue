<template>
  <div id="web">
    <!--==================== HEADER ====================-->
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          <i class="ri-leaf-line nav__logo-icon"></i> APP LOGO
        </a>

        <div class="nav__menu" id="nav-menu" style="margin-top: 10px">
          <!-- <ul class="nav__list">
            <li class="nav__item">
              <a @click="redirectToSignIn" class="nav__link">Iniciar Sesión</a>
            </li>
            <li class="nav__item">
              <a @click="redirectToSignUp" class="nav__link register__button">
                Registrate gratis
              </a>
            </li>
          </ul>

          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div> -->
          <div>
            <user-dropdown />
          </div>
        </div>

        <div class="nav__btns">
          <!-- Theme change button -->
          <i class="ri-moon-line change-theme" id="theme-button"></i>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>

    <main class="main">
      <!--==================== HOME ====================-->
      <section class="home" id="home">
        <div class="home__container container grid">
          <img src="/assets/img/home.png" alt="" class="home__img" />

          <div class="home__data">
            <h1 class="home__title">
              Encuentra a tu próximo socio de negocios
            </h1>
            <p class="home__description">
              Somos una web respaldada por el BCP que busca ayudarte a encontrar
              proveedores y clientes manera segura y gratuita.
            </p>
            <a
              @click="redirectToSignUp"
              class="button button--flex"
              style="color: white"
            >
              Registrate ahora
              <feather-icon icon="ArrowUpRightIcon" />
            </a>
          </div>

          <div class="home__social">
            <span class="home__social-follow">Follow Us</span>

            <div class="home__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="home__social-link"
              >
                <feather-icon icon="FacebookIcon" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="home__social-link"
              >
                <feather-icon icon="InstagramIcon" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="home__social-link"
              >
                <feather-icon icon="TwitterIcon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!--==================== ABOUT ====================-->
      <section class="about section container" id="about">
        <div class="about__container grid">
          <img src="/assets/img/about.png" alt="" class="about__img" />

          <div class="about__data">
            <h2 class="section__title about__title">
              Quienes somos realmente <br />
              & Por qué elegirnos
            </h2>

            <p class="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>

            <div class="about__details">
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We always deliver on time.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We give you guides to protect and care for your plants.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We always come over for a check-up after sale.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                100% money back guaranteed.
              </p>
            </div>

            <a href="#" class="button--link button--flex">
              Shop Now <i class="ri-arrow-right-down-line button__icon"></i>
            </a>
          </div>
        </div>
      </section>

      <!--==================== STEPS ====================-->
      <section class="steps section container">
        <div class="steps__bg">
          <h2 class="section__title-center steps__title">¿Cómo funciona?</h2>

          <div class="steps__container grid">
            <div class="steps__card">
              <div class="steps__card-number">01</div>
              <h3 class="steps__card-title">Registra tu negocio</h3>
              <p class="steps__card-description">
                Crea un perfil para que otros negocios puedan conocerte.
              </p>
            </div>

            <div class="steps__card">
              <div class="steps__card-number">02</div>
              <h3 class="steps__card-title">Crea tu pedido</h3>
              <p class="steps__card-description">
                Registra el producto o servicio que estas buscando.
              </p>
            </div>

            <div class="steps__card">
              <div class="steps__card-number">03</div>
              <h3 class="steps__card-title">Recibe alertas</h3>
              <p class="steps__card-description">
                Te notificaremos al encontrar los proveedores que mejor se
                adecuen a lo que necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!--==================== PRODUCTS ====================-->
      <section class="product section container" id="products">
        <h2 class="section__title-center">
          Check out our <br />
          products
        </h2>

        <p class="product__description">
          Here are some selected plants from our showroom, all are in excellent
          shape and has a long life span. Buy and enjoy best quality.
        </p>

        <div class="product__container grid">
          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product1.png" alt="" class="product__img" />

            <h3 class="product__title">Cacti Plant</h3>
            <span class="product__price">$19.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>

          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product2.png" alt="" class="product__img" />

            <h3 class="product__title">Cactus Plant</h3>
            <span class="product__price">$11.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>

          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product3.png" alt="" class="product__img" />

            <h3 class="product__title">Aloe Vera Plant</h3>
            <span class="product__price">$7.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>

          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product4.png" alt="" class="product__img" />

            <h3 class="product__title">Succulent Plant</h3>
            <span class="product__price">$5.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>

          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product5.png" alt="" class="product__img" />

            <h3 class="product__title">Succulent Plant</h3>
            <span class="product__price">$10.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>

          <article class="product__card">
            <div class="product__circle"></div>

            <img src="/assets/img/product6.png" alt="" class="product__img" />

            <h3 class="product__title">Green Plant</h3>
            <span class="product__price">$8.99</span>

            <button class="button--flex product__button">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </article>
        </div>
      </section>

      <!--==================== QUESTIONS ====================-->
      <section class="questions section" id="faqs">
        <h2 class="section__title-center questions__title container">
          Some common questions <br />
          were often asked
        </h2>

        <div class="questions__container container grid">
          <div class="questions__group">
            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">
                  My flowers are falling off or dying?
                </h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">
                  What causes leaves to become pale?
                </h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">
                  What causes brown crispy leaves?
                </h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>

          <div class="questions__group">
            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">How do i choose a plant?</h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">How do I change the pots?</h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div class="questions__item">
              <header class="questions__header">
                <i class="ri-add-line questions__icon"></i>
                <h3 class="questions__item-title">
                  Why are gnats flying around my plant?
                </h3>
              </header>

              <div class="questions__content">
                <p class="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==================== CONTACT ====================-->
      <section class="contact section container" id="contact">
        <div class="contact__container grid">
          <div class="contact__box">
            <h2 class="section__title">
              Reach out to us today <br />
              via any of the given <br />
              information
            </h2>

            <div class="contact__data">
              <div class="contact__information">
                <h3 class="contact__subtitle">Call us for instant support</h3>
                <span class="contact__description">
                  <i class="ri-phone-line contact__icon"></i>
                  +999 888 777
                </span>
              </div>

              <div class="contact__information">
                <h3 class="contact__subtitle">Write us by mail</h3>
                <span class="contact__description">
                  <i class="ri-mail-line contact__icon"></i>
                  user@email.com
                </span>
              </div>
            </div>
          </div>

          <form action="" class="contact__form">
            <div class="contact__inputs">
              <div class="contact__content">
                <input type="email" placeholder=" " class="contact__input" />
                <label for="" class="contact__label">Email</label>
              </div>

              <div class="contact__content">
                <input type="text" placeholder=" " class="contact__input" />
                <label for="" class="contact__label">Subject</label>
              </div>

              <div class="contact__content contact__area">
                <textarea
                  name="message"
                  placeholder=" "
                  class="contact__input"
                ></textarea>
                <label for="" class="contact__label">Message</label>
              </div>
            </div>

            <button class="button button--flex">
              Send Message
              <i class="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>
      </section>
    </main>

    <!--==================== FOOTER ====================-->
    <footer class="footer section">
      <div class="footer__container container grid">
        <div class="footer__content">
          <a href="#" class="footer__logo">
            <i class="ri-leaf-line footer__logo-icon"></i> Plantex
          </a>

          <h3 class="footer__title">
            Subscribe to our newsletter <br />
            to stay update
          </h3>

          <div class="footer__subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              class="footer__input"
            />

            <button class="button button--flex footer__button">
              Subscribe
              <i class="ri-arrow-right-up-line button__icon"></i>
            </button>
          </div>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Our Address</h3>

          <ul class="footer__data">
            <li class="footer__information">1234 - Peru</li>
            <li class="footer__information">La Libertad - 43210</li>
            <li class="footer__information">123-456-789</li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Contact Us</h3>

          <ul class="footer__data">
            <li class="footer__information">+999 888 777</li>

            <div class="footer__social">
              <a href="https://www.facebook.com/" class="footer__social-link">
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/" class="footer__social-link">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" class="footer__social-link">
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">We accept all credit cards</h3>

          <div class="footer__cards">
            <img src="/assets/img/card1.png" alt="" class="footer__card" />
            <img src="/assets/img/card2.png" alt="" class="footer__card" />
            <img src="/assets/img/card3.png" alt="" class="footer__card" />
            <img src="/assets/img/card4.png" alt="" class="footer__card" />
          </div>
        </div>
      </div>

      <p class="footer__copy">&#169; Bedimcode. All rigths reserved</p>
    </footer>

    <!--=============== SCROLL UP ===============-->
    <a href="#" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-fill scrollup__icon"></i>
    </a>
  </div>
</template>

<script>
import UserDropdown from "./UserDropdown.vue"
export default {
  components:{
    UserDropdown,
  },
  methods: {
    redirectToSignUp() {
      this.$router.push({
        name: "auth-register",
      });
    },
    redirectToSignIn(){
      this.$router.push({
        name: "auth-login",
      });
    }
  },
};
</script>

<style lang="scss">
/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem; /*56px*/

  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --hue: 152;
  --first-color: hsl(var(--hue), 24%, 32%);
  --first-color-alt: hsl(var(--hue), 24%, 28%);
  --first-color-light: hsl(var(--hue), 24%, 66%);
  --first-color-lighten: hsl(var(--hue), 24%, 92%);
  --title-color: hsl(var(--hue), 4%, 15%);
  --text-color: hsl(var(--hue), 4%, 35%);
  --text-color-light: hsl(var(--hue), 4%, 55%);
  --body-color: hsl(var(--hue), 0%, 100%);
  --container-color: #fff;

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes Bottom ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/* Responsive typography */
@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

/*=============== BASE ===============*/
#web {
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
  }

  body {
    margin: var(--header-height) 0 0 0;
    background-color: var(--body-color);
    color: var(--text-color);
    transition: 0.4s; /*For animation dark mode*/
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  h1,
  h2,
  h3 {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /*=============== THEME ===============*/
  /*========== Variables Dark theme ==========*/
  body.dark-theme {
    --first-color-dark: hsl(var(--hue), 8%, 20%);
    --title-color: hsl(var(--hue), 4%, 95%);
    --text-color: hsl(var(--hue), 4%, 75%);
    --body-color: hsl(var(--hue), 8%, 12%);
    --container-color: hsl(var(--hue), 8%, 16%);
  }

  /*========== Button Dark/Light ==========*/
  .change-theme {
    color: var(--title-color);
    font-size: 1.15rem;
    cursor: pointer;
  }

  .nav__btns {
    display: inline-flex;
    align-items: center;
    column-gap: 1rem;
  }

  /*========== 
Color changes in some parts of 
the website, in dark theme 
==========*/

  .dark-theme .steps__bg,
  .dark-theme .questions {
    background-color: var(--first-color-dark);
  }

  .dark-theme .product__circle,
  .dark-theme .footer__subscribe {
    background-color: var(--container-color);
  }

  .dark-theme .scroll-header {
    box-shadow: 0 1px 4px hsla(var(--hue), 4%, 4%, 0.3);
  }

  /*=============== REUSABLE CSS CLASSES ===============*/
  .section {
    padding: 5.5rem 0 1rem;
  }

  .section__title,
  .section__title-center {
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-2);
    line-height: 140%;
  }

  .section__title-center {
    text-align: center;
  }

  .container {
    max-width: 968px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .grid {
    display: grid;
  }

  .main {
    overflow: hidden; /*For animation*/
  }

  /*=============== HEADER ===============*/
  .header {
    width: 100%;
    background-color: var(--body-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    transition: 0.4s; /*For animation dark mode*/
  }

  /*=============== NAV ===============*/
  .nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo,
  .nav__toggle,
  .nav__close {
    color: var(--title-color);
  }

  .nav__logo {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -1px;
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: 0.3s;
  }

  .nav__logo-icon {
    font-size: 1.15rem;
    color: var(--first-color);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    display: inline-flex;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      background-color: var(--container-color);
      width: 80%;
      height: 100%;
      top: 0;
      right: -100%;
      box-shadow: -2px 0 4px hsla(var(--hue), 24%, 15%, 0.1);
      padding: 4rem 0 0 3rem;
      border-radius: 1rem 0 0 1rem;
      transition: 0.3s;
      z-index: var(--z-fixed);
    }
  }

  .nav__close {
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    cursor: pointer;
  }

  .nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: 0.3s;
  }

  .nav__link:hover {
    color: var(--first-color);
  }

  .register__button {
    padding: 10px;
    border-radius: 5px;
    border: 2px rgb(93, 93, 93) solid;

    &:hover {
      border: 2px var(--first-color-alt) solid;
      color: var(--first-color);
    }
  }

  /* Show menu */
  .show-menu {
    right: 0;
  }

  /* Change background header */
  .scroll-header {
    box-shadow: 0 1px 4px hsla(var(--hue), 4%, 15%, 0.1);
  }

  /* Active link */
  .active-link {
    position: relative;
    color: var(--first-color);
  }

  .active-link::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: var(--first-color);
  }

  /*=============== HOME ===============*/
  .home {
    padding: 3.5rem 0 2rem;
  }

  .home__container {
    position: relative;
    row-gap: 2rem;
  }

  .home__img {
    width: 200px;
    justify-self: center;
  }

  .home__title {
    font-size: var(--big-font-size);
    line-height: 140%;
    margin-bottom: var(--mb-1);
  }

  .home__description {
    margin-bottom: var(--mb-2-5);
  }

  .home__social {
    position: absolute;
    top: 2rem;
    right: -1rem;
    display: grid;
    justify-items: center;
    row-gap: 3.5rem;
  }

  .home__social-follow {
    font-weight: var(--font-medium);
    font-size: var(--smaller-font-size);
    color: var(--first-color);
    position: relative;
    transform: rotate(90deg);
  }

  .home__social-follow::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: var(--first-color);
    right: -45%;
    top: 50%;
  }

  .home__social-links {
    display: inline-flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  .home__social-link {
    font-size: 1rem;
    color: var(--first-color);
    transition: 0.3s;
  }

  .home__social-link:hover {
    transform: translateX(0.25rem);
  }

  /*=============== BUTTONS ===============*/
  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem 1.75rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    transition: 0.3s;
  }

  .button:hover {
    background-color: var(--first-color-alt);
  }

  .button__icon {
    transition: 0.3s;
  }

  .button:hover .button__icon {
    transform: translateX(0.25rem);
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .button--link {
    color: var(--first-color);
    font-weight: var(--font-medium);
  }

  .button--link:hover .button__icon {
    transform: translateX(0.25rem);
  }

  /*=============== ABOUT ===============*/
  .about__container {
    row-gap: 2rem;
  }

  .about__img {
    width: 280px;
    justify-self: center;
  }

  .about__title {
    margin-bottom: var(--mb-1);
  }

  .about__description {
    margin-bottom: var(--mb-2);
  }

  .about__details {
    display: grid;
    row-gap: 1rem;
    margin-bottom: var(--mb-2-5);
  }

  .about__details-description {
    display: inline-flex;
    column-gap: 0.5rem;
    font-size: var(--small-font-size);
  }

  .about__details-icon {
    font-size: 1rem;
    color: var(--first-color);
    margin-top: 0.15rem;
  }

  /*=============== STEPS ===============*/
  .steps__bg {
    background-color: var(--first-color);
    padding: 3rem 2rem 2rem;
    border-radius: 1rem;
  }

  .steps__container {
    gap: 2rem;
    padding-top: 1rem;
  }

  .steps__title {
    color: #fff;
  }

  .steps__card {
    background-color: var(--container-color);
    padding: 2.5rem 3rem 2rem 1.5rem;
    border-radius: 1rem;
  }

  .steps__card-number {
    display: inline-block;
    background-color: var(--first-color-alt);
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-1-5);
    transition: 0.3s;
  }

  .steps__card-title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }

  .steps__card-description {
    font-size: var(--small-font-size);
  }

  .steps__card:hover .steps__card-number {
    transform: translateY(-0.25rem);
  }

  /*=============== PRODUCTS ===============*/
  .product__description {
    text-align: center;
  }

  .product__container {
    padding: 3rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 3rem;
  }

  .product__card {
    display: grid;
    position: relative;
  }

  .product__img {
    position: relative;
    width: 120px;
    justify-self: center;
    margin-bottom: var(--mb-0-75);
    transition: 0.3s;
  }

  .product__title,
  .product__price {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  .product__title {
    margin-bottom: 0.25rem;
  }

  .product__button {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--first-color);
    color: #fff;
    padding: 0.25rem;
    border-radius: 0.35rem;
    font-size: 1.15rem;
  }

  .product__button:hover {
    background-color: var(--first-color-alt);
  }

  .product__circle {
    width: 90px;
    height: 90px;
    background-color: var(--first-color-lighten);
    border-radius: 50%;
    position: absolute;
    top: 18%;
    left: 5%;
  }

  .product__card:hover .product__img {
    transform: translateY(-0.5rem);
  }

  /*=============== QUESTIONS ===============*/
  .questions {
    background-color: var(--first-color-lighten);
  }

  .questions__container {
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  .questions__group {
    display: grid;
    row-gap: 1.5rem;
  }

  .questions__item {
    background-color: var(--container-color);
    border-radius: 0.25rem;
  }

  .questions__item-title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .questions__icon {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .questions__description {
    font-size: var(--smaller-font-size);
    padding: 0 1.25rem 1.25rem 2.5rem;
  }

  .questions__header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
  }

  .questions__content {
    overflow: hidden;
    height: 0;
  }

  .questions__item,
  .questions__header,
  .questions__item-title,
  .questions__icon,
  .questions__description,
  .questions__content {
    transition: 0.3s;
  }

  .questions__item:hover {
    box-shadow: 0 2px 8px hsla(var(--hue), 4%, 15%, 0.15);
  }

  /*Rotate icon, change color of titles and background*/
  .accordion-open .questions__header,
  .accordion-open .questions__content {
    background-color: var(--first-color);
  }

  .accordion-open .questions__item-title,
  .accordion-open .questions__description,
  .accordion-open .questions__icon {
    color: #fff;
  }

  .accordion-open .questions__icon {
    transform: rotate(45deg);
  }

  /*=============== CONTACT ===============*/
  .contact__container {
    row-gap: 3.5rem;
  }

  .contact__data {
    display: grid;
    row-gap: 2rem;
  }

  .contact__subtitle {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--text-color);
    margin-bottom: var(--mb-0-5);
  }

  .contact__description {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--title-color);
    font-weight: var(--font-medium);
  }

  .contact__icon {
    font-size: 1.25rem;
  }

  .contact__inputs {
    display: grid;
    row-gap: 2rem;
    margin-bottom: var(--mb-2-5);
  }

  .contact__content {
    position: relative;
    height: 3rem;
    border-bottom: 1px solid var(--text-color-light);
  }

  .contact__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1rem 0;
    background: none;

    color: var(--text-color);

    border: none;
    outline: none;
    z-index: 1;
  }

  .contact__label {
    position: absolute;
    top: 0.75rem;
    width: 100%;
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    transition: 0.3s;
  }

  .contact__area {
    height: 7rem;
  }

  .contact__area textarea {
    resize: none;
  }

  /*Input focus move up label*/
  .contact__input:focus + .contact__label {
    top: -0.75rem;
    left: 0;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .contact__input:not(:placeholder-shown).contact__input:not(:focus)
    + .contact__label {
    top: -0.75rem;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }

  /*=============== FOOTER ===============*/
  .footer__container {
    row-gap: 3rem;
  }

  .footer__logo {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--title-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: var(--mb-2-5);
    transition: 0.3s;
  }

  .footer__logo-icon {
    font-size: 1.15rem;
    color: var(--first-color);
  }

  .footer__logo:hover {
    color: var(--first-color);
  }

  .footer__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1-5);
  }

  .footer__subscribe {
    background-color: var(--first-color-lighten);
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
  }

  .footer__input {
    width: 70%;
    padding: 0 0.5rem;
    background: none;
    color: var(--text-color);
    border: none;
    outline: none;
  }

  .footer__button {
    padding: 1rem;
  }

  .footer__data {
    display: grid;
    row-gap: 0.75rem;
  }

  .footer__information {
    font-size: var(--small-font-size);
  }

  .footer__social {
    display: inline-flex;
    column-gap: 0.75rem;
  }

  .footer__social-link {
    font-size: 1rem;
    color: var(--text-color);
    transition: 0.3s;
  }

  .footer__social-link:hover {
    transform: translateY(-0.25rem);
  }

  .footer__cards {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .footer__card {
    width: 35px;
  }

  .footer__copy {
    text-align: center;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    margin: 5rem 0 1rem;
  }

  /*=============== SCROLL UP ===============*/
  .scrollup {
    position: fixed;
    background-color: var(--first-color);
    right: 1rem;
    bottom: -30%;
    display: inline-flex;
    padding: 0.5rem;
    border-radius: 0.25rem;
    z-index: var(--z-tooltip);
    opacity: 0.8;
    transition: 0.4s;
  }

  .scrollup__icon {
    font-size: 1rem;
    color: #fff;
  }

  .scrollup:hover {
    background-color: var(--first-color-alt);
    opacity: 1;
  }

  /* Show Scroll Up*/
  .show-scroll {
    bottom: 3rem;
  }

  /*=============== SCROLL BAR ===============*/
  ::-webkit-scrollbar {
    width: 0.6rem;
    background: hsl(var(--hue), 4%, 53%);
  }

  ::-webkit-scrollbar-thumb {
    background: hsl(var(--hue), 4%, 29%);
    border-radius: 0.5rem;
  }

  /*=============== BREAKPOINTS ===============*/
  /* For small devices */
  @media screen and (max-width: 320px) {
    .container {
      margin-left: var(--mb-1);
      margin-right: var(--mb-1);
    }

    .home__img {
      width: 180px;
    }
    .home__title {
      font-size: var(--h1-font-size);
    }

    .steps__bg {
      padding: 2rem 1rem;
    }
    .steps__card {
      padding: 1.5rem;
    }

    .product__container {
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .steps__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .product__description {
      padding: 0 4rem;
    }
    .product__container {
      grid-template-columns: repeat(2, 170px);
      justify-content: center;
      column-gap: 5rem;
    }

    .footer__subscribe {
      width: 400px;
    }
  }

  @media screen and (min-width: 767px) {
    body {
      margin: 0;
    }

    .nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 3rem;
    }
    .nav__toggle,
    .nav__close {
      display: none;
    }
    .nav__list {
      flex-direction: row;
      column-gap: 3rem;
    }
    .nav__menu {
      margin-left: auto;
    }

    .home__container,
    .about__container,
    .questions__container,
    .contact__container,
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .home {
      padding: 10rem 0 5rem;
    }
    .home__container {
      align-items: center;
    }
    .home__img {
      width: 280px;
      order: 1;
    }
    .home__social {
      top: 30%;
    }

    .questions__container {
      align-items: flex-start;
    }

    .footer__container {
      column-gap: 3rem;
    }
    .footer__subscribe {
      width: initial;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    .section {
      padding: 8rem 0 1rem;
    }
    .section__title,
    .section__title-center {
      font-size: var(--h1-font-size);
    }

    .home {
      padding: 13rem 0 5rem;
    }
    .home__img {
      width: 350px;
    }
    .home__description {
      padding-right: 7rem;
    }

    .about__img {
      width: 380px;
    }

    .steps__container {
      grid-template-columns: repeat(3, 1fr);
    }
    .steps__bg {
      padding: 3.5rem 2.5rem;
    }
    .steps__card-title {
      font-size: var(--normal-font-size);
    }

    .product__description {
      padding: 0 16rem;
    }
    .product__container {
      padding: 4rem 0;
      grid-template-columns: repeat(3, 185px);
      gap: 4rem 6rem;
    }
    .product__img {
      width: 160px;
    }
    .product__circle {
      width: 110px;
      height: 110px;
    }
    .product__title,
    .product__price {
      font-size: var(--normal-font-size);
    }

    .questions__container {
      padding: 1rem 0 4rem;
    }
    .questions__title {
      text-align: initial;
    }
    .questions__group {
      row-gap: 2rem;
    }
    .questions__header {
      padding: 1rem;
    }
    .questions__description {
      padding: 0 3.5rem 2.25rem 2.75rem;
    }

    .footer__logo {
      font-size: var(--h3-font-size);
    }
    .footer__container {
      grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
    }
    .footer__copy {
      margin: 7rem 0 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .home__social {
      right: -3rem;
      row-gap: 4.5rem;
    }
    .home__social-follow {
      font-size: var(--small-font-size);
    }
    .home__social-follow::after {
      width: 1.5rem;
      right: -60%;
    }
    .home__social-link {
      font-size: 1.15rem;
    }

    .about__container {
      column-gap: 7rem;
    }

    .scrollup {
      right: 3rem;
    }
  }
}
</style>