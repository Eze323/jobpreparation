function MaxValue(shares) {
  // Tu código aquí
  let maxValue=shares[1]-shares[0];
  let aux=shares[0];

  for (let i=2; i<shares.length; i++) {
    if(shares[i]-aux>maxValue)maxValue=shares[i]-aux;
    if(shares[i]<aux)aux=shares[i];
  }

  return maxValue;
}

module.exports = MaxValue;
