import { createApp } from 'vue';
import App from './App.vue';
import './main.scss';

window.app = createApp(App).mount('#app');

window.getInterface = (name: string) => {
  const interfaces = window.app.$root.interfaces;
  const iface = interfaces[name];

  return iface;
};

window.interfaceStatus = (name: string) => {
  const iface = window.getInterface(name);
  return iface.display;
};

window.openInterface = (name: string, args: any) => {
  if (window.interfaceStatus(name)) return;

  let iface = window.getInterface(name);

  iface.display = true;

  setTimeout(() => {
    if (iface.display && args) {
      JSON.parse(args).forEach((param: any) => {
        const key = Object.keys(param)[0];
        const value = Object.values(param)[0];

        window.interface(name)[key] = value;
      });
    }
  }, 50);

  return;
};

window.hideInterface = (name: string) => {
  if (!window.interfaceStatus(name)) return;

  const iface = window.getInterface(name);

  iface.openParams = [];
  iface.display = false;

  return;
};

window.interface = (name: string) => {
  const iface = window.app.$refs[name][0];

  return iface;
};
