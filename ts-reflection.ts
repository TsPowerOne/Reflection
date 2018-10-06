export function getMethods(obj: object): Array<string> {
        let res: Array<string> = [];
        let props = Object.getOwnPropertyNames(obj);
        res = props.filter(function (property) {
            return typeof obj[property] == 'function';
        });
        return res;
    }
export function getProperties(obj: object): Array<string>{
        let res: Array<string> = [];
        let props = Object.getOwnPropertyNames(obj);
        res = props.filter(function (property) {
            return typeof obj[property] != 'function';
        });
        return res;
    }
export function getPropertyByValue(obj: object, value: any): string{
        let res: string;

        let lsP = getProperties(obj);
        res = lsP.filter(e => {
            return obj[e] == value;
        })[0];

        return res;
    }

