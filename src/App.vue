<template>
  <Btns/>
  <VueModal/>
</template>

<script>
import Btns from "@/components/vue-btns";
import VueModal from "@/components/vue-modal";
export default {
  name: 'App',
  components: {
    VueModal,
    Btns,
  },

}

</script>

<style>
*{
  overflow-x: hidden;
}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn{
    @apply
    shadow-sm font-normal text-white font-medium mt-[10px]  text-base mr-[20px] py-[9px] w-[100%] sm:w-auto px-[17px] rounded-md
  }
  .botTitle{
    @apply mb-[4px] text-base text-[#374151] font-medium
  }
  .miniAlert{
    @apply text-red-600
  }
  .input{
    @apply font-normal  lg:max-w-[190px] text-base placeholder:text-[#6B7280] text-[#374151]
    border-[1px] border-solid border-[#D1D5DB] py-[9px] px-[13px]	rounded-md w-full md:w-auto

  }
}


* {
  font-family: Inter, sans-serif;
}



</style>
