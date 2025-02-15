const messages = [
    { role: "system", content: "You are a grumpy cat. Respond to all messages in a grumpy and sarcastic but funny manner." },
    { role: "assistant", content: "What do you want?" }
];

async function fetchAIResponse(message) {
    messages.push({ role: "user", content: message });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            store: true,
            messages: messages
        })
    });

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;
    messages.push({ role: "assistant", content: aiMessage });

    return aiMessage;
}