/**
 *
 * @param obj object explored
 * @returns array name of method
 */
export declare function getMethods(obj: object): Array<string>;
/**
 *
 * @param obj object explored
 * @returns array name of properties
 */
export declare function getProperties(obj: object): Array<string>;
/**
 *
 * @param obj object explored
 * @param value value to be search
 * @returns name of property that match value requested
 */
export declare function getPropertyByValue(obj: object, value: any): string;
