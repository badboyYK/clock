let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');
let am = document.getElementById('am');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
let hhdot = document.getElementById('hhdot');
let mmdot = document.getElementById('mmdot');
let ssdot = document.getElementById('ssdot');
let amm = document.getElementById('amm');
let ring = document.getElementById('ring');
let j = 0;

setInterval(show,1000);
function show(){
	let time = new Date();
	let hrs = time.getHours();
	let mns = time.getMinutes();
	let scs = time.getSeconds();
	let ams = hrs > 12 ? 'PM':'AM';
	hrs%=12;
	hrs = hrs > 9 ? hrs:'0'+hrs;
	mns = mns > 9 ? mns:'0'+mns;
	scs = scs > 9 ? scs:'0'+scs;
	hr.innerHTML = hrs;
	mn.innerHTML = mns;
	sc.innerHTML = scs;
	am.innerHTML = ams;
	
	hh.style.strokeDashoffset = 502- (502*hrs)/12;
	mm.style.strokeDashoffset = 502- (502*mns)/60;
	ss.style.strokeDashoffset = 502- (502*scs)/60;
	amm.style.strokeDashoffset = 160- (160*scs)/60;
	
	hhdot.style.transform = `rotate(${hrs*30}deg) translateY(-80px)`;
	mmdot.style.transform = `rotate(${mns*6}deg) translateY(-80px)`;;
	ssdot.style.transform = `rotate(${scs*6}deg) translateY(-80px)`;;
	
}
setInterval(()=>{ring.style.strokeDashoffset = 1500- (1500*j/60);j=(j+1)%60;},100);
