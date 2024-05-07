<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'FixedSizeListDemo',
});
const data = ref(new Array(500).fill(0));
</script>

<template>
  <LdkDynamicList :item-size="70" item-class="item" :height="300" :data="data">
    <template #default="{ item, index }">
      <div :class="['list-item', index % 2 ? 'list-item-odd' : 'list-item-even']">
        {{ item }} - {{ index }}
      </div>
    </template>
  </LdkDynamicList>
</template>

<style scoped>
.list-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-item-odd {
  background-color: rgb(229 178 38);
}

.list-item-even {
  background-color: cadetblue;
}
</style>
