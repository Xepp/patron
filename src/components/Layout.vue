<template>
  <div class="panel-layout">
    <Sidebar />
    <slot></slot>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>
