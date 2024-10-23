<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />
      <RouterView />
    </div>
    <Footer />
  </div>
  <!-- <Test /> -->
</template>

<script setup>
import Footer from "@/components/Footer/Footer.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Test from "./components/UI/Test.vue";
</script>
