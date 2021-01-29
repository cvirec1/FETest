import { Car } from '../shared/model/car';

export interface CarState {
    readonly cars: Car[];
}

export const initializeState: CarState = {
    cars: [] as Car[]
};
