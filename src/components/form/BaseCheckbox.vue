<template>
  <div class="field">
    <div class="control">
      <label :for="label" class="checkbox">
        <input
          :id="label"
          type="checkbox"
          :checked="$attrs.modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
        />
        {{ label }}
      </label>
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
