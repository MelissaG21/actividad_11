const todo = (tarea, tiempo, callback) => {
    setTimeout(()=>{
        callback(tarea)
    }, tiempo);
}

todo("Levantarse", 5000, (tarea) => {
    console.log(`Realizando la tarea ${tarea}`);
    todo("Tender la cama", 3000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`);
        todo("Banarse", 3000, (tarea) => {
            console.log(`Realizando la tarea ${tarea}`);
            todo("Clase de paradigmas", 5000, (tarea) => {
                console.log(`Realizando la tarea ${tarea}`);
                todo("Desayunar", 8000, (tarea) => {
                    console.log(`Realizando la tarea ${tarea}`);
                    todo("Jugar videojuegos", 10000, (tarea) => {
                        console.log(`Realizando la tarea ${tarea}`);
                    })
                })
            })
        })
    })
})