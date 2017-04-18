<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="title-side">ฮิตติดหู 50 เพลงต่อเนื่อง</div>
        <div style="border-bottom: 3px solid #003;"></div>
        <br>

        <div class="box">

          <article class="media" v-for="show in sort">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="show.img">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{show.artist}} </strong>
                  <small></small>
                  <small style="float:right;">#1</small>
                </p> My Voice Deluxe Album
              </div>
            </div>
          </article>

        </div>


      </div>
    </div>
  </section>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hit',
  data () {
    return {
      data: []
    }
  },
  computed: {
    ...mapGetters([
      'listAlbum'
    ]),
    sort () {
      let detail = []
      let list = this.listAlbum.map(item => item.tracks).map(i => {
        let arr = {
          id: i.id,
          song: i.song,
          vote: i.vote,
          youtubeID: i.youtubeID
        }
        return arr
      })
      console.log(list)
      return this.data
    }
  }
}
</script>
