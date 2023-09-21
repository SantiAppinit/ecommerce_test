const login = async (username: string, pass: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {

        if (username === "santi" && pass === "test") {
            setTimeout(() => {
                resolve(true);
            }, 1500);
        }

        setTimeout(() => {
            reject(false);
        }, 1500);
    });
}

export default {
    login
}