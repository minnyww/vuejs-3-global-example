import { reactive } from "vue";

export const countStore1 = reactive({
   count: 0,
   double: () => countStore1.count * 2,
   increment: () => countStore1.count++,
   reset: () => (countStore1.count = 0),
   fetch: async () => {
      const res = await fetch(
         "https://jsonplaceholder.typicode.com/todos?_limit=5",
      )
         .then((res) => res.json())
         .catch((err) => console.log(err));
      console.log("res : ", res);
      return (countStore1.count = 999);
   },
});
