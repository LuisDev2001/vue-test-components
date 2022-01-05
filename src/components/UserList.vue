<template>
  <ol class="user-list">
    <user-item
      v-for="(user, index) in usersList"
      :key="user.id"
      :position-user="index + 1"
      :name="user.name"
      :user-name="user.username"
      @handleSeeDetails="handleSeeDetailsUsers(user.id)"
      @handleDelete="handleDeleteUser(index)"
    />
  </ol>
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
    handleSeeDetailsUsers (userId) {
      this.$router.push({
        name: 'UserDetails',
        params: {
          id: userId
        },
      });
    },
    handleDeleteUser (userPosition) {
      this.usersList.splice(userPosition, 1);
      this.$store.commit('SET_USERS_LIST', this.usersList)
    },
  },
  computed: {
    ...mapState({
      usersList: (state) => state.usersList,
    }),
  }
}
</script>

<style lang="css">
.user-list {
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  text-align: left;
  padding: 0;
  display: block;
  height: auto;
}
.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.user-information span {
  display: inline-block;
  margin: 0 .4rem 0 0;
}
.user-actions button {
  padding: 6px 12px;
  border-radius: 5px;
  font-size: .8rem;
  opacity: .8;
  transition: opacity .4s ease, transform .15s ease-in;
  border-bottom: 3px solid;
}
.user-actions button:hover {
  opacity: 1;
}
.user-actions button:active {
  transform: scale(.9);
}
.user-actions button:first-child {
  margin: 0 .7rem 0 0;
  border-bottom-color: #0314f8;
  background: #505bff;
  color: #fff;
}
.user-actions button:last-child {
  border-bottom-color: #ff0000;
  background: #ff5050;
  color: #fff;
}
</style>