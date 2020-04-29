import api from '@/service/api'

export default {
  namespaced: true,
  actions: {
    getRandomDoc: (context) => {
      return api.getRandomSentiment()
    },
    updateDoc: (context, payload) => {
      return api.updateSentiment(payload)
    }
  }
}
