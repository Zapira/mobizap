import { render, screen } from "@testing-library/react";
import Content from "./content"; 

test("should render iframe with currentUrl from chrome.storage", async () => {
    render(<Content />);
    const iframe = await screen.findByTitle("content-frame");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "https://muhammadrizki.vercel.app");
});

test("render fallback url when chrome is not available", async () => {
    const originalChrome = (global as any).chrome;
    delete (global as any).chrome;

    render(<Content />);
    const iframe = await screen.findByTitle("content-frame");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "https://muhammadrizki.vercel.app");

    (global as any).chrome = originalChrome;
});
