import { createStateHook, createActionsHook } from 'overmind-react';
import * as actions from './actions';
import * as effects from './effects';

type State = {
  stocks: {
    data: [];
    loading: Boolean;
    FetchingMoreStocks: Boolean;
    next_url: String | null;
  };
  search: { data: []; loading: Boolean };
  tickerDetails: { data: {}; loading: Boolean };
};

const state: State = {
  stocks: {
    data: [],
    loading: false,
    FetchingMoreStocks: false,
    next_url: null,
  },
  search: {
    data: [],
    loading: false,
  },
  tickerDetails: {
    data: {},
    loading: false,
  },
};

export const config = {
  state,
  actions,
  effects,
};

export const useOvermind = createStateHook();
export const useActions = createActionsHook();
