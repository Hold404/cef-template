<template>
  <div>
    <h2>Example using Options API</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'Alvaro Hold',
    };
  },
};

/*
Call it using window.openInterface("OptionsAPIExample", "[{'name': 'Test'}]");
Or window.openInterface("OptionsAPIExample");
*/
</script>
