import Modal from "vue-js-modal";
import Vue from "vue";
import "./modal.css";

export default function () {
  Vue.use(Modal, {
    dynamic: true,
    dynamicDefaults: {
      height: "auto",
      width: "100%",
      scrollable: true,
      adaptive: true,
      clickToClose: true,
    },
  });
}