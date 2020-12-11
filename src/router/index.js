import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.jsx";
import Todo from "../components/Todo.jsx";

const routerHistory = createWebHistory();
const router = createRouter({
   history: routerHistory,
   routes: [
      {
         path: "/",
         component: HelloWorld,
      },
      {
         path: "/todo",
         component: Todo,
      },
   ],
});

export default router;
