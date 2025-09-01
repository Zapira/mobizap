import "@testing-library/jest-dom";

(global as any).chrome = {
    storage: {
        session: {
            get: (_: string, callback: (result: any) => void) => {
                callback({ zapira_prev_url: "https://muhammadrizki.vercel.app" });
            },
        },
    },
};
