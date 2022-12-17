export declare type SenderResponse = {
    current_page: number;
    data: {
        sender_id: string;
        status: string;
        "company": string;
        "usecase": null | string;
        "country": null | string;
        created_at: string;
    }[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null | string;
    to: number;
    total: number;
};
export declare type SenderRequestOptions = {
    sender_id: string;
    usecase: string;
    company: number;
};
