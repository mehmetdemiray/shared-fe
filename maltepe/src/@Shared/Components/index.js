import Loadable from 'react-loadable';
import { Loading } from '@Shared/Components/Loading';

export const ButtonComp = Loadable({
    loader: () => import(/* webpackChunkName: "buttons" */ "@Shared/Components/Button"),
    loading: Loading,
});

export const TextComp = Loadable({
    loader: () => import(/* webpackChunkName: "typography" */ "@Shared/Components/Text"),
    loading: Loading,
});