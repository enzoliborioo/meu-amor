setInterval(function () {

    const dataInicial = new Date('2023-09-17')
    const dataAtual = new Date()
    const diferencaDatas = dataAtual - dataInicial
    console.log(diferencaDatas)

    const diasExatos = Math.floor(diferencaDatas / (1000 * 60 * 60 * 24));
    console.log(diasExatos)

    const dias = (diferencaDatas / (1000 * 60 * 60 * 24));
    console.log(dias)

    const horas = (dias - diasExatos)*24
    console.log(horas)

    const horasExatas = Math.floor(horas)
    console.log(horasExatas)

    const minutos = (horas - horasExatas)*60
    console.log(minutos)

    const minutosExatos = Math.floor(minutos)
    console.log(minutosExatos)

    const segundos = (minutos - minutosExatos)*60
    console.log(segundos)

    const segundosExatos = Math.floor(segundos)
    console.log(segundosExatos)

    /* coloquei em horas "-4" por conta de um provável fuso horário
        e também considerando que o pedido de namoro foi às 01h00 da manhã
        do dia 17/09/2023
     */
    document.getElementById('resultado').innerText = `Há ${diasExatos} dias, ${horasExatas-4} horas, ${minutosExatos} minutos e ${segundosExatos} segundos com você.`;

},1000)