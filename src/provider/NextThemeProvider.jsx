"use client";
import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children, ...props }) => {
    return (
        // Spread the ...props here so it receives the settings from layout.js
        <ThemeProvider {...props}>
            {children}
        </ThemeProvider>
    );
};

export default NextThemeProvider;