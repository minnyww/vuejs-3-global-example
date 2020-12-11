// import { defineComponent } from '@vue/composition-api';

import { defineComponent, reactive, ref } from "vue";
import useCounter from "../hooks/useCounter";
import useReactive from "../hooks/useReactive";
import { countStore1 } from "../hooks/useGlobalState";

export default defineComponent({
   setup() {
      const count = ref(0);
      const userList = reactive([{ name: "min" }, { name: "myy" }]);
      const {
         count: countFromHook,
         increment: incrementFromHook,
      } = useCounter();
      const { foo, updateFoo } = useReactive();

      return {
         countFromHook,
         incrementFromHook,
         count,
         userList,
         foo,
         updateFoo,
      };
   },

   methods: {
      increment() {
         console.log(this.count);
         this.count++;
      },
   },

   render() {
      return (
         <div>
            <button onClick={this.increment}>Increment</button>
            <span>Count: {this.count}</span>
            <h2>from hooks</h2>
            <span>count from hooks : {this.countFromHook}</span>
            <button onClick={this.incrementFromHook}>
               Incrementcount from hooks
            </button>
            <h3>global count : {countStore1.count}</h3>
            <h2>User List</h2>
            {this.userList.map((user) => {
               return user.name;
            })}
            <h2>foo,bar</h2>
            <h3>{this.foo}</h3>
            <button onClick={this.updateFoo}>update foo</button>
         </div>
      );
   },
});
