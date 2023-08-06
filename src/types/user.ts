import { Cart, Order } from "./shop";

export interface User {
    isVerified: boolean;
    name: string;
    email: string;
    avatar: string;
    meta?: UserMeta;
}

export type UserMeta = {
    cart: Cart,
    reviewIds: number[],
    orderHistory: Order[]
}
export type UserStatus = 'authenticated' | 'loading' | 'guest'

export type UserLoginData = { email: string, password: string }

export type Auth = { status: UserStatus, token?: string, error?: string }