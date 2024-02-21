export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    persist: {
        storage: persistedState.localStorage,
      },
    actions: {
      increment() {
        this.count++
      },
    },
  })