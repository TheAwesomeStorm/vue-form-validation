<template>
  <BaseTextTypeInput
    type="text"
    :label="$t('form.name')"
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
    :label="$t('form.age')"
    v-model="userData.age"
    :errors="v$.userData.age.$errors"
  />
  <BaseTextTypeInput
    :label="$t('form.email')"
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
    :options="[
      $t('form.gender.options.male'),
      $t('form.gender.options.female'),
      $t('form.gender.options.non-binary'),
    ]"
    :label="$t('form.gender.description')"
    v-model="userData.gender"
    :placeholder="$t('form.gender.options.placeholder')"
    :errors="v$.userData.gender.$errors"
  />
  <BaseTextArea
    :label="$t('form.message.label')"
    :placeholder="$t('form.message.placeholder')"
    v-model="userData.comments"
    :errors="v$.userData.comments.$errors"
  />
  <BaseMultipleCheckbox
    :question="$t('form.offer.description')"
    :options="['Google', 'LinkedIn', 'Facebook', 'Instagram', 'Twitter']"
    v-model="userData.marketing"
  />
  <BaseCheckbox
    :label="$t('form.newsletter')"
    v-model="userData.subscribe"
    :errors="v$.userData.subscribe.$errors"
  />
  <BaseRadio
    name="offer"
    :options="[$t('form.terms.options.yes'), $t('form.terms.options.no')]"
    :question="$t('form.terms.description')"
    v-model="userData.terms"
    :errors="v$.userData.terms.$errors"
  />

  <div class="field is-grouped">
    <div class="control">
      <button
        class="button is-link"
        @click="validate"
        :disabled="isFormInvalid"
      >
        {{ $t('form.buttons.submit') }}
      </button>
    </div>
    <div class="control">
      <button class="button is-link is-light">
        {{ $t('form.buttons.cancel') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import BaseTextTypeInput from './form/BaseTextTypeInput.vue';
  import useVuelidate from '@vuelidate/core';
  import {
    required,
    minLength,
    maxLength,
    minValue,
    email,
  } from '../utils/i18n-validators';
  import { defineComponent } from 'vue';
  import BaseSelect from './form/BaseSelect.vue';
  import BaseRadio from './form/BaseRadio.vue';
  import BaseCheckbox from './form/BaseCheckbox.vue';
  import BaseTextArea from './form/BaseTextArea.vue';
  import BaseMultipleCheckbox from './form/BaseMultipleCheckbox.vue';

  export default defineComponent({
    name: 'FormSample',
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
        isFormInvalid: false,
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
        if (!isFormValid) {
          this.isFormInvalid = true;
          return;
        }
        this.isFormInvalid = false;
        console.log('Formulário válido');
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
