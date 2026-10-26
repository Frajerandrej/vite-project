// Definice rozhraní pro strukturu dat
interface Osoba {
    osoba: any;
    jmeno: string;
    vek: number;
    jeAktivni: boolean;
}

// Funkce, která pracuje s daty
function vytvorPozdrav(osoba: Osoba): string {
    const stav = osoba.osoba?.jeAktivni ? "aktivní" : "neaktivní";
    return `Ahoj ${osoba.jmeno}! Je ti ${osoba.vek} let a tvůj stav je: ${stav}.`;
}

// Hlavní objekt
const uzivatel: Osoba = {
  jmeno: "Jan",
  vek: 20,
  jeAktivni: true,
  osoba: undefined
};

// Spuštění a výpis do konzole
console.log(vytvorPozdrav(uzivatel));