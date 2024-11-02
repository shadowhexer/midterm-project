// src/shims-vue.d.ts
declare module '../views/HomeView.vue';
declare module '../views/AboutView.vue';
declare module '../views/ServicesView.vue';
declare module '../views/ContactView.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module '@jamescoyle/vue-icon';
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

  