<template>
  <div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              สร้างเพลย์ลิสต์ (playlist)
            </h1>
            <div class="box">
              <label class="label">ชื่อศิลปิน</label>
              <p class="control">
                <input class="input" type="text" placeholder="artist">
              </p>
              <label class="label">ชื่ออัลบั้ม</label>
              <p class="control">
                <input class="input" type="text" placeholder="Album">
              </p>
              <label class="label">YOUTUBE ID</label>
              <p class="control">
                <input class="input" type="text" placeholder="เช่น 4OrCA1OInoo">
              </p>
              <hr>
              <label class="label">ลิ้งหน้าปกอัมบั้ม ขนาด 300 X 300</label>
              <p class="control">
                <input class="input" type="text" placeholder="http:// or https://">
              </p>
              <label class="label">สไตล์ของเพลง</label>
              <p class="control">
                <label class="radio"><input type="radio" name="member">ช้า</label>
                <label class="radio"><input type="radio" name="member">เร็ว</label>
              </p>
              <hr>
              <p class="control">
                <button class="button" style="background: rgb(208, 1, 74); color: white;">Create</button>
                <button class="button is-default">Cancel</button>
              </p>
            </div>
            <p class="has-text-centered">
              <a style="color: black;">Create by</a> <a>  Vuejs</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formCreate'
}
</script>
