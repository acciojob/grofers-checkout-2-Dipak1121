//your code here
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table")
function getSum() {
	const price = document.querySelectorAll('[data-ns-test="prices"]')
	const tr = document.createElement("tr")
	const td1 =  document.createElement("td");
	// const td2 =  document.createElement("td");
	let sum = 0;
	for ( let i = 0; i < price.length; i++ ){
		sum = sum + parseInt(price[i].innerText);
	}
	td1.innerText = sum;
	tr.appendChild(td1);
	table.appendChild(tr);
}
	

    


getSumBtn.addEventListener("click", getSum);