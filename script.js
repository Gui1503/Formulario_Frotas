

const chassi = document.getElementById('chassi')
const pesoBruto = document.getElementById('pesoBruto')
const pesoReboque = document.getElementById('equipamentos')
const equipamentos = document.getElementById('chassi')
const distanciaIda = document.getElementById('distanciaIda')
const distanciaVolta = document.getElementById('distanciaVolta')
const tempoIda = document.getElementById('tempoIda')
const tempoVolta = document.getElementById('tempoVolta')
const velocidadeIda = document.getElementById('velocidadeIda')
const velocidadeVolta = document.getElementById('velocidadeVolta')
const jornada = document.getElementById('jornada')
const turnos = document.getElementById('turnos')
const diasUteis = document.getElementById('diasUteis')
const paradas = document.getElementById('paradas')

const dias = document.getElementById('dias')
const qtd = document.getElementById('qtd')
const resultado = document.getElementById('resultado')


let pesoTotal
let cargaUtil
let viagensMensais
let tempoTotalViagem
let distanciaIda1
let distanciaVolta1
let tempoDiario
let diasDisponiveis
let numeroViagensDia
let frotasNecessarias
let numeroViagensMensais


function verificar(){
//A  
 pesoTotal = Number(chassi.value) + Number(pesoReboque.value) + Number(equipamentos.value)
 resultado.innerHTML = `Peso total do veículo: ${pesoTotal.toFixed(3)} KG.<br></br>`
//B
 cargaUtil = Number(pesoBruto.value) - Number(pesoTotal)
 resultado.innerHTML += `Carga útil do veículo: ${cargaUtil.toFixed(2)} KG.<br></br>`
//C
 viagensMensais = Number(qtd.value) / Number(cargaUtil)
 resultado.innerHTML+= `Numero de viagens mensais: ${viagensMensais.toFixed(2)}<br></br>`

 //D
 distanciaIda1 = Number(distanciaIda.value) / Number(velocidadeIda.value ) * 60
 distanciaVolta1 = Number(distanciaVolta.value) / Number(velocidadeVolta.value) * 60

//D
 tempoTotalViagem = distanciaIda1 + distanciaVolta1 + Number(tempoIda.value) + Number(tempoVolta.value)
 resultado.innerHTML +=`Tempo total de viagem: ${tempoTotalViagem.toFixed(2)} Mim<br></br>`
 

//E
tempoDiario = (Number(jornada.value) * Number(turnos.value)) * 60
resultado.innerHTML += `Tempo diário da operação: ${tempoDiario.toFixed(2)} Mim<br></br>`

//F
numeroViagensDia = (Number(tempoDiario) / Number(tempoTotalViagem))
resultado.innerHTML+=`Número de viagens de um veículo por dia: ${numeroViagensDia.toFixed(2)} <br></br>`

//G
diasDisponiveis = (Number(diasUteis.value) - Number(paradas.value))
resultado.innerHTML+=`Dias disponiveís por Mês: ${diasDisponiveis.toFixed(2)} Dias de operação<br></br>`

//H
numeroViagensMensais = (Number(numeroViagensDia) * Number (diasDisponiveis))
resultado.innerHTML+=`Número de viagens mensais do veículo: ${numeroViagensMensais.toFixed(2)}<br></br>`


//|I
frotasNecessarias =(Number(viagensMensais) / Number(numeroViagensMensais))
resultado.innerHTML+=`<strong>Cálculo de frotas necessárias: ${frotasNecessarias.toFixed(2)} Caminhões</strong><br></br>`





} 