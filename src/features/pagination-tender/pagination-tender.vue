<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: 'page-changed', page: number): void;
}>();

const previousPage = () => {
    if (props.currentPage > 1) {
        emit('page-changed', props.currentPage - 1);
    }
};

const nextPage = () => {
    if (props.currentPage < props.totalPages) {
        emit('page-changed', props.currentPage + 1);
    }
};

// Функция для перехода на первую страницу
const goToFirstPage = () => {
    if (props.currentPage > 1) {
        emit('page-changed', 1);
    }
};
</script>

<template>
    <div class="paginator">
        <button :disabled="currentPage === 1" class="page-btn" @click="previousPage">&laquo; Previous</button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" class="page-btn" @click="nextPage">Next &raquo;</button>
        <button :disabled="currentPage === 1" class="first-page-btn" @click="goToFirstPage">First Page &uarr;</button>
    </div>
</template>

<style lang="scss" scoped>
.paginator {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    font-family: Arial, sans-serif;
    font-size: 16px;
}

.page-info {
    font-weight: bold;
    color: #333;
}

.page-btn,
.first-page-btn {
    padding: 8px 16px;
    color: #fff;
    cursor: pointer;
    background-color: #6a5acd;
    border: none;
    border-radius: 6px;
    transition:
        background-color 0.3s ease,
        transform 0.3s ease;
}

.page-btn:hover:not(:disabled),
.first-page-btn:hover:not(:disabled) {
    background-color: #483d8b;
    transform: translateY(-2px);
}
</style>
