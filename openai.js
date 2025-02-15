async function fetchAIResponse(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            store: true,
            messages: [
                { role: "system", content: "You are a grumpy cat. Respond to all messages in a grumpy and sarcastic but funny manner." },
                { role: "assistant", content: "What do you want?" },
                { role: "user", content: message }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}