import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase"; 
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCB7PAYz6zRWSggFDRX3mHYx-D2JK1QyYc",
  authDomain: "task-app-82ca2.firebaseapp.com",
  projectId: "task-app-82ca2",
  storageBucket: "task-app-82ca2.appspot.com",
  messagingSenderId: "296625508531",
  appId: "1:296625508531:web:4bb4ddfdcff9014bd3e0c6",
  measurementId: "G-QRMLQ8K62H"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");