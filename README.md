# react-boilerplates
ReactJS TypeScript boilerplates with different app configurations.

## redux-tools-esbuild

PWA, built with using TypeScript, ReactJS, Redux, Redux-Tools, react-router-dom, SASS, esbuild, eslint.
Includes parsing HTML and SASS processor.

### Esbuild known issues

- Does not support HTML parsing. Therefore using [hash] in generated file names is difficult.
- Does not have SASS processor. Need to add a plugin to parse SASS styles.
- Does not support PWA routing. Reloading server on any non-index route leads to 404. As workaround we will need to write a proxy server to pass all requests to the "/".

### Examples

```bash
cd redux-tools-esbuild
npm run dev
# Serving on "http://127.0.0.1:3000"

# or
npm run build
```

```
npm run build
node ./esbuild.js --prod

  dist/v0.0.1/index.js                                                                                 234.3kb  100.0%
   ├ node_modules/react-dom/cjs/react-dom.production.min.js                                            130.9kb   55.9%
   ├ node_modules/@remix-run/router/dist/router.js                                                      42.1kb   18.0%
   ├ node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs                                        11.3kb    4.8%
   ├ node_modules/immer/dist/immer.mjs                                                                   8.2kb    3.5%
   ├ node_modules/react-router/dist/index.js                                                             7.4kb    3.2%
   ├ node_modules/react/cjs/react.production.min.js                                                      6.5kb    2.8%
   ├ node_modules/react-router-dom/dist/index.js                                                         6.3kb    2.7%
   ├ node_modules/react-redux/dist/react-redux.mjs                                                       4.3kb    1.8%
   ├ node_modules/scheduler/cjs/scheduler.production.min.js                                              4.0kb    1.7%
   ├ node_modules/redux/dist/redux.mjs                                                                   3.2kb    1.4%
   ├ node_modules/reselect/dist/reselect.mjs                                                             2.7kb    1.1%
   ├ src/app/components/header/Header.tsx                                                                963b     0.4%
   ├ node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.min.js    818b     0.3%
   ├ node_modules/react-dom/index.js                                                                     270b     0.1%
   ├ src/app/components/error/ErrorPage.tsx                                                              258b     0.1%
   ├ src/app/Router.tsx                                                                                  246b     0.1%
   ├ src/app/state/slices/ui.ts                                                                          236b     0.1%
   ├ src/app/components/layout/MainLayout.tsx                                                            192b     0.1%
   ├ src/app/entities/UiEntity.ts                                                                        189b     0.1%
   ├ src/app/App.tsx                                                                                     180b     0.1%
   ├ src/app/pages/dashboard/DashboardPage.tsx                                                           168b     0.1%
   ├ src/app/pages/summary/SummaryPage.tsx                                                               164b     0.1%
   ├ src/index.tsx                                                                                       164b     0.1%
   ├ node_modules/redux-thunk/dist/redux-thunk.mjs                                                       154b     0.1%
   ├ node_modules/react-dom/client.js                                                                    107b     0.0%
   ├ node_modules/react/index.js                                                                          51b     0.0%
   ├ node_modules/scheduler/index.js                                                                      51b     0.0%
   ├ node_modules/use-sync-external-store/with-selector.js                                                51b     0.0%
   └ src/app/state/store.ts                                                                               37b     0.0%

  dist/v0.0.1/styles/index.css                                                                           281b   100.0%
   └ src/styles/index.scss                                                                               280b    99.6%
```
