<template>
<div>
  <nav class="nav" id="top" style="background-color: #ff3; color: #003 !important">
    <div class="container">
      <div class="nav-left">
          <nuxt-link class="nav-item is-tab" style="color: #003;" to="/">หน้าเเรก</nuxt-link>
          <a class="nav-item is-tab" style="color: #003;">ฮิตติดหู</a>
          <a class="nav-item is-tab" style="color: #003;">เพลย์ลิสต์</a>
          <a class="nav-item is-tab" style="color: #003;">เพลงใหม่</a>
          <nuxt-link class="nav-item is-tab" style="color: #003;" to="/create">CreatePlaylist</nuxt-link>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'subHeader'
}
</script>
