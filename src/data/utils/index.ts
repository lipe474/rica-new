export const formatData = (dateStr: string) => {
    const date = new Date(dateStr);

    const day = date.toLocaleString("pt-BR", { day: "2-digit" });
    const month = date.toLocaleString("pt-BR", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}

// há 2 dias
export const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();

    const diff = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
        return "há 1 dia";
    } else if (diffDays > 1) {
        return `há ${diffDays} dias`;
    } else {
        return "hoje";
    }
}

// 22 de Novembro de 2077
export const formatDateAndTime = (dateStr: string) => {
    const date = new Date(dateStr);

    const day = date.toLocaleString("pt-BR", { day: "2-digit" });
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.getFullYear();

    const formattedDate = `${day} de ${month} de ${year}`;

    return formattedDate;
}
