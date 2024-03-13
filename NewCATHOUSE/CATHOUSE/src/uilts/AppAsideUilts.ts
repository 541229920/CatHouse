import { ref } from "vue";

const ExWidth = ref("120px");
const AsideShow = ref(true);

const MenuEvent = () => {
  if (ExWidth.value == "120px") {
    ExWidth.value = "0px";
    AsideShow.value = !AsideShow.value;
  } else {
    ExWidth.value = "120px";
    AsideShow.value = !AsideShow.value;
  }
};

export { AsideShow, ExWidth, MenuEvent };
