import { getProperties, getPropertyByValue, getMethods } from '../lib/reflection';

import { expect } from 'chai';

describe('getProperties', () => {

  it('should return ciao', () => {
    let obj = {ciao:"ciao"};
    const result = getProperties(obj);
    expect(result[0]).to.equal("ciao");
  });

});
describe('getMethods', () => {

  it('should return hello', () => {
    let obj = {hello:function(){alert('hello world');}};
    const result = getMethods(obj);
    expect(result[0]).to.equal("hello");
  });

});
describe('getPropertyByValue', () => {

  it('should return quaranta', () => {
    let obj = {quaranta:"40"};
    const result = getPropertyByValue(obj, '40');
    expect(result).to.equal("quaranta");
  });

});