<template>
    <div>
        <div class="text-center mt-3 mb-3" v-if="b === 1">
            <h6 class="bg-success text-white p-2">Message is sending successfully!</h6>
        </div>
        <div class="text-center mt-3 mb-3" v-else-if="b === 2">
            <h6 class="bg-warning text-white p-2">Sizda to'ldirilishi kerak bo'lgan joy bor!</h6>
        </div>
        <h3 class="text-secondary mb-3">
            This app is writing comments for user
        </h3>
        <div class="row text-center">
            <div class="col">
                <button class="btn" @click="appChange">Are you like this app?</button>
            </div>

            <div class="col">
                <h6>><router-link class="txt-custom" to="/comment">Run this app</router-link></h6>
            </div>
            <div class="mt-4 send-app-point" v-if="a === 1">
                <form class="text-center" @submit.prevent>
                    <div class="border-custom">
                        <h4 class="text-secondary mb-4 mt-2">Fikringizni ulashing:</h4>
                        <input class="form-control form-custom mb-3" type="text" v-model="userName" placeholder="Enter Your Name..."> 
                        <input class="form-control form-custom mb-3" type="email" v-model="userEmail" placeholder="Enter Your Email..."> 
                        <input class="form-control form-custom mb-3" type="text" v-model="point" placeholder="Enter Your point..."> 
                        <button class="btn btn-custom-color" @click="sendPoint" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            a: 0,
            b: 0,
            point: "",
            userName: "",
            userEmail: "",
        }
    },
    methods: {
        appChange() {
            if (this.a === 0) {
                this.a = 1;
            } else if (this.a === 1) {
                this.a = 0
            }
        },

        sendPoint() {
            if (this.userName && this.userEmail && this.point){
                this.b = 1;
                axios.get(`https://api.telegram.org/bot5054066341:AAEV1ggnopFZ0-ZMgFbQfcC3ICiqqB4OPJ0/sendMessage?chat_id=5014288330&text=Portfolio uchun tayyorlagan *VueJs* loyihangizga ${this.userName} fikrini bildirdi!
                                                                                                                                            *Content:* _${this.point}_
                                                                                                                                            *Email:* ${this.userEmail}&parse_mode=markdown`);
                this.userEmail = "";
                this.userName = "";
                this.point = "";
                this.a = 0;
            } else {
                this.b = 2;
            }
            
        }
        


    }
}
</script>


<style>
    .txt-custom {
        text-decoration: none;
        color: #000;
    }
    .border-custom {
        width: 60%;
        height: 300px;
        display: inline-block;
        border: 1px solid #000;
        border-radius: 5px;
    }
    .form-custom {
        width: 80%;
        margin-left: 5rem;
    }
    .btn-custom-color {
        color: rgb(130, 130, 202);
    }
</style>