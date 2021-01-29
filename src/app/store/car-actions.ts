import { createAction, props } from '@ngrx/store';

import { Car } from '../shared/model/car';

export const createCarAction =  createAction(
    '[Cars] - create car',
    props<Car>()
);
