import { ThemeProvider } from "@/context/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
        </ThemeProvider>
    );
};

export default App;
