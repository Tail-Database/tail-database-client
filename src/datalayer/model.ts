import { InsertResponse, UpdateResponse } from './data_layer_rpc';

export interface Model<T> {
    insert(record: T): Promise<InsertResponse>;
    update(record: T): Promise<UpdateResponse>;
    get(key: string): Promise<T>;
    all(): Promise<T[]>;
}
