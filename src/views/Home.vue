<template>
  <Layout>
    <div class="home">
      <img
        alt="Patron logo"
        src="@/assets/logo.png"
      />
      <h1>
        Patron
      </h1>
      <p>
        <small>
          © 2020 Xepp, Inc.
        </small>
      </p>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>
