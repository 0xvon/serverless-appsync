export default {
    type: "object",
    properties: {
        email: { type: 'string' },
        role: { type: 'string' },
    },
    required: ['email', 'role'],
} as const;
