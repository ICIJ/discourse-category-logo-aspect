import Service from "@ember/service";
import { disableImplicitInjections } from "discourse/lib/implicit-injections";

@disableImplicitInjections
export default class CategoryLogoAspect extends Service {
  VAR_ENALBED = '--category-logo-aspect-enabled';
  VAR_FIT = '--category-logo-aspect-fit';
  VAR_RATIO = '--category-logo-aspect-ratio';
  VAR_MAX_WIDTH = '--category-logo-aspect-max-width';
  VAR_FLOATING = '--category-logo-aspect-floating';
  VAR_SUBCATEGORIES_CLEAR = '--category-logo-aspect-subcategories-clear';

  get fit() {
    return settings.fit;
  }

  get maxWidth() {
    const mw = parseInt(settings.max_width, 10);
    return `${mw}px`;
  }

  get ratio() {
    return this.ratioMap[settings.ratio];
  }

  get ratioMap() {
    return {
      square: 1,
      landscape: 9 / 16,
      portrait: 16 / 9
    };
  }

  get enabled() {
    return settings.enabled.toString();
  }

  get floating() {
    return settings.floating.toString();
  }

  get subcategoriesClear() {
    return settings.subcategories_clear.toString();
  }
}
