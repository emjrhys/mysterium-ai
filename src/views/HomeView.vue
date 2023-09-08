<script setup>
function goToPlayView() {
  this.$router.push("/play");
}
</script>

<template>
  <main>
    <h1>Welcome to Murkbrook Manor</h1>
    <div class="mb-4">
      <p>You have been invited to Murkbrook Manor for a séance.</p>
      <p>As the clock strikes five, you make contact with a spirit who has been cursed to haunt the manor until their murderer is brought to justice.</p>
      <p>The spirit needs your help. Find their murderer, the room in which the murder occurred, and the murder weapon.</p>
      <p>At the top of each hour, the spirit will send you a clue: a memory in the form of a spectral image.</p>
      <p>BEWARE! You must correctly interpret the spectral images before the clock strikes twelve, or the spirit will haunt Murkbrook Manor for eternity.</p>
    </div>
    <v-btn color="teal-darken-4" @click="goToPlayView">I'm ready to play!</v-btn>
  </main>
</template>
