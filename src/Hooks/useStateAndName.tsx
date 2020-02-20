import { useState, useDebugValue } from 'react';

const useStateAndName = ( initValue:any, name:string ) => {
    const [ value, setValue ] = useState(initValue);
    useDebugValue(`${name}: ${value}`);
    return [ value, setValue ];
}

export default useStateAndName;