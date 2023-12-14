console.log(
    "%c%s",
    "color: #ff7514; font-size:20px; font-weight:bold",
    "<---Created by Lg20--->"
)

const apri=()=>{
	window.open("https://github.com/1Lg20")
}

const Appari=()=>{
	document.querySelector("#NavBar-hidden").setAttribute("class","nav nav-tabs flex-column")
	document.querySelector("#NavBar-hidden").setAttribute("id","NavBar")
	setTimeout(()=>{
		let item=document.querySelectorAll(".nav-item")
		for (let i = 0; i < item.length; i++) {
			item[i].setAttribute("class","nav-item")	
		}
	},520)
	setTimeout(()=>{
		document.querySelector("#DivButton").setAttribute("class","d-flex align-items-end justify-content-end me-3 mt-1")
	},1000)
}

const Scompari=()=>{
	document.querySelector("#NavBar").setAttribute("id","NavBar-hidden")
	document.querySelector("#DivButton").setAttribute("class","d-flex align-items-end justify-content-end Item-Hidden me-3 mt-1")
	setTimeout(()=>{
		document.querySelector("#NavBar-hidden").setAttribute("class","nav nav-tabs flex-column d-none")
	},975)
	setTimeout(()=>{
		let item=document.querySelectorAll(".nav-item")
		for (let i = 0; i < item.length; i++) {
			item[i].setAttribute("class","nav-item Item-Hidden")	
		}
	},100)
	
}