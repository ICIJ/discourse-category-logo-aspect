import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", function (api) {
  api.onPageChange(() => {
    const target = document.querySelector(settings.container);
    const aspect = api.container.lookup("service:category-logo-aspect");
    target.style.setProperty(aspect.VAR_ENALBED, aspect.enabled);
    target.style.setProperty(aspect.VAR_FIT, aspect.fit);
    target.style.setProperty(aspect.VAR_MAX_WIDTH, aspect.maxWidth);
    target.style.setProperty(aspect.VAR_RATIO, aspect.ratio);
    target.style.setProperty(aspect.VAR_FLOATING, aspect.floating);
    target.style.setProperty(
      aspect.VAR_SUBCATEGORIES_CLEAR,
      aspect.subcategoriesClear
    );
  });
});
