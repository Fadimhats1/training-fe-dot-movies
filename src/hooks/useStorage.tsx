import Router from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { MoviesTypes } from '../services/model/data.model';

type useLocalStoragePropsType = {
  key: string;
  initialValue?: any | null;
};

export function useStorage({
  key,
  initialValue = null,
}: useLocalStoragePropsType) {
  const _keyRef = useRef<string>(key);
  const _loadingRef = useRef<boolean>(true);
  const [value, setValue] = useState<MoviesTypes[] | null>(null);

  useEffect(() => {
    valueHandle(initialValue, _keyRef.current, _loadingRef, setValue);
  }, []);

  const setData = useCallback(async (_value: any) => {
    try {
      const _data = _value instanceof Function ? await _value() : _value;
      if (typeof window !== undefined) {
        localStorage.setItem(_keyRef.current, JSON.stringify(_data));
      }
      setValue(_data);
    } catch (error) {
      console.log(error);
      setValue(null);
    }
  }, []);

  return { data: value, setData, isLoading: _loadingRef.current };
}

const valueHandle = async (
  _initialValue: any | null,
  key: string,
  _isLoading: React.MutableRefObject<boolean>,
  setValue: React.Dispatch<React.SetStateAction<MoviesTypes[] | null>>
) => {
  try {
    let _data = localStorage.getItem(key);
    if (!_data) {
      // if there's not data from localstorage
      let _dataSetLocalStorage = null;
      if (_initialValue) {
        // check initial value not null when inital value is a variable or function
        // initial value is not null either function or any
        if (navigator.onLine) {
          if (_initialValue instanceof Function) {
            _isLoading.current = true;
            _dataSetLocalStorage = await _initialValue();
          } else {
            _dataSetLocalStorage = _initialValue;
          }
          localStorage.setItem(key, JSON.stringify(_dataSetLocalStorage));
        } else {
          Router.push('/offline');
        }
      }
      setValue(_dataSetLocalStorage);
    } else {
      setValue(JSON.parse(_data));
    }
    _isLoading.current = false;
  } catch (error) {
    console.log(error);
  }
};
