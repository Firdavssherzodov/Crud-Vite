import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";

app.use(PrimeVue);
app.use(ToastService);
app.component("Button", Button);

app.mount("#app");
