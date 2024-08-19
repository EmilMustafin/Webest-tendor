<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';

import PaginationTender from '@/features/pagination-tender/pagination-tender.vue';
import TenderList from '@/features/tender-list/tender-list.vue';
import { getListTenders } from '@/shared/api/tenders/model/api';
import { ITenderList } from '@/shared/api/tenders/model/types';
import InputSearch from '@/shared/ui/input-search/input-search.vue';

const currentPage = ref<number>(1);
const totalPages = ref<number>(1);
const tenders = ref<ITenderList>();
const searchQuery = ref<string>('');

const fetchTenders = async () => {
    const response = await getListTenders(currentPage.value);
    tenders.value = response;
    totalPages.value = response.page_count;
};

onMounted(() => {
    fetchTenders();
});

watch([currentPage, searchQuery], () => {
    fetchTenders();
});
const filteredTenders = computed(() =>
    tenders.value?.data.filter((tender) => tender.title.includes(searchQuery.value)),
);

const handleSearch = (e: Event) => {
    const target = e.target as HTMLInputElement;
    searchQuery.value = target.value;
    currentPage.value = 1;
};
</script>

<template>
    <h1 class="tender-heading">Список Tenders</h1>
    <InputSearch :placeholder="'Search tenders'" @search="handleSearch" />
    <TenderList v-if="filteredTenders" :search-query="searchQuery" :tenders="filteredTenders" />
    <p v-else class="no-results">No tenders found</p>
    <PaginationTender
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="(page) => (currentPage = page)"
    />
</template>

<style lang="scss" scoped>
.tender-heading {
    position: relative;
    padding: 20px;
    margin: 20px 0;
    font-size: 2.5rem;
    color: #333;
}

.no-results {
    padding: 40px;
    margin: 20px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #666;
    text-align: center;
}
</style>
