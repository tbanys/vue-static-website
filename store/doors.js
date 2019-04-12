export const state = () => ({
  all: []
})

export const actions = {
  async fetchDoors({ commit }) {
    const doors = await this.$axios.$get('media')
    commit('setDoors', doors)
  }
}

export const mutations = {
  setDoors(state, list) {
    state.all = list
  }
}
