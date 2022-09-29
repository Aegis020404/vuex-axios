import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state() {
        return {
            city: '',
            cities: [
                {
                    id: 1,
                    name: "Москва"
                },
                {
                    id: 2,
                    name: "Санкт-Петербург"
                },
                {
                    id: 3,
                    name: "Казань"
                }
            ]
        }
    },
    mutations: {
        rename(state, city) {
            state.city = city
        }
    },
    actions: {
        postData(state,obj) {
            console.log(obj)
            axios.post(`http://hh.autodrive-agency.ru/test-tasks/front/task-7/`,{

            }, {
                params: {
                    ...obj
                }
            }).then(e => console.log(e)).catch(err => console.log(err))
        }
    }

})


