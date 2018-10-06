# Reflection

> Reflection simple ispect your javascript object!

## Methods
getProperties - return list of object properties  
getMethods - return list of object methods  
getPropertyByValue - return property name that match passed value  

## Install
`npm i @tspower/reflection`

## Use

    
    import {getProperties, getMethods, getPropertyByValue} from '@tspower/reflection'`

    let obj = {id:"first", value:55, call:function(){alert("hello world!"}}
    let listProperties = getProperties(obj);
    let listMethods = getMethods(obj);
    let property = getPropertyByValue(obj, 55);
    


listProperty will contain `["id", "value"]`  
listMethods will contain  `["call"]`  
property will contain: `"value"`  

## version history
@1.1.1 readme update
@1.1.0 add doc on methods

## Author
Luigi Senzamici (luigisenzamici@gmail.com) [Pegaso Professional]

## License
MIT License
[MIT](http://opensource.org/licenses/MIT)


