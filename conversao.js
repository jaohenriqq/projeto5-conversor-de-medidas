/*Escreva um programa em JS que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

milímetro (mm)
centrímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (dica do prof: use o break e o default para isso).

EXEMPLO DE ENTRADAS:
Entrada 1:
Digite um valor em metros (Ex: 2.5)

Entrada 2:
Agora, selecione uma opção abaixo para converter, entre:
1 - milímetro (mm)
2 - centrímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)

Situação 1:
10m equivale à 100.0dm

Situação 2:
Opção inválida!*/

let metros = prompt('digite um valor que você quer converter em metros') 
const opcao = prompt('escolha uma opção para você converter seu valor: '+' \n 1-milímetro '+' \n 2-centímetro '+' \n 3-decímetros '+' \n 4-decâmetro '+' \n 5-hectômetro '+' \n 6-quilômetro')
switch(opcao){
  case('1'):alert(`seu valor em milímetros é ${metros*1000}`)
    break
  case('2'):alert(`seu valor em centímetro é ${metros*100}`)
    break
  case('3'):alert(`seu valor em decímetros é ${metros*10}`)
    break
  case('4'):alert(`seu valor em decâmetro é ${metros/10}`)
    break
  case('5'):alert(`seu valor em hectômetro é ${metros/100}`)
    break
  case('6'):alert(`seu valor em quilômetro é ${metros/1000}`)
    break
  default: alert(`opção errada,escolha de 1 a 6`)
}