import { useLocation, Location } from 'react-router-dom';

interface IState<T> extends Location{
    state: T
}

const useMyLocation = <T>() :IState<T> => useLocation();

export {
    useMyLocation,
};
