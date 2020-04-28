<template>
  <b-card
    class="sentiment-form shadow"
  >
    <v-icon
      v-if="loading"
      name="spinner"
      scale="3"
      pulse
    />
    <template
      v-else
    >
      <b-card-text
        class="mt-3"
      >
        {{ content }}
      </b-card-text>
      <b-button-group
        class="my-3"
        size="lg"
      >
        <b-button
          variant="outline-success"
          @click="onSentimentClick('pos')"
        >
          <v-icon
            name="regular/smile"
            scale="2"
          />
        </b-button>
        <b-button
          variant="outline-secondary"
          @click="onSentimentClick('neu')"
        >
          <v-icon
            name="regular/meh"
            scale="2"
          />
        </b-button>
        <b-button
          variant="outline-danger"
          @click="onSentimentClick('neg')"
        >
          <v-icon
            name="regular/frown"
            scale="2"
          />
        </b-button>
      </b-button-group>
    </template>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SentimentForm',
  data: function () {
    return {
      loading: true,
      id: null,
      content: null
    }
  },
  methods: {
    ...mapActions({
      getRandomDoc: 'sentiment/getRandomDoc',
      updateDoc: 'sentiment/updateDoc'
    }),
    fetchNewDoc: function () {
      this.loading = true
      this.id = null
      this.content = null
      this.getRandomDoc()
        .then(res => {
          this.id = res.data.id
          this.content = res.data.content
        })
        .catch(err => console.error(err))
        .then(() => {
          this.loading = false
        })
    },
    onSentimentClick: function (sentiment) {
      const payload = {
        id: this.id,
        sentiment
      }

      this.loading = true
      this.updateDoc(payload)
        .then(res => {
          this.fetchNewDoc()
        })
        .catch(err => console.error(err))
        .then(() => {
          this.loading = false
        })
    }
  },
  mounted: function () {
    this.fetchNewDoc()
  }
}
</script>
