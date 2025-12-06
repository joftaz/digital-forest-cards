import { TreePine } from "lucide-react";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground">
            <div className="container flex h-16 items-center justify-between px-4">
                <a href="https://app.digital-forest.org.il/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                        <TreePine className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-none tracking-tight text-white">
                            יער עירוני דיגיטלי
                        </span>
                        <span className="text-[10px] text-white/80">
                            לראות מידע ציבורי - להוסיף מידע אזרחי
                        </span>
                    </div>
                </a>
            </div>
        </header>
    );
};
