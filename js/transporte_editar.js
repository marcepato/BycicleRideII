console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)

const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        descripcion:"",
        rodado:"",
        tipo:"",
        grupoEtario:"",
        genero:"",
        suspension:"",
        frenos:"",
        velocidad:"",
        foto:"",
       // url:'ttps://marceh.pythonanywhere.com/bycicle/'+id,
        url: 'https://marceh.pythonanywhere.com/bycicle/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id;
                    this.descripcion = data.descripcion;
                    this.rodado=data.rodado;
                    this.tipo=data.tipo;
                    this.grupoEtario=data. grupoEtario    ;    
                    this.genero=data.genero;
                    this.suspension = data.suspension;
                    this.frenos=data.frenos;
                    this.velocidad=data.velocidad;
                    this.foto=data.foto               
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let transporte = {
                descripcion:this.descripcion,
                rodado: this.rodado,
                tipo: this.tipo,
                grupoEtario: this.grupoEtario,
                genero: this.genero,
                suspension: this.suspension,
                frenos: this.frenos,
                velocidad: this.velocidad,
                foto: this.foto 
            }
            var options = {
                body: JSON.stringify(transporte),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./index.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
