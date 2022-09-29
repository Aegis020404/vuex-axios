<template>
  <div @click="exit" v-if="$store.state.city"
       class=" model justify-center items-center flex bg-[#6B7280BF]
    absolute top-0 left-0 right-0 bottom-0
    md:p-[35px] p-[10px]
">

    <div class="bg-[#FFFFFF] p-[24px] shadow-xl rounded-lg min-w-[100%] md:min-w-[auto] ">
      <div class="md:mb-[24px] mb-[16px] font-medium text-2xl">Заказать звонок</div>
      <div class="flex  gap-[15px] md:justify-center flex-col md:flex-row items-center md:items-baseline">
        <div class="w-full md:w-auto">
          <div class="botTitle">Email*</div>
          <input v-model="email" type="email" placeholder="you@example.com" class="input"/>
          <div class="miniAlert">{{ !email && required===true ? 'Поле является обязательным' : '' }}</div>
          <div class="miniAlert">{{ !email && required==='email' ? 'Не правильный Email' : '' }}</div>
        </div>
        <div class="w-full md:w-auto">
          <div class="botTitle">Имя*</div>
          <input v-model="name"  placeholder="Иван Иванов" class="input"/>
          <div class="miniAlert">{{ !name && required ? 'Поле является обязательным' : '' }}</div>
        </div>
        <div class="w-full md:w-auto">
          <div class="botTitle">Телефон*</div>
          <input v-model="tel"  placeholder="+7 (___) ___-__-__" type="tel" class="input" v-maska="'+7 (###) ###-##-##'">
          <div class="miniAlert">{{ !tel && required===true ? 'Поле является обязательным' : '' }}</div>
          <div class="miniAlert">{{ !tel && required==='tel' ? 'Неправильный номер' : '' }}</div>
        </div>


        <div class="lg:block w-full sm:w-auto sm:hidden block">
          <div class="botTitle">Город*</div>
          <div class="relative">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="absolute w-[10px] h-[10px] z-10 top-[40%] right-[10px]">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                    fill="#6B7280"/>
            </svg>
            <select @change="changeCity" class="input form-select appearance-none  block    text-basefont-normal  text-gray-700
          bg-white bg-clip-padding pr-[5px] min-w-[170px]    rounded  transition ease-in-out m-0">
              <option v-for="obj in $store.state.cities" :key="obj.id" :value="obj.id"
                      :selected="$store.state.city === obj.id">{{ obj.name }}
              </option>
            </select>
            <div class="miniAlert">{{ !$store.state.city && required ? 'Поле является обязательным' : '' }}</div>

          </div>
        </div>
      </div>

      <div class="flex sm:justify-end justify-center items-end mt-[18px]  ">
        <div class="lg:hidden w-full sm:block hidden">
          <div class="botTitle">Город*</div>
          <div class="relative mr-[29px] ">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="absolute w-[10px] h-[10px] z-10 top-[40%] right-[10px]">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                    fill="#6B7280"/>
            </svg>
            <select @change="changeCity"  class=" text-[#374151] border-[1px] border-solid border-[#D1D5DB] py-[9px] px-[13px]	rounded-md form-select appearance-none  block  w-full  text-basefont-normal  text-gray-700
          bg-white bg-clip-padding pr-[5px]     rounded  transition ease-in-out m-0
">
              <option v-for="obj in $store.state.cities" :key="obj.id" :value="obj.id"
                      :selected="$store.state.city === obj.id">{{ obj.name }}
              </option>
            </select>
            <div class="miniAlert">{{ !$store.state.city && required ? 'Поле является обязательным' : '' }}</div>
          </div>
        </div>
        <button @click="send"
                class="text-center font-medium text-base text-white bg-[#16A34A] rounded-md shadow-sm	px-[42px] py-[11px] w-full md:w-auto ">
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import {maska} from "maska";

export default {
  data() {
    return {
      name: '4fdsm',
      tel: '+7 (143) 243-24-32',
      email: 'afewgfwegw@gmail.com',
      required: false
    }
  },
  methods: {
    send() {
      if (this.name && this.tel && this.email && this.$store.state.city) {
      let phone = '+' + this.tel.match(/\d+/g).join``
        if(phone.length === 12) {
          if(this.email.toLowerCase()
              .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            this.$store.dispatch('postData', {
              name:this.name,
              phone,
              email:this.email,
              city_id: +this.$store.state.city
            })
            this.name = ''
            this.tel = ''
            this.email = ''
            this.$store.state.city = ''
            this.required = false
          } else {
            this.email = ''
            this.required = 'email'
          }


        } else {
          this.required = 'tel'
          this.tel = ''
        }
      } else {
          this.required = true
      }





    },
    changeCity(e) {
      this.$store.commit('rename', e.target.value)
    },
    exit(e) {
      if (e.target.classList.contains('model'))
        this.$store.commit('rename', '')
    },
  },
  directives: { maska }


}
</script>

<style>

</style>
