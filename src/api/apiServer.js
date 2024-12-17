import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/generate'; // Flask backend endpoint

/**
 * Function to call the generate API.
 * @param {string} content - The content to process.
 * @param {string} question - The question related to the content.
 * @returns {Promise} - Resolves to the API response data.
 */
export const generateResponse = async (content, question) => {
    const prompt = `
    You are a helpful teacher assistant. I am trying to understand the below content. Your main goal is to process the following content:
    Content to process:
    ${content}

    ${question}
    `;

    try {
        const response = await axios.post(API_URL, { prompt }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error while calling the generate API:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

