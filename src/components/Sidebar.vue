<template>
  <div
    class="panel-sidebar"
  >
    <router-link
      class="sidebar-logo"
      :to="{ name: 'home' }"
    >
      <b-img
        src="@/assets/logo.png"
        alt="Patron"
      />
    </router-link>
    <router-link
      class="nav-item"
      :to="{ name: 'sentiment' }"
    >
      <b-icon-list />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
