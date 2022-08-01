<template>
  <div class="field">
    <label for="base-input" class="label">{{ label }}</label>
    <input
      class="input"
      name="base-input"
      v-bind="$attrs"
      :placeholder="label"
      :value="$attrs.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  <div>
    <p class="help is-danger" v-for="(error, index) in errors" :key="index">
      {{ error.$message }}
    </p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BaseInput',
    emits: ['update:modelValue'],
    props: {
      label: {
        type: String,
        default: '',
        required: true,
      },
      errors: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style scoped></style>
