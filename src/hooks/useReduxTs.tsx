
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useApiSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useApiDispatch = () => useDispatch<AppDispatch>();