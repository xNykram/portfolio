import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiLinkedin } from "oh-vue-icons/icons";
import VueParticles from 'vue-particles'



addIcons(BiGithub, BiLinkedin);

const app = createApp(App);
app.use(router);
app.use(VueParticles)
app.mount("#app");
app.component("v-icon", OhVueIcon);

Particles(app, {});
