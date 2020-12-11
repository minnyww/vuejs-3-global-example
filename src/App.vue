<template>
   <div>
      <router-link to="/"> Home</router-link>
      <br />
      <router-link to="/todo">Contact </router-link>

      <hr />
      <!-- <h1>Todo list</h1>
      <Todo />
      <hr />
      <h1>My Event</h1>
      <HelloWorld />
      -->
      <!-- 
      -->
   </div>
   <router-view />
   <hr />
   <br />
   <hr />
   <h1>Test on Home page</h1>
   <h2>{{ user?.name }}</h2>
   <p>Capacity: {{ capacity }}</p>
   <button @click="increaseCapacity()">Increase Capacity</button>
   <button @click="changeName()">Change Name</button>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.jsx";
// import Todo from "./components/Todo.jsx";

import {
   ref,
   reactive,
   watchEffect,
   watch,
   onMounted,
   onUpdated,
   onUnmounted,
} from "vue";

export default {
   name: "App",
   // components: {
   //    HelloWorld,
   //    Todo,
   // },
   setup() {
      const capacity = ref(3);
      const user = reactive({ name: "min" });

      onMounted(() => {
         console.log("mounted!");
      });
      onUpdated(() => {
         console.log("updated!");
      });
      onUnmounted(() => {
         console.log("unmounted!");
      });

      watch(
         () => capacity.value,
         (capacity, prevCount) => {
            console.log("single watch : ", capacity, prevCount);
         },
      );
      watchEffect(() => console.log(capacity.value));

      function increaseCapacity() {
         capacity.value++;
      }

      function changeName() {
         user.name = "pang";
      }
      return { capacity, increaseCapacity, changeName, user };
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
