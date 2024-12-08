import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faUserCircle,
  faCalendar,
  faComment,
  faBookmark,
  faStar,
  faShareNodes,
  faPrint,
  faCircleCheck,
  faClock,
  faGlobe,
  faUser,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faUserCircle,
  faCalendar,
  faComment,
  faBookmark,
  faStar,
  faShareNodes,
  faCircleCheck,
  faPrint,
  faClock,
  faGlobe,
  faUser,
  faBowlFood
);

const app = createApp(App);
app.use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
