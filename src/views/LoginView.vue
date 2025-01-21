<template>
  <f7-page name="login">
    <f7-navbar title="Iniciar Sesión" back-link="Back"></f7-navbar>
    <f7-block-title>Iniciar Sesión</f7-block-title>
    <f7-block>
      <f7-list form>
        <f7-list-input
          label="Email"
          type="email"
          placeholder="Tu email"
          :value="email"
          @input="email = $event.target.value"
          outline
          floating-label
          clear-button
        ></f7-list-input>
        <f7-list-input
          label="Contraseña"
          type="password"
          placeholder="Tu contraseña"
          :value="password"
          @input="password = $event.target.value"
          outline
          floating-label
          clear-button
        ></f7-list-input>
      </f7-list>
      <f7-button fill @click="handleLogin">Login</f7-button>
      <p class="text-align-center" style="margin-top: 20px;">
        ¿No estás registrado? <f7-link href="/signup">Regístrate aquí</f7-link>
      </p>
    </f7-block>
  </f7-page>
</template>

<script setup>
  import { ref } from 'vue';
  import { f7 } from 'framework7-vue';
  import { signInWithPassword } from '../services/auth.service';

  const email = ref('');
  const password = ref('');

  const handleLogin = async () => {
    try {
      const data = await signInWithPassword(email.value, password.value);
      f7.dialog.alert('Inicio de sesión exitoso', 'Éxito');
      f7.store.dispatch('setUser', { user: data.user });
      f7.views.main.router.navigate('/');
    } catch (error) {
      password.value = '';
      f7.dialog.alert('Credenciales incorrectas', 'Error');
    }
  };
</script>