import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import ToastService from "primevue/toastservice";

app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
