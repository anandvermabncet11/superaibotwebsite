const getFloatingValue = (value) => {
    if (value === undefined || value === null || isNaN(value) || value === "" || value === 0 || value === "0" || Number(value) == 0) {
        return "0.00";
    } else {
        return parseFloat(Number(value || 0).toFixed(2));
    }
};

export { getFloatingValue };