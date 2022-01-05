<template>
  <div class="users">
    <h1>This is the page to show users</h1>
    <user-list />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue'
export default {
  name: 'Users',
  components: {
    UserList,
  },
  async created () {
    this.$store.dispatch('GET_USERS_LIST')
  },
}
</script>

<style>

</style>