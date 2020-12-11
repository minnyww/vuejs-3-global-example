// import { provide, inject, ref } from "vue";

// const COUNTER_CONTEXT = Symbol();

// export default function useCounter() {
//    const count = ref(0);
//    const increment = () => count.value++;

//    provide(COUNTER_CONTEXT, {
//       count,
//       increment,
//    });

//    return {
//       count,
//       increment,
//    };
// }

// export function useCounterContext() {
//    const context = inject(COUNTER_CONTEXT);

//    if (!context) {
//       throw new Error("useCounterContext must be used with useCounterProvider");
//    }

//    return context;
// }

import { ref } from "vue";

export default function useCounter() {
   const count = ref(0);
   const increment = () => count.value++;

   return {
      count,
      increment,
   };
}
