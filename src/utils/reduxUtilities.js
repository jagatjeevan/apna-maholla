export function createConstants(...constants: Array<string>): { [key: string]: string } {
  return constants.reduce((accumulator, constant) => {
    /* eslint no-param-reassign:0 */
    accumulator[constant] = constant;
    return accumulator;
  }, {});
}

export function createReducer<T>(initialState: T, fnMap: ReducerFnMap<T>): PriceReducer<T> {
  return (state: T = initialState, { type, payload }: PriceAction): T => {
    const handler = fnMap[type];

    const frozenState = Object.freeze(state);
    return handler ? handler(frozenState, payload) : frozenState;
  };
}
