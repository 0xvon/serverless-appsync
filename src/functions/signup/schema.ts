export default {
    type: "object",
    properties: {
        email: { type: 'string' },
        role: { type: 'string' },
        name: { type: 'string' },
        english_name: { type: 'string' },
        phone_number: { type: 'string' },
        address: { type: 'string' },
        nationality: { type: 'string' },
    },
    required: ['email', 'role', 'name', 'english_name', 'phone_number', 'address', 'nationality'],
} as const;
