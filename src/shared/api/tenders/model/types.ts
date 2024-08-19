interface IPurchaser {
    id: number;
    sid: number;
    name: string;
}

interface IPurchaserType {
    id: string;
    name: string;
    slug: string;
}

interface ISupplier {
    name: string;
    id: number;
    slug: string;
}
interface IOffersCountData {
    [key: string]: number;
}
interface IAwarded {
    date: string;
    value_for_two: number;
    value_for_two_eur: number;
    suppliers: ISupplier[];
    value_for_three: number;
    offers_count_status: string;
    value_for_one_eur: number;
    count: number;
    value_for_one: number;
    value_for_three_eur: number;
    suppliers_id: number;
    value_eur: number;
    offers_count: number[];
    suppliers_name: string;
    value: number;
    offers_count_data: IOffersCountData;
}

export interface ITender {
    id: string;
    date: string;
    deadline_date: string;
    deadline_length_days: string;
    title: string;
    category: string;
    description: string;
    phase: string;
    phase_en: string;
    place: string;
    sid: string;
    eid: string;
    awarded_value: string;
    awarded_currency: string;
    awarded_value_eur: string;
    purchaser: IPurchaser;
    type: IPurchaserType;
    awarded: IAwarded[];
}
interface IFinancialData {
    initial_estimated: string;
    final: string;
    currency: string;
}
interface NoticeBlock {
    id: string;
    sid: string;
    name: string;
    type: string;
    date: string;
    comments: string | null;
    block: string;
    doc_id: string;
    doc_url: string;
    doc_size: string;
    doc_pages: string | null;
    doc_accept: string;
}
interface INotices {
    SZERZODESSEL_KAPCSOLATOS_INFORMACIOK_BLOKK: NoticeBlock[];
    OSSZEGZES_AJANLAT_ELBIRALAS_BLOKK: NoticeBlock[];
    ELOZETES_VITARENDEZES_BLOKK: NoticeBlock[];
}
interface IAwardedDetails {
    date: string;
    suppliers_id: number;
    value: number;
    count: number;
    suppliers_name: string;
    suppliers: ISupplier[];
    value_eur: number;
    value_for_one: number;
    value_for_one_eur: number;
    value_for_two: number;
    value_for_two_eur: number;
    value_for_three: number;
    value_for_three_eur: number;
    offers_count_data: IOffersCountData;
    offers_count: number[];
}
export interface ITenderList {
    page_count: number;
    page_number: number;
    page_size: number;
    total: number;
    data: ITender[];
}
export interface ITenderDetails {
    id: string;
    date: string;
    deadline_date: string;
    deadline_length_days: string;
    title: string;
    category: string;
    description: string;
    phase: string;
    phase_en: string;
    place: string;
    sid: string;
    eid: string;
    awarded_value: string;
    awarded_currency: string;
    awarded_value_eur: string;
    data: IFinancialData;
    purchaser: IPurchaser;
    type: IPurchaserType;
    notices: INotices;
    awarded: IAwardedDetails[];
}
