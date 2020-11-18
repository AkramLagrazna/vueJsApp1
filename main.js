var webstore = new Vue({ el: '#app', data: 
{
    sitename: "After School Club",
    canAddToCart: function(){
        return;
    },
    order: {
        name: '',
        phoneNumber: +44
    },
    products: products,
    showProduct:
        {  
            visible: true
    },
    cart : []
},
    methods: {
        canAddToCart: function(product){
            return product.spaces > this.cart.length(product.id);
        },
        addToCart: function(product) {
            if (this.products.spaces == 0) {
                return;
            } else {
            this.products.spaces = this.products.spaces - 1;
            this.cart.push(product.id);
        }},
        submitOrder: function() {
            alert('Order Submitted!');
        },        
        showCheckout: function(){
            return this.showProduct.visible = this.showProduct.visible ? false : true;
        },
        removeId: function(product){
            for (i=0;i< this.cart.length;i++){
                if (this.cart[i] == product) {
                    this.cart.splice(i,1);
                    this.products.spaces += 1;
                    return true;
                }
            }
        },
    },
    computed: { 
        cartItemCount: function() { 
        return this.cart.length;
        },
        canShowCart: function(product){
            return product.spaces > this.cartItemCount(product.id);
        },
        canShowBack: function(){
            if (this.showProduct.visible = true) {
                return true;
            } else {
                return false;
            }
        },
        canCheckout: function(){
            if (this.order.name != '' && this.order.phoneNumber != 44){
                return true;
        } else {
            return false;
        }},
        canShowCheckout: function(){
                return this.cart.length > 0;
        }

    },




});
