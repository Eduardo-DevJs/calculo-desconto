import { FormEvent, useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";

export default function App() {
  const [precoOriginal, setPrecoOriginal] = useState<number | null>(0);
  const [desconto, setDesconto] = useState<number | null>(0);
  const [precoFinal, setPrecoFinal] = useState<number>(0);
  const [economia, setEconomia] = useState<number>(0);
  const [resultado, setResultado] = useState<boolean>(false);

  function calcularDesconto(e: FormEvent) {
    e.preventDefault();
    if (precoOriginal !== null && desconto !== null) {
      if (desconto > 99) {
        alert("O valor maximo do desconto é de 99%")
        return
      }

      const economia = (precoOriginal * desconto) / 100;
      setPrecoFinal(precoOriginal - economia);
      setEconomia(economia);

      setResultado(true);
    }
  }

  function voltarAoCalculo() {
    setResultado(false);
  }

  function precoFormatado (number: number){
    return number.toFixed(2).toString().replace(".",',')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Container>
        {resultado ? (
          <div className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-white text-2xl">
              Preço Final:{" "}
              <span className="text-green-500 font-medium">
                R$ {precoFormatado(precoFinal)}
              </span>
            </h1>
            <h1 className="text-white text-2xl">
              Você teve uma economia de:{" "}
              <span className="text-green-500 font-medium">R$ {precoFormatado(economia)}</span>
            </h1>

            <button
              onClick={voltarAoCalculo}
              className="bg-slate-700 w-full p-2 rounded-md text-white mt-5"
            >
              Voltar a fazer o Calculo
            </button>
          </div>
        ) : (
          <form
            className="md:flex flex-col items-end gap-4 p-5"
            onSubmit={calcularDesconto}
          >
            <div className="flex items-center gap-5">
              <div>
                <label className="block text-white font-medium mb-2">
                  Preço Original
                </label>
                <Input
                  onChange={(e) => setPrecoOriginal(Number(e.target.value))}
                  type="number"
                  placeholder="Preço original"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Desconto %
                </label>
                <Input
                  onChange={(e) => setDesconto(Number(e.target.value))}
                  type="number"
                  placeholder="Desconto"
                />
              </div>
            </div>
            <button className="border border-white rounded-md text-white py-2 px-5 hover:bg-white hover:text-black">
              Calcular
            </button>
          </form>
        )}
      </Container>
    </div>
  );
}
