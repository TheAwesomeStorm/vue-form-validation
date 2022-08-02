<template>
  <BaseInput
    type="text"
    label="Name"
    v-model="userData.name"
    :errors="v$.userData.name.$errors"
    icons-placement="has-icons-left has-icons-right"
    :is-dirty="v$.userData.name.$dirty"
    :is-valid="!v$.userData.name.$invalid"
  >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span
      v-if="!v$.userData.name.$invalid && v$.userData.name.$dirty"
      class="icon is-small is-right"
    >
      <i class="fas fa-check"></i>
    </span>
    <span
      v-if="v$.userData.name.$invalid && v$.userData.name.$dirty"
      class="icon is-small is-right"
    >
      <i class="fas fa-times"></i>
    </span>
  </BaseInput>
  <BaseInput
    type="number"
    label="Age"
    v-model="userData.age"
    :errors="v$.userData.age.$errors"
  />
  <BaseInput
    label="E-mail"
    type="email"
    v-model="userData.email"
    :errors="v$.userData.email.$errors"
    icons-placement="has-icons-left"
  >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </BaseInput>

  <div class="field">
    <label class="label">Subject</label>
    <div class="control">
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>

  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        I agree to the <a>terms and conditions</a>
      </label>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question" />
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question" />
        No
      </label>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
  import BaseInput from './BaseInput.vue';
  import useVuelidate from '@vuelidate/core';
  import {
    required,
    email,
    minLength,
    minValue,
    helpers,
  } from '@vuelidate/validators';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseForm',
    components: { BaseInput },
    setup() {
      return {
        v$: useVuelidate({ $autoDirty: true, $lazy: true }),
      };
    },
    data() {
      return {
        userData: {
          name: '',
          age: 0,
          email: '',
        },
      };
    },
    validations() {
      return {
        userData: {
          name: {
            required: helpers.withMessage('Campo obrigatório', required),
            minLength: helpers.withMessage(
              'Este campo deve conter no mínimo 3 caracteres',
              minLength(3)
            ),
          },
          age: { required, minValue: minValue(18) },
          email: { required, email },
        },
      };
    },
  });
</script>

<style scoped></style>
