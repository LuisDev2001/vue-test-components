<template>
  <li class="user-item">
    <p>{{ name }} ({{ userName }}) </p>

    <div class="user-actions">
      <button @click="emitSeeDetailsUser">Detalles</button>
      <button @click="emitDeleteUser">Eliminar</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: '',
    },
  },
  methods: {
    emitSeeDetailsUser () {
      this.$emit('handleSeeDetails')
    },
    emitDeleteUser () {
      this.$emit('handleDelete')
    },
  },
}
</script>

<style>

</style>