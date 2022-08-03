<template>
  <BaseTextTypeInput
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
  </BaseTextTypeInput>
  <BaseTextTypeInput
    type="number"
    label="Age"
    v-model="userData.age"
    :errors="v$.userData.age.$errors"
  />
  <BaseTextTypeInput
    label="E-mail"
    type="email"
    v-model="userData.email"
    :errors="v$.userData.email.$errors"
    icons-placement="has-icons-left"
  >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </BaseTextTypeInput>
  <BaseSelect
    :options="['Male', 'Female', 'Non-binary']"
    label="Gender"
    v-model="userData.gender"
    placeholder="Select your gender"
    :errors="v$.userData.gender.$errors"
  />
  <BaseTextArea
    label="Message to the team"
    placeholder="Comments"
    v-model="userData.comments"
    :errors="v$.userData.comments.$errors"
  />
  <BaseMultipleCheckbox
    question="Where did you hear about this offer?"
    :options="['Google', 'LinkedIn', 'Facebook', 'Instagram', 'Twitter']"
    v-model="userData.marketing"
  />
  <BaseCheckbox
    label="Subscribe to newsletter"
    v-model="userData.subscribe"
    :errors="v$.userData.subscribe.$errors"
  />
  <BaseRadio
    name="offer"
    :options="['Yes', 'No']"
    question="Do you agree with the terms and conditions?"
    v-model="userData.terms"
    :errors="v$.userData.terms.$errors"
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
  import BaseTextTypeInput from './BaseTextTypeInput.vue';
  import useVuelidate from '@vuelidate/core';
  import { required, minLength } from '../utils/i18n-validators';
  import { email, maxLength, minValue } from '@vuelidate/validators';
  import { defineComponent } from 'vue';
  import BaseSelect from './BaseSelect.vue';
  import BaseRadio from './BaseRadio.vue';
  import BaseCheckbox from './BaseCheckbox.vue';
  import BaseTextArea from './BaseTextArea.vue';
  import BaseMultipleCheckbox from './BaseMultipleCheckbox.vue';

  export default defineComponent({
    name: 'BaseForm',
    components: {
      BaseTextArea,
      BaseCheckbox,
      BaseRadio,
      BaseSelect,
      BaseTextTypeInput,
      BaseMultipleCheckbox,
    },
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
          comments: '',
          subscribe: false,
          terms: '',
          marketing: [] as string[],
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
          comments: { maxLength: maxLength(256) },
          subscribe: { required },
          terms: { required },
        },
      };
    },
  });
</script>

<style scoped></style>
