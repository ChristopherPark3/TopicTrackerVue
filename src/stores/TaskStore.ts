import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        taskList: [] as Tasks[]
    }),
    actions: {
        addTask(task: string): void {
            if (!task) return;
            this.taskList.push({
                id: Math.floor(Math.random() * 101),
                taskName: task,
                completed: false
            })
        }
    }
})

type Tasks = {
    id: number,
    taskName: string,
    completed: boolean
}

