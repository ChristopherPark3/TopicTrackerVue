<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from './stores/TaskStore'

const { taskList, addTask } = useTaskStore();

const newTask = ref()

</script>

<template>
  <main>
    <div>
    <input v-model="newTask"/>
      {{ newTask }}
      <button @click="() => addTask(newTask)">Add Task</button>
    </div>
    <div class="task-container">
      <div v-for="task in taskList" :key="task.id">
        <button class="task">{{ task.taskName }}</button>
      </div>
    </div>
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  width: 100vw;
  margin: none;
  /* background-color: pink; */
}
.task {
  height: 70px;
  width: 120px;
}
.task-container {
  width: 80vw;
  background-color: green;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
}
</style>
