import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useReduxApi = (callback, reducer) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[reducer]);

  useEffect(() => {
    dispatch(callback);
  }, []);

  return {
    data,
  }
};
