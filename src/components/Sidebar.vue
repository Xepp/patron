<template>
  <div
    class="panel-sidebar"
  >
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
      <b-icon-chat-dots />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
