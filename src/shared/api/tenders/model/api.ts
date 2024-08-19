import { BASE_URL } from '../../constants';

import { ITenderList, ITenderDetails } from './types';

const tenderApi = {
    getTenderId: async (id: number): Promise<ITenderDetails> => {
        const res = await fetch(`${BASE_URL}/element/?id=${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch tender details: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    },

    getListTenders: async (page: number): Promise<ITenderList> => {
        const res = await fetch(`${BASE_URL}/list/?page=${page}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch tender list: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    },
};

export const { getTenderId, getListTenders } = tenderApi;
