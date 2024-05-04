/* 
    Part 1 Again: Number Facts
*/

let BASE_URL = "http://numbersapi.com";

// 1
async function getFavNum() {
    let favNumber = await axios.get(`${BASE_URL}/42`);
    console.log(favNumber.data);
}
getFavNum();

// 2
async function getMultiNum() {
    let batch = [12,14,16,24];
    let numsFacts = await axios.get(`${BASE_URL}/${batch}`)
    console.log(numsFacts.data);
}
getMultiNum();

// 3
// We could batch request the same number four times, or
async function getFourFacts() {
    let p1p = axios.get(`${BASE_URL}/42`);
    let p2p = axios.get(`${BASE_URL}/42`);
    let p3p = axios.get(`${BASE_URL}/42`);
    let p4p = axios.get(`${BASE_URL}/42`);
    
    let p1 = await p1p;
    let p2 = await p2p;
    let p3 = await p3p;
    let p4 = await p4p;

    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
}
getFourFacts();