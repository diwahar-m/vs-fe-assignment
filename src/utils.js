export function getHandlePoint(input) {
    const step = 100 / (input + 1); // Adjust formula as needed
    return Array.from({ length: input }, (_, i) => step * (i + 1));
}