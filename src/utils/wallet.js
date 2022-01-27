const connectWallet = async function(callback) {
  const ethereum = window.ethereum
  if (ethereum) {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    callback(accounts[0])
  } else {
    window.open("https://metamask.io/download/", "_blank")
  }
}

module.exports = {
  connectWallet
}