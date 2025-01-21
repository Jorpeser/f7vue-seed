<template>
  <f7-page name="registrarse">
    <f7-navbar title="Registrarse" back-link="Back"></f7-navbar>
    <f7-block-title>Registrarse</f7-block-title>
    <f7-block>
      <f7-list form>
        <f7-list-input
          label="Email"
          type="email"
          placeholder="Tu email"
          :value="email"
          @input="email = $event.target.value"
          required
          validate
          outline
          floating-label
        ></f7-list-input>
        <f7-list-input
          label="Contraseña"
          type="password"
          placeholder="Tu contraseña"
          :value="password"
          @input="password = $event.target.value"
          required
          validate
          outline
          floating-label
        ></f7-list-input>
        <f7-list-input
          label="Confirmar Contraseña"
          type="password"
          placeholder="Confirma tu contraseña"
          :value="confirmPassword"
          @input="confirmPassword = $event.target.value"
          required
          validate
          outline
          floating-label
        ></f7-list-input>
      </f7-list>
      <f7-button fill @click="register">Registrarse</f7-button>
      <p class="text-align-center" style="margin-top: 20px;">
        ¿Ya estás registrado? <f7-link href="/login">Inicia sesión aquí</f7-link>
      </p>
    </f7-block>
  </f7-page>
</template>

<script setup>
  import { ref } from 'vue';
  import { f7 } from 'framework7-vue';
  import { signUp } from '../lib/services/auth.service';

  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  const register = async () => {
    console.log('entro register');
    if (password.value !== confirmPassword.value) {
      f7.dialog.alert('Las contraseñas no coinciden', 'Error');
      password.value = '';
      confirmPassword.value = '';
      return;
    }

    try {
      await signUp(email.value, password.value);
      f7.dialog.alert('Registro exitoso', 'Éxito');
      f7.views.main.router.navigate('/login');
    } catch (error) {
      email.value = '';
      password.value = '';
      confirmPassword.value = '';
      f7.dialog.alert('Error al registrarse', 'Error');
    }
  };
</script>
