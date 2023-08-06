import { Range_ } from "./lib";

export interface Cart {
    items: Item[],
    expiry?: Date
}

export interface Item {
    id: number
    name: string,
    price: number,
    pendingOrders?: number,
    rating?: number,
    reviews?: Review[],
    meta?: ItemMeta
}

export interface Review {
    id: number
    name: string,
    userId: string,
    isVerified: boolean,
    review: string,
    rating: number
}
export type ItemMeta = {
    isCustomizable: boolean,
    discounts?: Discount[],
}

export type Discount = {
    id: number
    name: string,
    percent?: Range_<1, 100>,
    max?: number,
    min?: number
}

export interface Order {
    id: number,
    userId: number,
    items: Item[],
    date: Date,
    appliedDiscounts?: Discount[],
    paymentDetails: Payment,
    review: Review | Review,
    status: OrderStatus
}

export interface Payment {
    id: number,
    userId?: number,
    method: CardPayment | OnlinePayment | { type: 'COD', date: Date },

}

type CardPayment = {
    type: 'Debit Card' | 'Credit Card',
    bank: string,
    cardNumber?: string,
    cvv?: number,
    expiry: Date
}

type OnlinePayment = {
    type: 'Online Banking' | 'UPI',
    id: number,
    bank: string
}

enum OrderStatus {
    DONE = 'Done',
    FAILED = 'Failed',
    PENDING = 'Pending',
}