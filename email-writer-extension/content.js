// console.log("Email Writer Extension - Content Script Loaded.");

// function createAIButton() {
//     const button = document.createElement('div');
//     button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
//     button.style.marginRight = '8px';
//     button.innerHTML = 'AI REPLY';
//     button.setAttribute('role', 'button');
//     button.setAttribute('data-tooltip', 'button');
//     return button;
    
// }

// function getEmailContent(){
//     const selectors =[
//             '.h7',
//             '.a3s.aiL',
//             '.gmail_quote',
//             '[role = "presentation"]'
//         ];
//     for (const selector of selectors) {
//     const content = document.querySelector(selector);
//     if(content) {
//         return content.innerText.trim();
//         }
//         return '';   
//     }
        
// }


// function findComposeToolbar(){
//     const selectors =[
//             '.btC',
//             '.aDh',
//             '[role = "toolbar"]',
//             '.gU.Up'
//         ];
//     for (const selector of selectors) {
//     const toolbar = document.querySelector(selector);
//     if(toolbar) return toolbar;
//      return null;
            
//     }
// }

// function injectButton(){
//     const existingButton = document.querySelector('.ai-reply-button');
//     if(existingButton) existingButton.remove();
    
//     const toolbar = findComposeToolbar();
//     if(!toolbar) {
//         console.log("ToolBar Not Found");
//         return ;
//     }
//     console.log("Toolbar Found, creating AI button");
//     const button = createAIButton();
//     button.classList.add('ai-reply-button');

//     button.addEventListener('click', async () => {
//         try{
//             button.innerHTML = 'Generating..';
//             button.disabled = true;

//             const emailContent = getEmailContent();
//             const response = await fetch('http://localhost:8080/api/email/generate', {
//                 method: 'POST',
//                 headers : {
//                     'Content-Type' : 'application/json',
//                 },
//                 body : JSON.stringify({
//                     emailContent: emailContent,
//                     tone: "professional"
//                 }) 
//             });
//             if(!response.ok) {
//                 throw new Error('API request failed.');   
//             }
//             const genertedReply = await response.text();
//             const ComposeBox = document.querySelector('[role="textbox"], [g_editable="true"]');
//             if(ComposeBox){
//                 ComposeBox.focus();
//                 document.execCommand('insertText', false, genertedReply);
//             }else{
//                 console.error('Compose box was not found.');
//             }

//         }catch(error){
//             console.error(error);
//             alert('Failed to generate the reply.');
//         }finally{
//             button.innerHTML = 'AI Reply';
//             button.disabled = false;
//         }
//     });

//     toolbar.insertBefore(button, toolbar.firstChild);


// }

// const observer = new MutationObserver((mutations) => {
//     for(const mutation of mutations){
//         const addedNodes = Array.from(mutation.addedNodes);
//         const hasComposeElements = addedNodes.some(node =>
//             node.nodeType === Node.ELEMENT_NODE &&
//             (node.matches('.aDh, .btC, [role = "dialog"]') || node.querySelector('.aDh, .btC, [role = "dialog"]'))
//         );

//         if(hasComposeElements){
//             console.log("Compose Window Detected.");
//             setTimeout(injectButton, 500)
//         }

//     }
// });


// observer.observe(document.body, {
//     childList: true,
//     subtree:true
// })




console.log("Email Writer Extension - Content Script Loaded.");

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3 ai-reply-button';
    button.style.marginRight = '8px';
    button.innerText = 'AI REPLY';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'AI Reply');
    return button;
}

function getEmailContent() {
    const selectors = [
        '.a3s.aiL',          // Gmail email body
        '.gmail_quote',      // Quoted text
        '.h7',               // Subject / header
        '[role="presentation"]'
    ];

    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
    }
    return '';
}

function findComposeToolbar() {
    const selectors = [
        '.btC',
        '.aDh',
        '[role="toolbar"]',
        '.gU.Up'
    ];

    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) return toolbar;
    }
    return null;
}

function injectButton() {
    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    // Prevent duplicate buttons
    if (toolbar.querySelector('.ai-reply-button')) return;

    console.log("Toolbar found, injecting AI button");

    const button = createAIButton();

    button.addEventListener('click', async () => {
        try {
            button.innerText = 'Generating...';
            button.style.pointerEvents = 'none';

            const emailContent = getEmailContent();

            const response = await fetch('http://localhost:8080/api/email/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent,
                    tone: 'professional'
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const generatedReply = await response.text();

            const composeBox =
                document.querySelector('[role="textbox"][contenteditable="true"]') ||
                document.querySelector('[g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            } else {
                console.error('Compose box not found');
            }

        } catch (error) {
            console.error(error);
            alert('Failed to generate reply');
        } finally {
            button.innerText = 'AI REPLY';
            button.style.pointerEvents = 'auto';
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

/* ---------------- MUTATION OBSERVER ---------------- */

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);

        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (
                node.matches('.aDh, .btC, [role="dialog"]') ||
                node.querySelector('.aDh, .btC, [role="dialog"]')
            )
        );

        if (hasComposeElements) {
            console.log("Compose window detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
