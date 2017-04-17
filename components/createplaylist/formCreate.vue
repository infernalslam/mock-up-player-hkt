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
                <input class="input" type="text" placeholder="artist" v-model="data.artist">
              </p>
              <label class="label">ชื่ออัลบั้ม</label>
              <p class="control">
                <input class="input" type="text" placeholder="Album" v-model="data.album">
              </p>
              <label class="label">ลิ้งหน้าปกอัมบั้ม ขนาด 300 X 300</label>
              <p class="control">
                <input class="input" type="text" placeholder="https://xxx.jpg" v-model="data.img">
              </p>
              <hr>
              <label class="label">Add youtube playlist</label>

              <div v-for="show in tracks">
                {{show.song}}
                {{show.youtubeID}}
              </div>

              <p class="control">
                <input class="input" type="text" placeholder="ชื่อเพลง" v-model="data.song">
                <input class="input" type="text" placeholder="link youtube" v-model="data.youtubeID">
                <hr>
                 <span class="tag is-danger" style="float: right;" @click="addTrack(data.song, data.youtubeID)">Add</span>
              </p>
              <br>
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
  name: 'formCreate',
  data () {
    return {
      artist: [],
      data: {},
      tracks: []
    }
  },
  methods: {
    addTrack (song, youtube) {
      let data = {
        song: song,
        youtubeID: youtube
      }
      console.log(data)
      this.tracks.push(data)
    }
  }
}
</script>
