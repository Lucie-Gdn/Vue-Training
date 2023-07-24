const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            // inStock : true (--> on passe à un iventaire integer pour plus de précision)
            inventory : 10,
            onSale: true
        }
    }
})
