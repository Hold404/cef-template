export {};

declare global {
  interface Window {
    app: any;
    getInterface: function;
    interfaceStatus: function;
    openInterface: function;
    hideInterface: functrion;
    interface: function;
  }
}
