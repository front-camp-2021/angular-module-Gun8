const getValueByKey = <T>(key: keyof T) => (obj: T) => obj[key];

export default getValueByKey;
