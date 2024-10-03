import { createI18n } from "vue-i18n";
import uz from "@/locales/uz.json";
import ru from "@/locales/ru.json";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "uz",
  messages: {
    uz,
    ru,
  },
});

export default i18n;
