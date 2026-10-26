// 1. Definice rozhraní (Interface)
interface Uzivatel {
    id: number;
    jmeno: string;
    email: string;
    aktivni: boolean;
}

// 2. Třída implementující logiku
class SpravaUzivatelu {
    private seznamUzivatelu: Uzivatel[] = [];

    // Metoda pro přidání uživatele
    pridejUzivatele(novyUzivatel: Uzivatel): void {
        this.seznamUzivatelu.push(novyUzivatel);
        console.log(`Uživatel ${novyUzivatel.jmeno} byl úspěšně přidán.`);
    }

    // Metoda pro vypsání aktivních uživatelů
    vypisAktivni(): Uzivatel[] {
        return this.seznamUzivatelu.filter(u => u.aktivni);
    }
}

// 3. Použití kódu v praxi
const spravce = new SpravaUzivatelu();

const uzivatel1: Uzivatel = {
    id: 1,
    jmeno: "Jan Novák",
    email: "jan.novak@example.cz",
    aktivni: true
};

const uzivatel2: Uzivatel = {
    id: 2,
    jmeno: "Marie Černá",
    email: "marie.cerna@example.cz",
    aktivni: false
};

// Spuštění metod
spravce.pridejUzivatele(uzivatel1);
spravce.pridejUzivatele(uzivatel2);

console.log("Aktivní uživatelé:", spravce.vypisAktivni());
