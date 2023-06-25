window.cef.on('browser:execute', (query: string) => {
  eval(query);
});
