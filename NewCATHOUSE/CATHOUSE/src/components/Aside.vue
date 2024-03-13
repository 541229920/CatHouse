<template>
  <div class="aside">
    <aside>
      <RouterLink
        v-for="(item, index) in routerlinkUilts"
        :key="index"
        :to="item.to"
        >{{ item.name }}</RouterLink
      >
    </aside>
  </div>
</template>

<script setup lang="ts">
import { routerlinkUilts } from "@/uilts/Aside";

import "@/assets/aside.less"

</script>
