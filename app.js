// ckey_a5c18f2db2ca45178c45880d9db

import fetch from "node-fetch";

const APIKEY = 'ckey_a5c18f2db2ca45178c45880d9db';
const baseURL = 'https://api.covalenthq.com/v1'
const chainId = '80001' // Mumbai
const address = '0xa6Acea5812E9f7A82B588C447E55c5B9eC81bAdF' //Deployed contract

async function getWalletBalance(chainId, address) {

    //Below block of code to retrieve present block height
    const blockUrl = new URL(`${baseURL}/${chainId}/block_v2/latest/?key=${APIKEY}`)
    const blockResponse = await fetch(blockUrl);
    const blockResult = await blockResponse.json();
    const blockNum = blockResult.data.items[0].height;
    console.log(blockNum)

    //Below block is common for events
    const url = new URL(`${baseURL}/${chainId}/events/address/${address}/?starting-block=27946843&ending-block=${blockNum}&key=${APIKEY}`)
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data.items)


    const res = data.items.map((ele) => {
        return (Number(ele.raw_log_topics[1]))
    })
    // console.log(res)
    return res;
}

// Example address request
const a = await getWalletBalance(chainId, address);
// console.log(a)
