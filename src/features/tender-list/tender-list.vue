<script setup lang="ts">
import { defineProps } from 'vue';

import { ITender } from '@/shared/api/tenders/model/types';

defineProps<{
    tenders: ITender[];
    searchQuery: string;
}>();
</script>

<template>
    <ul v-if="tenders.length" class="tender-list">
        <RouterLink v-for="tender in tenders.slice(0, 30)" :key="tender.id" :to="`/tender/${tender.id}`">
            <li class="tender-item">
                <strong>Tender Title:</strong>
                {{ tender.title }}
            </li>
        </RouterLink>
    </ul>
    <p v-else class="no-results">No results found</p>
</template>

<style lang="scss" scoped>
.tender-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    min-height: 200px;
    padding: 50px;
    margin: 20px;
}

.tender-item {
    padding: 16px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border: 2px solid #f4678d;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.tender-item:hover {
    border-color: #8779f3;
    box-shadow: 0 8px 16px rgb(0 0 0 / 20%);
    transform: translateY(-5px);
}

.no-results {
    margin: 20px;
    font-size: 18px;
    color: #777;
    text-align: center;
}
</style>
