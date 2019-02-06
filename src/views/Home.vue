<template>
<main id="home">
  <section>
    <img src="../assets/slice-logo-black.png" alt="Slice logo">
  </section>
  <section>
    <a href="#" class="btn" @click="$router.push('/pizzamenu')">Im hungry!</a>
  </section>
</main>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="scss">

@import '../scss/components';

%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#home {
  display: flex;
  flex-direction: column;
  height: inherit;

  section {
    flex: 1;
    @extend %center;

    img {
      width: 16rem;
    }

    &:last-child {
      flex: .1;
      align-items: flex-end;
      padding: 1rem;
    }
  }
}

</style>