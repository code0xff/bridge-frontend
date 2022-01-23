const connectWallet = async function(setAddress) {
  const ethereum = window.ethereum
  if (ethereum) {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    setAddress(accounts[0])
  } else {
    window.open("https://metamask.io/download/", "_blank")
  }
}

module.exports = {
  connectWallet
}