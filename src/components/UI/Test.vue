<template>
  <div>
    <ul v-if="data">
      <li v-for="post in data" :key="post.id">
        <p>{{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/vue-query";


// Используем useQuery для запроса данных прямо внутри
const { data, isLoading, isError, error } = useQuery({
  queryKey: ["posts"], // Ключ для кеширования
  queryFn: async () => {
    // Прямо здесь делаем запрос на сервер
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // Возвращаем данные из запроса
  },
});
</script>

<style lang="scss" scoped></style>
