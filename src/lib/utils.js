// Funzione di aiuto per formattare la data
export function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 perché i mesi partono da 0
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
}