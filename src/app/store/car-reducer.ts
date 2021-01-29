
import { Action, createReducer, on } from '@ngrx/store';

import * as CarActions from './car-actions';
import { Car } from '../shared/model/car';
import { CarState, initializeState } from './car-state';

const reducer = createReducer(
    initializeState,
    on(CarActions.createCarAction, (s: CarState, car: Car) => {
        return {...s.cars, cars: [car, ...s.cars]};
    })
);

export function addCar(s: CarState | undefined, action: Action): CarState{
    return reducer(s, action);
}
