<template>
  <f7-page name="home">

    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-material="menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        <img src="" alt="Logo" style="height: 20px;">
      </f7-nav-title>
      <f7-nav-right>
        <f7-link icon-material="notifications" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
  
    <f7-block strong v-if="user">
      <h1>
        Bienvenido, {{ user.user.email }}
      </h1>
      <p>
        <f7-button fill raised @click="handleLogout">Logout</f7-button>
      </p>
    </f7-block>
    <f7-block strong v-else>
      <p>
        <f7-button fill raised href="/login">Log In</f7-button>
      </p>
      <p>
        <f7-button fill raised href="/signup">Sign Up</f7-button>
      </p>
    </f7-block>


  </f7-page>
</template>

<script setup>
  import store from '../store.js';
  import { f7 } from 'framework7-vue';
  import { ref, onMounted, onBeforeUpdate } from 'vue';
  import { signOut } from '../lib/services/auth.service';
  
  const user = ref(store.state.user);

  const handleLogout = async () => {
    await signOut();
    f7.store.dispatch('setUser', { user: null });
    user.value = null;
  };

</script>