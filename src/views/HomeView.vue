<template>
  <div id="cafeTextArea">
    <h2>
      <span>Cafe</span>
    </h2>
    <div>
      <img src="..\..\src\assets\cafe-gdfebf9281_1920.jpg" alt="" />
    </div>
    <span>ランチとタピオカとソフトクリームとかき氷のお店</span>
  </div>

  <div id="carTextArea">
    <h2>
      <span>KitchenCar</span>
    </h2>
    <div>
      <img src="..\..\src\assets\467593_s.jpg" alt="" />
    </div>
    <span>【キッチンカー】 イベント、企業様等出張</span>
    <span>様々なご要望に対応可能</span><br />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
h2 {
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", MyYuGothicM, YuGothic, "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", Helvetica, Arial, "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

#cafeTextArea img {
  width: 500px;
  height: 250px;
  object-fit: cover; /* この一行を追加するだけ！ */
}

#carTextArea img {
  width: 500px;
  height: 250px;
  object-fit: cover; /* この一行を追加するだけ！ */
}
</style>
