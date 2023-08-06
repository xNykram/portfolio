<template>
  <div class="container">
    <div class="main-container">
      <h1><span>C</span>ontact</h1>
      <form @submit.prevent="submit" class="form">
        <v-text-field
          class="input"
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="Name"
        ></v-text-field>

        <v-textarea
          class="input"
          v-model="textarea.value.value"
          :error-messages="textarea.errorMessage.value"
          label="Message"
        ></v-textarea>

        <v-text-field
          class="input"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
        ></v-text-field>
        <v-btn class="me-4" type="submit"> submit </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const showDialog = ref(false);
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2 && value?.length <= 20) return true;

      return "Name needs to be at least 2 characters and maximum length is 20 characters.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    textarea(value) {
      if (value?.length <= 150 && value?.length >= 3) return true;
      return "Message needs to be at least 2 characters and maximum length is 150 characters.";
    },
  },
});
const name = useField("name");
const textarea = useField("textarea");
const email = useField("email");

const submit = handleSubmit((values) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'name': values.name,
    'email': values.email,
    'message': values.message })
};


fetch('http://xnykram.pl/api/v1/', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        if (!response.ok) {
            const error = (data && data.message) || response.status;
            alert(error)
            return Promise.reject(error);
        }
        alert("Email has been sent.")

    })
    .catch(error => {
        alert(error)
    });
});
</script>

<style>
.form {
  width: 60%;
  color: white;
}
.form .me-4 {
  background-color: #60a5fa;
}
.form .input{
  padding: 0.5vh;
}
</style>