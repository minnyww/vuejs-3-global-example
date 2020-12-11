import { defineComponent, reactive, ref } from "vue";
import useCounter from "../hooks/useCounter";
import { countStore1 } from "../hooks/useGlobalState";

export default defineComponent({
   setup() {
      const todoLists = reactive([]);
      const todoText = ref("");
      const { count } = useCounter();

      const addText = (text) => {
         todoText.value = text;
      };

      const addTodo = () => {
         let newTodo = {
            value: todoText.value,
            isComplete: false,
         };
         todoText.value = "";
         todoLists.push(newTodo);
      };

      return {
         count,
         todoLists,
         todoText,
         addText,
         addTodo,
      };
   },

   render() {
      console.log("countStore1 : ", this.countGlobal, this.incrementGlobal);

      console.log("this.todoLists : ", this.todoLists);
      return (
         <div>
            value : {this.todoText}
            <br />
            {JSON.stringify(this.todoLists)}
            <br />
            <span>count from global : {countStore1.count}</span>
            <button
               onClick={() => {
                  countStore1.increment();
               }}
            >
               Increment global
            </button>
            <br />
            <input
               value={this.todoText}
               placeholder="add to do"
               onchange={(event) => this.addText(event.target.value)}
            />
            <button onClick={this.addTodo}>add</button>
         </div>
      );
   },
});
