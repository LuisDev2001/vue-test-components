<template>
  <ul class="user-list">
    <user-item
      v-for="user in usersList"
      :key="user.id"
      :name="user.name"
      :user-name="user.username"
      @handleSeeDetails="handleSeeDetailsUsers"
      @handleDelete="handleDeleteUser"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import UserItem from "./UserItem.vue";

export default {
  name: 'UserList',
  components: {
    UserItem,
  },
  methods: {
    handleSeeDetailsUsers () {
      console.log('click')
    },
    handleDeleteUser () {
      console.log('click')
    },
  },
  computed: {
    ...mapState({
      usersList: (state) => state.usersList,
    }),
  }
}
</script>

<style>

</style>