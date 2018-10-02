var phase = prompt("Digite a frase a ser codificada:");
var valid = validate(phase); //validação da frase(se contem números) ou está vazia
if(valid === false){ //loop para que pergunte a frase até retornar true
  do{
    phase = prompt("Numeros não são válidos! Digite a frase a ser codificada:");
    valid = validate(phase);
  }while(valid === false)
}
function validate(phase) {
  if(phase === ''){ return false;}
  for(var i = 0; i < phase.length; i++){
    if(isNaN(phase[i]) === false){ return false;}
  } return true;
}
var alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var off = 33; //variavel de deslocamento
var phaseUp = phase.toUpperCase();
var typeOfPhase = (phaseUp === phase); //variavel vai guardar a informação se a frase for maiuscula ou minuscula
var resultPhaseCipher = cipher(phaseUp, off, alfa);
var resultPhaseDecipher = decipher(resultPhaseCipher, off, alfa);
function cipher(phase, n, alfa) { //função para cifrar a frase
  var letter, index;
  var arrayFinal = [];
  for(var i = 0; i < phase.length; i++){
    letter = phase.charCodeAt(i);
    index = parseInt((letter - 65 + n) % 26);
    arrayFinal[i] = alfa[index];
  }
  var phaseFinal = arrayFinal.join('');
  return phaseFinal;
}
function decipher(phase, n, alfa) { //função para decifrar a frase
  var letter, index;
  var arrayFinal = [];
  for(var i = 0; i < phase.length; i++){
    letter = phase.charCodeAt(i);
    index = (letter + 65 - n) % 26;
    arrayFinal[i] = alfa[index];
  }
  var phaseFinal = arrayFinal.join('');
  console.log(phaseFinal);
  return phaseFinal;
}
if(typeOfPhase === false){ //transforma em minuscula
  resultPhaseCipher = resultPhaseCipher.toLowerCase();
  resultPhaseDecipher = resultPhaseDecipher.toLowerCase();
}
document.getElementById("cipher").innerHTML = "A frase cifrada é: " + resultPhaseCipher;
document.getElementById("decipher").innerHTML = "A frase descifrada é: " + resultPhaseDecipher;
