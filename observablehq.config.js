// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: 'Petal-X: Cardiovascular Disease (CVD) Risk Calculator',

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="petalx.png" type="image/png" sizes="96x96">',

  // The path to the source root.
  root: 'src',

  // Some additional configuration options and their defaults:
  theme: ['light', 'alt'], // try "light", "dark", "slate", etc.
  header: `<div id="header-container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 0; display: flex; align-items: center; gap: 10px;">
    <img src="petalx.svg" height="24">
    Petal-X: Cardiovascular Disease (CVD) Risk Calculator
  </div>
  <div style="display: flex; align-items: center; gap: 20px; margin-top: -8px;">
    <img src="fzv_logo.png" height="48" alt="University of Maribor - Faculty of Health Sciences logo">
    <img src="kuleuven_logo.png" height="48" alt="KU Leuven logo">
    <img src="zdl_logo.png" height="48" alt="Community Health Centre Ljubljana logo" style="margin-right: 0.75rem;">
  </div>
</div>`,
  // what to show in the header (HTML)
  footer:
    'Built with 🫀 by <a href="mailto:rojo@hey.com" target="_blank">Diego Rojo</a> <a href="https://github.com/93degree" style="text-decoration: none;" target="_blank"><img src="github.svg" height="12" style="vertical-align: text-top; margin-left: 4px;"></a>',
  // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  output: 'docs', // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
