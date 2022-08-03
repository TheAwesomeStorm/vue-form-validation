<template>
  <div class="field">
    <p>{{ question }}</p>
    <div class="control">
      <label
        :for="name + option"
        v-for="(option, index) in options"
        :key="name + index"
        class="radio"
      >
        <input
          type="radio"
          :name="question"
          :id="name + option"
          :value="option"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        {{ option }}
      </label>
    </div>
    <p class="help is-danger" v-for="(error, index) in errors" :key="index">
      {{ error.$message }}
    </p>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
      default: '',
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    question: {
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
