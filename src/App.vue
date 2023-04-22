<template>
  <TransitionGroup name="fade">
    <div v-for="(iface, index) in Object.keys(interfaces)" :key="index">
      <component
        class="interface"
        v-if="interfaces[iface as keyof typeof interfaces].display"
        :is="iface"
        :ref="iface"
      />
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import { ref } from 'vue';
import CompositionAPIExample from '@/interfaces/CompositionAPIExample.vue';
import OptionsAPIExample from '@/interfaces/OptionsAPIExample.vue';

export default {
  components: {
    CompositionAPIExample,
    OptionsAPIExample,
  },

  setup() {
    const interfaces = ref({
      CompositionAPIExample: {
        display: false,
      },
      OptionsAPIExample: {
        display: false,
      },
    });

    return { interfaces };
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.interface {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
