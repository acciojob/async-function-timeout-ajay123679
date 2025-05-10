//your JS code here. If required.
const a=document.getElementById("text");
const b=document.getElementById("delay");
const c=document.getElementById("output");
const d=document.getElementById("btn");

btn.addEventListener("click",fun);

async function fun()
{
	await new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText=a.value;
			resolve();
		},b.value);
	})
}