const { createApp } = Vue
createApp({
    data() {
        return {
            transportes: [],
          //  url:    "https://marceh.pythonanywhere.com/bycicle",  //
           url: "https://marceh.pythonanywhere.com/bycicle",
      
            descripcion: " ",
            rodado: " ",
            tipo:  " ",
            grupoEtario: "",
            genero: " ",
            suspension:  " ",
            frenos:  " ",
            velocidad: "",
            foto: "",
            error:false,
            cargando:true
        }
    },
    methods: { // aqui se definen  las funciones del objeto VUE

        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.transportes = data
                    this.cargando=false
                })
                .catch(error => {//alert("Ups... se produjo un error: " + error)
                this.error=true
            })
        },

        grabar() {
            let transporte = {
                descripcion: this.descripcion,
                rodado: this. rodado,
                tipo: this.tipo,
                grupoEtario: this.grupoEtario,
                genero: this.genero,
                suspension: this.suspension,
                frenos: this.frenos,
                velocidad: this.velocidad,
                foto: this.foto,
            }
            var options = {
                body: JSON.stringify(transporte),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./transporte.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                    this.error=true
                })
        },
        eliminar(id) {
            const url = this.url + '/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },


    },

    created() {    //Se ejecuta cuando se carga el objeto VUE
        this.fetchData(this.url)
    }
}).mount('#app')
