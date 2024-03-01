import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { registerApplication, start, LifeCycles } from "single-spa";

import { AppView } from "./app";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AppView,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log('err', err);
    
    return <div>error</div>;
  },
});

registerApplication({
  name: '@micro-app/root',
  app: lifecycles,
  activeWhen: ["/"]
});

registerApplication({
  name: '@micro-app/app3',
  app: () => System.import<LifeCycles>('//localhost:8088/main.js'),
  activeWhen: ["/app3"]
})

start();
