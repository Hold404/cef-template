<div align="center"><img src="https://media.discordapp.net/attachments/1067147407122510004/1099708595517538344/image_10.png" data-canonical-src="https://media.discordapp.net/attachments/1067147407122510004/1099708595517538344/image_10.png" width="200" height="200" />

# CEF Template</div>

![](https://img.shields.io/github/v/release/Hold404/cef-template?label=Release)
![](https://img.shields.io/github/downloads/Hold404/cef-template/total?label=Downloads)

Cef Template - is a Vue application template that has everything you need to create your CEF.

> Can be used in SAMP. GTA V version is available at [gta5](https://github.com/Hold404/cef-template/tree/gta5) branch.

## Video Example (CEF Template + SAMP)

[![Example](https://img.youtube.com/vi/uhIcGImo52g/maxresdefault.jpg)](https://youtu.be/uhIcGImo52g)

## 📦 How to install and build a project?

- To install the project, download the application [here](https://github.com/Hold404/cef-template/releases) and unzip it to a convenient location.  
  Next, in the project folder, run `yarn install` or `npm install` Now, you are ready to write the code.
- To build the project run: `yarn build` or `npm run build`
- To start the dev server use the command: `yarn dev` or `npm run build`
- To run the previously built project just open file `dist/index.html`

## 💻 How to create your own interface?

1. Create a file/folder of interface
2. Go to the App.vue file and import the component
3. Add a component to the `components` field
4. Add your component to `interfaces`

### Example

```typescript
// App.vue
<script lang="ts">
import { ref } from 'vue';
import CompositionAPIExample from '@/interfaces/CompositionAPIExample.vue';

export default {
  components: { CompositionAPIExample },
    setup() {
      const interfaces = ref({
      CompositionAPIExample: { display: false, }
    });

    return { interfaces };
  },
};
</script>
```

## ⌨️ How to manage the interface?

To control the interface, we have 5 functions added to the window object.

```typescript
window.getInterface = function(name: string) // Returns an interface object
window.interfaceStatus= function(name: string) // Returns the state of the interface (open/closed)
window.openInterface= function(name: string, args: string) // Opens the interface
window.hideInterface= function(name: string) // Closes the interface
window.interface= function(name: string) // Returns an interface
```

### More details

I will describe only complex control functions, `getInterface`, `interfaceStatus` and `hideInterface` are self-explanatory.

### openInterface

Opens an interface, has an additional args argument.
`args` is a JSON string that contains the so-called `openParams`.
Let's say your interface has a `name` field that you want to specify when you open the interface. You can, of course, just specify a value in the `data` field, but suppose you want to specify it when opening the interface, then the code will look like this:

```javascript
window.openInterface('InterfaceName', '[{"name": "test"}]');
```

The function will parse the arguments and apply them by key to the fields in data.

### interface

Will return an object for which you can directly change the fields, if we consider the previous example, then we could change the `name` field like this:

```javascript
window.interface('InterfaceName').name = 'Test';
```

As a result, the interface will be re-rendered and its `name` field will change.

## 📌 How to call window. functions from SAMP?

To use the functions of the window object, we changed the `cef.inc` include. We have added our `cef_browser_execute` function.
_ Example code using the function _

```pawn
cef_browser_execute(playerid, "window.showInterface('Test')");
```

Download our include in the latest release, replace the default one with it, and you can use the functions in the way above.  
(Also, you can use default `cef.on` etc.)

## 📑 Notes

In vue3, when using the `Composition API`, be sure to expose any fields you want to access from outside in `defineExpose`. Below I have left examples of the interface using `Options` and `Composition API`.

> Author: [Hold404](https://github.com/Hold404)
