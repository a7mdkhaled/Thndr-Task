import { createStateHook, createActionsHook } from 'overmind-react';
import { IContext } from 'overmind';
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
  stockDetails: { data: {}; loading: Boolean };
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
  stockDetails: {
    data: {},
    loading: false,
  },
};

export const config = {
  state,
  actions,
  effects,
};

export type Context = IContext<typeof config>

export const useOvermind = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
