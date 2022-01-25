new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{

        exibirAlerta(){
            alert('Fica esperto Cururu')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})