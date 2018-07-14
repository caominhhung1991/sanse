import * as SanSeActionTypes from './sanse.type';
import instanceAxios from '../../../src/axios-orders';

export const hello = () => {
  return {
    type: SanSeActionTypes.HELLO
  };
};
