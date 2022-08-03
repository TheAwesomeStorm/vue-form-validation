<template>
  <div class="select">
    <label for="select-language" />
    <select
      id="select-language"
      v-model="lang"
      @change="modifyAppLanguage($event)"
    >
      <option value="en">{{ $t('lang.english') }}</option>
      <option value="pt_BR">{{ $t('lang.brazilian-portuguese') }}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  const lang = localStorage.getItem('lang') || 'en';
  const modifyAppLanguage = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', value);
    window.location.reload();
  };
</script>

<style scoped>
  .select {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px 16px 0 0;
  }
</style>
