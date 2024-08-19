<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

defineProps<{
    placeholder?: string;
}>();

const emit = defineEmits<{
    change: [query: string];
}>();
const query = ref('');

function onInput() {
    emit('change', query.value);
}
</script>

<template>
    <div class="search-form">
        <input v-model="query" type="search" :placeholder="placeholder" class="search-input" @input.prevent="onInput" />
    </div>
</template>

<style scoped>
.search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
}

.search-input {
    width: 100%;
    max-width: 400px;
    padding: 10px 16px;
    font-size: 16px;
    color: #333;
    border: 2px solid #ccc;
    border-radius: 25px;
    transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.search-input::placeholder {
    color: #aaa;
}

.search-input:focus {
    border-color: #6a5acd;
    outline: none;
    box-shadow: 0 0 8px rgb(106 90 205 / 50%);
}

.search-input:hover {
    border-color: #888;
}
</style>
