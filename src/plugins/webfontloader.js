/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ "webfontloader"
  );

  webFontLoader.load({
    google: {
      families: [
        "PT+Sans:400,400italic,700,700italic",
        "PT+Sans+Caption:400,700",
        "PT+Sans+Narrow:400,700",
      ],
    },
  });
}
