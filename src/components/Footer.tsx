import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-primary/20 bg-primary py-6 text-center text-sm text-primary-foreground" dir="rtl">
            <div className="container px-4 space-y-4">
                <p className="leading-relaxed text-xs text-white/90">
                    האתר מציג מידע ציבורי פתוח כפי שנאסף ע"י הסדנא לידע ציבורי בפרויקט <a href="https://www.digital-forest.org.il/" className="font-medium underline hover:text-white">יער עירוני דיגיטלי</a> ו-<a href="https://www.treecatalog.org.il/" className="font-medium underline hover:text-white">קטלוג עצי רחוב וצל</a> כשירות לציבור. ייתכנו הבדלים בין המידע המוצג למצב בשטח בשל שגיאות באיסוף הנתונים במקור, בעיבוד הנתונים או בשינויים שקרו בשטח.
                </p>
                <Separator className="my-4 opacity-20 bg-white" />
                <p className="text-xs text-white/90">
                    גרסת פיילוט. נשמח ללמוד ולשמוע רעיונות והצעות לשיפור{" "}
                    <a href="mailto:info@hasadna.org.il" className="text-white font-medium hover:underline">
                        info@hasadna.org.il
                    </a>
                </p>
            </div>
        </footer>
    );
};
