import React, { createContext } from 'react';
import Child5 from './Child5';

const value1 = createContext()
const value2 = createContext()
function ParentCom() {
    const Name ='Sanket'
    const phoneNo = 9883828822
  return (
    <>
    <value1.Provider value={Name}>
        <value2.Provider value={phoneNo}>
      <Child5/>
      </value2.Provider>
      </value1.Provider>
    </>
  );
}

export default ParentCom;
export {value1,value2};
