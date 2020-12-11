import { reactive, toRefs } from 'vue';

export default function useReactive() {
   const state = reactive({
      foo: 1,
      bar: 2,
   });

   const updateFoo = () => {
      state.foo++;
   };
   //    const stateAsRefs = toRefs(state);
   //    state.foo++;
   //    console.log('stateAsRefs :::: ', stateAsRefs.foo);

   return { ...toRefs(state), updateFoo };
}
