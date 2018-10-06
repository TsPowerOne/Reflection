import {getProperties} from '../src/reflection';

import { expect } from 'chai';
import { getPropertyByValue } from '../../reflection';
describe('getProperties', () => {

  it('should return ciao', () => {
    let obj = {ciao:"ciao"};
    const result = getProperties(obj);

    expect(result[0]).to.equal("ciao");

  });
  
  it('should return ciao', () => {
    let obj = {ciao:55};
    const result = getPropertyByValue(obj, 55);

    expect(result[0]).to.equal("ciao");
  });

});