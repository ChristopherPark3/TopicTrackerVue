<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore'

const { addTask } = useTaskStore();

const newTask = ref();
</script>

<template>
    <div>
        <input v-model="newTask"/>
        <button @click="() => addTask(newTask)">addTask</button>
    </div>

</template>