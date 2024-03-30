import { ADD_ACTION, SUB_ACTION } from './contants'

export const addAction = (num) => ({type: ADD_ACTION, num})

export const subAction = (num) => ({type: SUB_ACTION, num})