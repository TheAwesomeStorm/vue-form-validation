<template>
  <div class="field">
    <p>{{ question }}</p>
    <div
      class="control"
      v-for="(option, index) in options"
      :key="option + index"
    >
      <label :for="option + index" class="checkbox">
        <input
          :id="option + index"
          type="checkbox"
          @change="onChange"
          :value="option"
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
  import { useAttrs } from 'vue';

  const attrs = useAttrs();

  defineProps({
    question: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    errors: {
      type: Array,
      default: () => [],
    },
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: Array<string>): void;
  }>();

  const onChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (!(attrs.modelValue instanceof Array<string>)) return;
    if (attrs.modelValue.includes(value)) {
      const findIndex = attrs.modelValue.findIndex(
        (option) => option === value
      );
      attrs.modelValue.splice(findIndex, 1);
    } else {
      attrs.modelValue.push(value);
    }
    emit('update:modelValue', attrs.modelValue);
  };
</script>

<style scoped></style>
