<script setup>
function goToPlayView() {
  this.$router.push("/play");
}
</script>

<template>
  <main>
    <header>
      <h1>Welcome to Murkbrook Manor</h1>
    </header>
    <body>
      <v-text>You have been invited to Murkbrook Manor for a séance. 
        As the clock strikes five, you make contact with a spirit who has been cursed to haunt the manor until their murderer is brought to justice. 
        The spirit needs your help. Find their murderer, the room in which the murder occurred, and the murder weapon. 
        At the top of each hour, the spirit will send you a clue: a memory in the form of a spectral image. 
        BEWARE! You must correctly interpret the spectral images before the clock strikes twelve, or the spirit will haunt Murkbrook Manor for eternity.</v-text>
    </body>
    <div>
    <a href="/play">
      <v-btn color="teal-darken-4" @click="goToPlayView">I'm ready to play!</v-btn>
    </a>
  </div>
  </main>
</template>
