export interface GetKeywordsPort {
    (key: string): Promise<string>;
}