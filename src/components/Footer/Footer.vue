<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <nav class="footer__nav">
        <ul class="footer__nav-list">
          <li class="footer__nav-list-item">
            <router-link to="/" class="footer__nav-list-item-link">
              {{ $t("menu.home") }}
            </router-link>
          </li>
          <li class="footer__nav-list-item">
            <router-link to="/mortgage" class="footer__nav-list-item-link">
              {{ $t("menu.mortgage") }}
            </router-link>
          </li>
          <li class="footer__nav-list-item">
            <router-link to="/career" class="footer__nav-list-item-link">
              {{ $t("menu.career") }}
            </router-link>
          </li>
          <li class="footer__nav-list-item">
            <router-link to="/about" class="footer__nav-list-item-link">
              {{ $t("menu.about") }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="footer__social">
        <span class="footer__social-title"> {{ $t("menu.social") }}</span>
        <div class="footer__social-link">
          <a href="https://t.me/vitrinanedvizhimosti" target="_blank">
            <img src="@/assets/images/icons/telegram.svg" alt="Telegram" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/vitrina.uz/"
          >
            <img src="@/assets/images/icons/instagram.svg" alt="instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/share/1DFtPB9faY/?mibextid=LQQJ4d"
          >
            <img src="@/assets/images/icons/facebook.svg" alt="facebook" />
          </a>
        </div>
      </div>
    </div> 
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
