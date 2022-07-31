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
</template>

<script>
  export default {
    name: 'BaseInput',
    emits: ['update:modelValue'],
    props: {
      label: {
        type: String,
        default: '',
        required: true,
      },
    },
  };
</script>

<style scoped></style>
