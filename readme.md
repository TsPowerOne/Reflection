# Reflection ![alt text](https://ppbusinessproject.visualstudio.com/TSPowerOne/_apis/build/status/TsPowerOne.Reflection?branchName=master)

> Reflection simple ispect your javascript object!

## Methods
1 - getProperties - return list of object properties  
2 - getMethods - return list of object methods  
3 - getPropertyByValue - return property name that match passed value  

##Documentation
Detailed documentation [here](https://tspowerone.github.io/regexpr/)        


## Install
`npm i @tspower/reflection`

## Use
```javascript    
    import {getProperties, getMethods, getPropertyByValue} from '@tspower/reflection'`

    let obj = {id:"first", value:55, call:function(){alert("hello world!"}}
    let listProperties = getProperties(obj);
    let listMethods = getMethods(obj);
    let property = getPropertyByValue(obj, 55);
```


listProperty will contain `["id", "value"]`  
listMethods will contain  `["call"]`  
property will contain: `"value"`  

## version history
@1.1.11 test inserted  
@1.1.1 readme update  
@1.1.0 add doc on methods  

## Author
Luigi Senzamici   
Email: luigisenzamici@gmail.com   
[Pegaso Professional](https://pegasoprofessional.com)   

## License
[MIT License](http://opensource.org/licenses/MIT)


