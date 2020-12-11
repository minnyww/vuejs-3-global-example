import { reactive } from "vue";
export const countStore1 = reactive({
   count: 0,
   double: () => countStore1.count * 2,
   increment: () => countStore1.count++,
   reset: () => (countStore1.count = 0),
});
