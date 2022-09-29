<template>
  <div class="p-[10px]  md:pt-[20px] md:pl-[80px] sm:pt-[20px] sm:pl-[40px] ">
    <button @click="increment" class="btn  bg-[#3B82F6] " data-value='1' >Заказать в Москву</button>
    <button @click="increment" class="btn  bg-[#0D9488] " data-value='2' >Заказать в Санкт-Петербург</button>
  </div>
</template>


<script>
export default {


  methods: {
    increment(e) {
      this.$store.commit('rename', e.target.dataset.value)
    }
  }
}

</script>



