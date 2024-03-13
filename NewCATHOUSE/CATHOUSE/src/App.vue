<template>
  <div class="aside" :style="{ left: ShowStatus ? '0' : '-120px' }">
    <AsideUilts></AsideUilts>
    <span class="menu_event" @click="MenuEvent()"></span>
  </div>
  <div class="view" :style="{ left: leftWidth }">
    <header class="header">
      <HeaderUilts></HeaderUilts>
    </header>
    <div class="main" :style="{ left: ShowStatus ? '120px' : '0' }">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { AsideShow, ExWidth, MenuEvent } from "@/uilts/AppAsideUilts";

import AsideUilts from "@/components/Aside.vue";
import HeaderUilts from "@/components/Header.vue";
import "@/assets/App.less";

const leftWidth = ref(ExWidth);
const ShowStatus = ref(AsideShow);

computed((ShowStatus) => {
  console.log(ShowStatus);
});
</script>
