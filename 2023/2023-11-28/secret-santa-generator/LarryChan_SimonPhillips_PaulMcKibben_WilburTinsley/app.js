// Simple Secret Santa Generator
function simpleAssign() {
    let participants = ['tom', 'jerry', 'beavis', 'butthead', 'simon'];
    let giftAssignment = {};
        
    // First do simplest thing possible...
    for (let i = 0; i < participants.length; i++) {
        let recipientIndex = (i == participants.length - 1) ? 0 : i+1;
        giftAssignment[participants[i]] = participants[recipientIndex];
    }

    // Show answer on console log
    console.log(giftAssignment);

    // Create HTML Table to Display Result
    const table = document.getElementById("gift_list_simple");
    Object.keys(giftAssignment).map(giver => {
        const row = document.createElement("tr");
        const giver_td = document.createElement("td");
        giver_td.innerText = `${giver}`;
        row.appendChild(giver_td);
        const receiver_td = document.createElement("td");
        receiver_td.innerText = `${giftAssignment[giver]}`;
        row.appendChild(receiver_td);
        table.appendChild(row);
    });
}

simpleAssign();


// Secret Santa Generator with Exclusions
function complexAssign() {
    let participantList = [
        {name: 'tom', exclusions: ['jerry']}, 
        {name: 'jerry', exclusions: ['tom']},
        {name: 'beavis', exclusions: ['butthead']},
        {name: 'butthead', exclusions: ['beavis']},
        {name: 'kyle', exclusions: ['cartman']},
        {name: 'heman', exclusions: ['']},
        {name: 'she-ra', exclusions: ['']},
        {name: 'linus', exclusions: ['']},
        {name: 'lucy', exclusions: ['']},
        {name: 'jane', exclusions: ['']},
    ];
    
    let receivedGift = {};
    
    for (let i = 0; i < participantList.length; i++) {
        // We go through the participant list in order
        let participant = participantList[i];

        // We then attempt to give gift to the next in participant list.  
        // if that person is excluded or already received gift, skip to next person
        for (let j = 0; j < participantList.length; j++) {
            let receiver = participantList[j];
            
            // Remove same person scenario
            if (i == j) { continue; }
            // Don't give gift to excluded person
            if (receiver.name === participant.exclusions[0]) {
                continue;
            }
            // Don't give gift to someone who already has a gift
            if (receiver.name in receivedGift) {
                continue;
            }
            
            // If person is not in the receivedGiftList, then we add that person to the receivedGiftList
            receivedGift[receiver.name] = participant.name;
            break;
        }
    }

    // Show answer on console log
    console.log(receivedGift);

    // Create HTML Table to Display Result
    const table = document.getElementById("gift_list_complex")
    Object.keys(receivedGift).map(receiver => {
        const row = document.createElement("tr");
        
        const giver_td = document.createElement("td");
        giver_td.innerText = `${receivedGift[receiver]}`;
        row.appendChild(giver_td);

        const receiver_td = document.createElement("td");
        receiver_td.innerText = `${receiver}`;
        row.appendChild(receiver_td);
        table.appendChild(row);
    });

    // TODO Ideas: Code up support for more than one exclusions and bugfixes for edgecases... 
}

complexAssign();