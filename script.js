
//  heart count
document.addEventListener('DOMContentLoaded', function() {
  const heartCountEl = document.getElementById('heart-count');

  if (!heartCountEl.innerText.trim()) {
    heartCountEl.innerText = '0';
  }

  const loveButtons = document.querySelectorAll('.love-btn');

  loveButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      let count = parseInt(heartCountEl.innerText) || 0;

      count++;

      heartCountEl.innerText = count;  
    });
  });
});




// copy button


const copyButtons = [
  { id: 'copy-btnN', value: '999' },
  { id: 'copy-btnP', value: '999' },
  { id: 'copy-btnF', value: '999' },
  { id: 'copy-btnA', value: '1994-999999' },
  { id: 'copy-btnW', value: '109' },
  { id: 'copy-btnC', value: '106' },
  { id: 'copy-btnE', value: '16216' },
  { id: 'copy-btnB', value: '16445' },
  { id: 'copy-btnR', value: '163' }
];

function handleCopy(phoneNumber) {
  const copyCountEl = document.getElementById('copy-count');
  let currentCount = parseInt(copyCountEl.innerText) || 0;
  copyCountEl.innerText = ++currentCount;
  alert(`Copy to clipboard: ${phoneNumber}`);

  const textarea = document.createElement('textarea');
  textarea.value = phoneNumber;
  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand('copy');

  document.body.removeChild(textarea);
}

const btnN = document.getElementById('copy-btnN');
if (btnN) {
  btnN.addEventListener('click', function() { handleCopy('999'); });
}

const btnP = document.getElementById('copy-btnP');
if (btnP) {
  btnP.addEventListener('click', function() { handleCopy('999'); });
}

const btnF = document.getElementById('copy-btnF');
if (btnF) {
  btnF.addEventListener('click', function() { handleCopy('999'); });
}

const btnA = document.getElementById('copy-btnA');
if (btnA) {
  btnA.addEventListener('click', function() { handleCopy('1994-999999'); });
}

const btnW = document.getElementById('copy-btnW');
if (btnW) {
  btnW.addEventListener('click', function() { handleCopy('109'); });
}

const btnC = document.getElementById('copy-btnC');
if (btnC) {
  btnC.addEventListener('click', function() { handleCopy('106'); });
}

const btnE = document.getElementById('copy-btnE');
if (btnE) {
  btnE.addEventListener('click', function() { handleCopy('16216'); });
}

const btnB = document.getElementById('copy-btnB');
if (btnB) {
  btnB.addEventListener('click', function() { handleCopy('16445'); });
}

const btnR = document.getElementById('copy-btnR');
if (btnR) {
  btnR.addEventListener('click', function() { handleCopy('163'); });
}



// coin reduction and call

document.getElementById('call-btnN').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling National Emergency Service 999.....");
  } else {
    alert("❌Not sufficient coin");
  }
});

// police
document.getElementById('call-btnP').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Police 999.....");
  } else {
    alert("❌Not sufficient coin");
  }
});

// fire service
document.getElementById('call-btnF').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Fire Service 999.....");
  } else {
    alert("❌Not sufficient coin");
  }
});


// ambulance
document.getElementById('call-btnA').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Ambulance Service 1994-999999.....");
  } else {
    alert("❌Not sufficient coin");
  }
});

// women
document.getElementById('call-btnW').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Women & Child 109.....");
  } else {
    alert("❌ Not sufficient coin");
  }
});

// govt
document.getElementById('call-btnC').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Anti-Corruption 106.....");
  } else {
    alert("❌ Not sufficient coin");
  }
});


// current
document.getElementById('call-btnE').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Electricity 16216.....");
  } else {
    alert("❌Not sufficient coin");
  }
});

// NGO
document.getElementById('call-btnB').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Brac 16445.....");
  } else {
    alert("❌Not sufficient coin");
  }
});

// Railway
document.getElementById('call-btnR').addEventListener('click', function() {
  const coinNumberEl = document.getElementById('coin-number');
  const coinCount = parseInt(coinNumberEl.innerText) || 0;

  if (coinCount >= 20) {
    coinNumberEl.innerText = coinCount - 20;
    alert("📞 Calling Bangladesh Railway 163.....");
  } else {
    alert("❌ Not sufficient coin");
  }
});



// history

const callButtons = [
  { id: 'call-btnN', label: 'National Emergency', number: '999' },
  { id: 'call-btnP', label: 'Police Helpline', number: '999' },
  { id: 'call-btnF', label: 'Fire Service', number: '999' },
  { id: 'call-btnA', label: 'Ambulance Service', number: '1994-999999' },
  { id: 'call-btnW', label: 'Women & Child Helpline', number: '109' },
  { id: 'call-btnC', label: 'Anti-Corruption Helpline', number: '106' },
  { id: 'call-btnE', label: 'Electricity Helpline', number: '16216' },
  { id: 'call-btnB', label: 'Brac Helpline', number: '16445' },
  { id: 'call-btnR', label: 'Bangladesh Railway Helpline', number: '163' }
];

const historyList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    
  });
}

function addHistoryEntry(label, number) {
  const now = new Date();
  const timeString = formatTime(now);

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong>${label}</strong>
      <span style="font-size: small; color: gray;">${timeString}</span>
    </div>
    <div>${number}</div>
  `;

  historyList.appendChild(listItem);
}

callButtons.forEach(({id, label, number}) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', () => addHistoryEntry(label, number));
  }
});

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
  });
}

if (historyList && historyList.children.length === 0) {
  historyList.innerHTML = '';
}





