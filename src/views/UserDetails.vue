<template>
  <div class="user-detail">
    <h1>Detalles de usuario</h1>
    <div v-if="loading">
      Cargando detalles de usuario...
    </div>
    <div v-else>
      <p><b>Nombre:</b> {{ userDetails.name }}</p>
      <p><b>Correo:</b> {{ userDetails.email }}</p>
      <p><b>Telefono:</b> {{ userDetails.phone }}</p>
      <p><b>Sitio Web:</b> {{ userDetails.website }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserDetails',
  data () {
    return {
      loading: true,
    }
  },
  beforeDestroy () {
    this.$store.commit('SET_USERS_DETAILS', {})
  },
  async created () {
    await this.getUserById()
  },
  computed: {
    ...mapState({
      userDetails: (state) => state.userDetails,
    }),
  },
  methods: {
    async getUserById () {
      try {
        this.loading = true
        const params = {
          id: this.$route.params.id,
        };
        await this.$store.dispatch('GET_USER_BY_ID', params)
        this.loading = false
      } catch (error) {
        return error
      }
    },
  }
}
</script>

<style>

</style>