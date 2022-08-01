<template>
  <BaseInput
    type="text"
    label="Name"
    v-model="userData.name"
    :errors="v$.userData.name.$errors"
  />
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
  />

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-success"
        type="text"
        placeholder="Text input"
        value="bulma"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-danger"
        type="email"
        placeholder="Email input"
        value="hello@"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>

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
