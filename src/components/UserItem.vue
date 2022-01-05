<template>
  <li class="user-item">
    <div class="user-information">
      <span>{{ positionUser }}.-</span>
      <span>{{ name }} ({{ userName }}) </span>
    </div>

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
    positionUser: {
      type: Number,
      default: 0,
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