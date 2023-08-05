import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiLinkedin } from "oh-vue-icons/icons";

addIcons(BiGithub, BiLinkedin);

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("v-icon", OhVueIcon);

Particles(app, {});
