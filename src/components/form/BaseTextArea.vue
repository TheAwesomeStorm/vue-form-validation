<template>
  <div class="field" :class="$attrs.class">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea
        :placeholder="$attrs.placeholder"
        :value="$attrs.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="textarea"
      ></textarea>
    </div>
    <p class="help is-danger" v-for="(error, index) in errors" :key="index">
      {{ error.$message }}
    </p>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    label: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  });
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<style scoped></style>
