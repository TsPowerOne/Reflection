import {getProperties} from '../src/reflection';

import { expect } from 'chai';
describe('getProperties', () => {

  it('should return ciao', () => {
    let obj = {ciao:"ciao"};
    const result = getProperties(obj);

    expect(result[0]).to.equal("ciao");

  });

});