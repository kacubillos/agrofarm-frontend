<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">Agrofarm</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" v-if="logged">
          <li>
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li>
            <router-link to="/crops" class="nav-link">Cultivos</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-dark" @click="logout">Cerrar sesión</button>
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/access-account" class="nav-link">Iniciar sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/auth/signup" class="nav-link">Registrarse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      logged: false
    }
  },
  created() {
    if(sessionStorage.getItem('user_token'))
      this.logged = true;
  },
  methods: {
    logout: function() {
      sessionStorage.removeItem('user_token');
      sessionStorage.removeItem('user_id');
      window.location.href = '/access-account';
    }
  }
}
</script>