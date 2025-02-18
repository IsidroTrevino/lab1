export function MyApp() {
    const nombre = "Isidro";
    const apellido = "Treviño";

    const nombreCompleto = `${nombre} ${apellido}`; // template string

    console.log(nombreCompleto);

    function getSaludo(nombre) {
        return `Hola ${nombre}`;
    }

    return (
        <div>
            <h1>{getSaludo(nombreCompleto)}</h1>
            <p>Esto es un párrafo</p>
        </div>
    );

}