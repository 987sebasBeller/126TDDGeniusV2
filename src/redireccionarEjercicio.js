const botones = document.querySelectorAll('#botonEditar');
botones.forEach((btnEditar)=>{
    btnEditar.addEventListener("click",(event)=>{
        event.preventDefault();
        const valorInput=event.target.dataset.value;
        window.location.href=`frmEditarEjercicio.html?titulo=${valorInput}`;
    });
});
const botonesVerMas = document.querySelectorAll('#btnVermas');
botonesVerMas.forEach((btnEditarVerMas)=>{
    btnEditarVerMas.addEventListener("click",(event)=>{
        event.preventDefault();
        const valorInput=event.target.dataset.value;
        window.location.href=`catalogodetalle.html?titulo=${valorInput}`;
    });
});