import React, { useState, useRef, useEffect } from 'react';

function useStateCallback(initialState) {
    const [state, setState] = useState(initialState);
    const cbRef = useRef(null);
  
    const setStateCallback = (state, cb) => {
      cbRef.current = cb;
      setState(state);
    };
  
    useEffect(() => {
      if (cbRef.current) {
        cbRef.current(state);
        cbRef.current = null;
      }
    }, [state]);
  
    return [state, setStateCallback];
  }

export default useStateCallback;