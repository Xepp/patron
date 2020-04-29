<template>
  <div class="panel-sidebar shadow">
    <router-link
      class="sidebar-logo"
      :to="{ name: 'Home' }"
    >
      <b-img
        src="@/assets/logo.png"
        alt="Patron"
      />
    </router-link>
    <router-link
      class="nav-item"
      :to="{ name: 'Sentiment' }"
    >
      <b-icon-chat-dots
        v-b-tooltip.hover.left
        title="Sentiment"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
