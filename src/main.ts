import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
// カスタムCSSをインポート
import "./scss/style.scss";
// BootstrapのJSをすべてインポート

const app = createApp(App);

app.use(router);
app.mount("#app");
