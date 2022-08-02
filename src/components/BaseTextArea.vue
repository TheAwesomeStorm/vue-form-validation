<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea
        v-bind="$attrs"
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

<style scoped></style>
