import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.scss"; // global css

import router from "./router";
import Particles from "particles.vue3";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(Particles).use(ElementPlus).use(router).mount("#app");
