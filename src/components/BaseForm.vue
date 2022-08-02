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
  <BaseSelect
    :options="['Male', 'Female', 'Non-binary']"
    label="Gender"
    v-model="userData.gender"
    placeholder="Select your gender"
    :errors="v$.userData.gender.$errors"
  />

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

  <BaseRadio
    name="subscribe"
    :options="['Yes', 'No', 'Maybe']"
    question="Subscribe to newsletter?"
    v-model="userData.subscribe"
    :errors="v$.userData.subscribe.$errors"
  />

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="validate">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
  import BaseInput from './BaseInput.vue';
  import useVuelidate from '@vuelidate/core';
  import { required, minLength } from '../utils/i18n-validators';
  import { email, minValue } from '@vuelidate/validators';
  import { defineComponent } from 'vue';
  import BaseSelect from './BaseSelect.vue';
  import BaseRadio from './BaseRadio.vue';

  export default defineComponent({
    name: 'BaseForm',
    components: { BaseRadio, BaseSelect, BaseInput },
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
          gender: '',
          subscribe: '',
        },
      };
    },
    methods: {
      async validate(): Promise<void> {
        const isFormValid = await this.v$.$validate();
        isFormValid
          ? console.log('Formulário válido')
          : console.log('Formulário inválido');
      },
    },
    validations() {
      return {
        userData: {
          name: {
            required,
            minLength: minLength(3),
          },
          age: { required, minValue: minValue(18) },
          email: { required, email },
          gender: { required },
          subscribe: { required },
        },
      };
    },
  });
</script>

<style scoped></style>
