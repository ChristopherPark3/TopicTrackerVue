<script setup lang="ts">
import { useTaskStore } from './stores/TaskStore'
import TaskInput from './components/TaskInput.vue'
const { taskList } = useTaskStore();
</script>

<template>

  <main>
    <TaskInput />
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
  background-color: pink;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
}
.task {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  height: 70px;
  width: 120px;
}
.task-container {
  width: 60vw;
  background-color: green;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
