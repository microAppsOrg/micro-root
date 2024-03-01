import { LifeCycles, RegisterApplicationConfig } from "single-spa";
import { MenuProps } from "antd";

export const APPS_CONFIG: RegisterApplicationConfig[] = [
  {
    name: "@micro-app/app1",
    app: () => System.import<LifeCycles>("//localhost:8500/micro-app-app1.js"),
    activeWhen: ["/app1"]
  },
  {
    name: "@micro-app/app2",
    app: () => System.import<LifeCycles>("//localhost:8600/micro-app-app2.js"),
    activeWhen: ["/app2"]
  },
  {
    name: "@micro-app/app3",
    app: () => System.import<LifeCycles>("//localhost:8088/main.js"),
    activeWhen: ["/app3"]
  }
];

export const APP_MENUS: MenuProps['items'] = [
  {
    label: 'app1',
    key: '/app1',
    children: [
      {
        label: '1',
        key: '/app1/1'
      }
    ]
  },
  {
    label: 'app2',
    key: '/app2',
    children: [
      {
        label: '2',
        key: '/app2/2'
      }
    ]
  },
  {
    label: 'app3',
    key: '/app3',
    children: [
      {
        label: '3',
        key: '/app3/3'
      }
    ]
  },
]