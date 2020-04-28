<template>
  <Layout>
    <div class="sentiment">
      <SentimentForm />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import SentimentForm from '@/components/SentimentForm'

export default {
  name: 'Sentiment',
  components: {
    Layout,
    SentimentForm
  }
}
</script>
