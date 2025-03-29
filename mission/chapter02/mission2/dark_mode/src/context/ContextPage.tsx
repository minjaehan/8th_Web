import  {ThemeProvider } from "./ThemeProvider";
import NavBar from "./NavBar";
import  ThemeContent  from "./ThemeContent";

export default function ContextPage(){
    return(
        <ThemeProvider>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <NavBar />
                <main className="flex-1 w-full">
                    <ThemeContent/>
                </main>
            </div>
        </ThemeProvider>
    );
}