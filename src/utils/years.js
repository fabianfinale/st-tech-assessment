const currentDate = new Date().getFullYear();
export const years = Array.from({ length: 5 }, (_, i) => currentDate + i);
