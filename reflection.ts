/**
 * 
 * @param obj object explored
 * @returns array name of method
 */
export function getMethods(obj: object): Array<string> {
        let res: Array<string> = [];
        let props = Object.getOwnPropertyNames(obj);
        res = props.filter(function (property) {
            return typeof obj[property] == 'function';
        });
        return res;
    }
    /**
     * 
     * @param obj object explored
     * @returns array name of properties
     */
export function getProperties(obj: object): Array<string>{
        let res: Array<string> = [];
        let props = Object.getOwnPropertyNames(obj);
        res = props.filter(function (property) {
            return typeof obj[property] != 'function';
        });
        return res;
    }
    /**
     * 
     * @param obj object explored
     * @param value value to be search
     * @returns name of property that match value requested
     */
export function getPropertyByValue(obj: object, value: any): string{
        let res: string;

        let lsP = getProperties(obj);
        res = lsP.filter(e => {
            return obj[e] == value;
        })[0];

        return res;
    }

