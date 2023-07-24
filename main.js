const app =Vue.createApp({ // have to pass createApp at least one object even an empty one
    data(){ // shortcut: data:function()=data()
        return{
            product:'Socks',
            description:'great for winter'
        }
    }
})
