<template>
  <input
    type="text"
    :placeholder="placeholder"
    :aria-placeholder="placeholder"
    v-model="input"
    :required="required"
  >
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String,
    value: String,
    required: Boolean
  },
  data() {
    return {
      input: ''
    }
  },
  watch: {
    input() {
      if (this.value !== this.input)
        return this.$emit('input', this.input);
    }
  },
  created() {
    this.input = this.value;
  }
}
</script>

<style scoped>
  input {
    background-color: rgba(2, 19, 51, 0.8);
    border: none;
    border-radius: 4px;
    width: 75%;
    font-size: 1.1rem;
    padding: 10px 22px;
    color: #F0F0F0;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    transition: background-color .15s ease;
  }
  input::-webkit-input-placeholder {
    color: rgba(133, 162, 206, 0.5);
  }
  input:focus {
    background-color: #021333;
  }
</style>
