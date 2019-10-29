declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'qs' {
  const qs: any;
  export default qs;
}
declare module '$post' {
  import {$post} from '@/utils/feth';
  export default $post;
}
declare module '$get' {
  import {$get} from '@/utils/feth';
  export default $get;
}

declare module '$Message' {
  export const $Message: any;
}

declare module '$Modal' {
  export const $Modal: any;
}

declare module '$router' {
  export const $router: any;
}

declare module 'el-tree-transfer' {
  export const treeTransfer: any;
}

declare module 'vue2-org-tree' {
  export const Vue2OrgTree: any;
}

declare module 'el-tree-select' {
  export const ElTreeSelect: any;
}

declare module '@riophae/vue-treeselect' {
  export const Treeselect: any;
}

declare module 'mavon-editor' {
  export const mavonEditor: any;
}
