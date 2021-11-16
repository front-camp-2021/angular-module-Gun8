const getObjKeys = <T>(obj: T)  => Object.keys(obj).map(key => <keyof T>key);
export default getObjKeys;
