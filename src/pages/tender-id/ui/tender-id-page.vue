<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getTenderId } from '@/shared/api/tenders/model/api';
import { ITenderDetails } from '@/shared/api/tenders/model/types';

const route = useRoute();
const id = Number(route.params.id);
const response = ref<ITenderDetails>();

onMounted(async () => {
    response.value = await getTenderId(id);
});
</script>

<template>
    <Transition name="slide-fade">
        <div v-if="response" class="tender-card">
            <button class="back-btn" @click="$router.go(-1)">Назад</button>
            <h1 class="tender-heading">Tender Details</h1>
            <div class="tender-info">
                <div class="info-item">
                    <strong>Purchaser Name:</strong>
                    <span>{{ response?.purchaser?.name }}</span>
                </div>
                <div class="info-item">
                    <strong>Tender Title:</strong>
                    <span>{{ response?.title }}</span>
                </div>
                <div class="info-item">
                    <strong>Tender Description:</strong>
                    <span>{{ response?.description }}</span>
                </div>
            </div>
        </div>
        <p v-else class="no-results">No tender found</p>
    </Transition>
</template>

<style lang="scss" scoped>
.tender-heading {
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
    text-align: center;
}

.tender-card {
    max-width: 600px;
    padding: 24px;
    margin: 24px auto;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
}

.back-btn {
    padding: 10px 20px;
    margin-bottom: 16px;
    color: #fff;
    cursor: pointer;
    background-color: #6a5acd;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.back-btn:hover {
    background-color: #483d8b;
}

.tender-info {
    font-size: 18px;
    line-height: 1.6;
    color: #333;

    .info-item {
        margin-bottom: 16px;
    }
}

.no-results {
    padding: 40px;
    margin: 20px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #666;
    text-align: center;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>
