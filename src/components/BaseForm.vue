<template>
  <BaseInput label="Name" v-model="user.name" type="text" />
  <BaseInput label="Age" v-model="user.age" type="number" />
  <BaseInput label="E-mail" v-model="user.email" type="email" />

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
        I agree to the <a href="#">terms and conditions</a>
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
    <div class="control" @click="submit">
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
  import { required, email } from '@vuelidate/validators';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseForm',
    components: { BaseInput },
    data() {
      return {
        user: {
          name: '',
          age: 0,
          email: '',
        },
      };
    },
    methods: {
      submit() {
        if (this.v$.$invalid) return;
        console.log(this.user);
      },
    },
    validations() {
      return {
        user: {
          name: { required },
          age: { required },
          email: { required, email },
        },
      };
    },
    setup() {
      return {
        v$: useVuelidate(),
      };
    },
  });
</script>

<style scoped></style>
