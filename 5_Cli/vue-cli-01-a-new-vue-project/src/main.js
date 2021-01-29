import { createApp } from 'vue';
import App from './App.vue'
import FriendComponent from './components/FriendComponent.vue'
import AddContact from './components/NewFriend.vue'

const app = createApp(App)
app.component('friend-contact', FriendComponent)
app.component('add-contact', AddContact)
app.mount('#app')