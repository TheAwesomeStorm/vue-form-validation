<template>
  <div class="field" :class="$attrs.class">
    <label :for="label" class="label">{{ label }}</label>
    <div class="control" :class="iconsPlacement">
      <input
        :name="label"
        class="input"
        :class="hasErrors"
        :type="$attrs.type"
        :placeholder="label"
        :value="$attrs.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <slot />
    </div>
    <p class="help is-danger" v-for="(error, index) in errors" :key="index">
      {{ error.$message }}
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { InputIcon } from '../enums/input-icon';

  export default defineComponent({
    name: 'BaseTextTypeInput',
    computed: {
      hasErrors(): string {
        if (!this.isDirty) return '';
        if (this.isValid) return 'is-success';
        return 'is-danger';
      },
    },
    emits: ['update:modelValue'],
    inheritAttrs: false,
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
      iconsPlacement: {
        type: String as PropType<InputIcon>,
        default: InputIcon.none,
      },
      isValid: {
        type: Boolean,
      },
      isDirty: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style scoped></style>
