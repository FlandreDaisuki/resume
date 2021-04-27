<template>
  <div class="overlay"
       :class="overlayStyleClass"
       @pointerdown="onOutsidePointerDown"
       @touchstart="onOutsidePointerDown"
  >
    <div class="inner-overlay" @pointerdown.stop @touchstart.stop>
      <slot />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: {
    enabled: Boolean,
  },
  emits: ['update:enabled'],
  setup(props, { emit }) {
    return {
      overlayStyleClass: computed(() => ({
        hidden: !props.enabled,
        flex: props.enabled,
      })),
      onOutsidePointerDown: () => emit('update:enabled', false),
    };
  },
};
</script>

<style scoped>
.overlay {
    @apply fixed top-0 left-0 h-screen w-screen items-center justify-center bg-black bg-opacity-30;
}
</style>
