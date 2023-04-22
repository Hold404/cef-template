<template>
  <div>
    <h2>Example using Composition API</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Alvaro Hold');

defineExpose({
  name,
});

/*
Call it using window.openInterface("CompositionAPIExample", "[{'name': 'Test'}]");
Or window.openInterface("CompositionAPIExample");
*/
</script>
