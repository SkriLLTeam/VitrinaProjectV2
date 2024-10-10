<template>
  <div class="error">
    <div class="error__wrapper container">
      <div class="error__content">
        <div class="error__content-top">
          <h1 class="error__content-top-title">Упс! Страница не найдена</h1>
          <p class="error__content-top-subtitle">
            Похоже, вы попали не туда. Но не переживайте, мы поможем
            вам вернуться на правильный путь!
          </p>
        </div>
        <div class="error__content-bottom">
          <div class="error__content-bottom-block">
            <span>1.</span>
            <p>Проверьте правильность URL</p>
          </div>
          <div class="error__content-bottom-block">
            <span>2.</span>
            <p>
              Или вернитесь на 
              <router-link to="/"> главную страницу </router-link>,
              чтобы продолжить путешествие по нашему сайту.
            </p>
          </div>
        </div>
      </div>
      <div class="error__img">
        <img src="@/assets/images/404-img.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
