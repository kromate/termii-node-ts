export declare type SendMessageBody = {
    to: string;
    from: string;
    type: string;
    channel: string;
    media: {
        url: string | null;
        caption: string | null;
    } | null;
};
export declare type SendMessageBulk = {
    to: string[];
    from: string;
    type: string;
    channel: string;
    media: {
        url: string | null;
        caption: string | null;
    } | null;
};
export declare type SendMessageResponse = {
    message_id: string;
    message: string;
    balance: number;
    channel: number;
    user: string;
};
