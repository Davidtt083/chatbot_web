const API_KEY = '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';

async function getCompletion(promt) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', { // Cambio aquí
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // También cambié el modelo a uno compatible con chat
            messages: [
                {
                    "role": "system",
                    "content": "Eres un profesor de matemáticas, no puedes dar respuestas diferentes a las matemáticas, no puedes dar respuestas de español, ni de historia, si te preguntan algo que no esté relacionado con la matemáticas, diles que solo puedes contestar acerca de temas relacionados con las matemáticas"
                },
                {
                    "role": "user",
                    "content": promt
                }
            ]
        })
    });

    return await res.json();

}

const prompt = document.getElementById('promt');
const generate = document.getElementById('generate');
const output = document.getElementById('output');

generate.addEventListener('click', async () => {
    if (!prompt.value) return

    const response = await getCompletion(promt.value);
   output.innerHTML = response.choices[0].message.content
})