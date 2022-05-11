import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './index.css'
// createApp(App).mount('#app')

const app = createApp(App)
    .use(router);

router.isReady().then(() => {
    app.mount("#app");
});
