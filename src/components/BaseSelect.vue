<template>
  <div class="field">
    <label :for="label" class="label">{{ label }}</label>
    <div class="control">
      <div class="select">
        <select
          :id="label"
          :value="$attrs.modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <option value="">
            {{ placeholder || 'Please select an option' }}
          </option>
          <option v-for="(option, index) in options" :key="label + index">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <p class="help is-danger" v-for="(error, index) in errors" :key="index">
      {{ error.$message }}
    </p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseSelect',
    props: {
      label: {
        type: String,
        default: '',
      },
      options: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: '',
      },
      errors: {
        type: Array,
        default: () => [],
      },
    },
  });
</script>

<style scoped></style>
