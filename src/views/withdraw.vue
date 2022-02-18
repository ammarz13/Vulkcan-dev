<template>
  <div class="main-page">
    <NewHeader />
    <div class="main">
      <div class="container text-center">
        <button class="btn-lg connect-wallet">withdraw ethers</button>
      </div>
    </div>
    <NewFooter />
  </div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
import NewFooter from "../components/NewFooter.vue";

export default {
  name: "Home",
  components: { NewFooter, NewHeader },
  data() {},
};
</script>
