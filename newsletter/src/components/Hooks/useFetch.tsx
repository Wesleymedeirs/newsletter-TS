import { useState, useEffect } from 'react';

// Definindo os tipos para os dados que vamos receber e o erro
interface FetchData<Type> {
  data: Type | null;
  error: string | null;
  isLoading: boolean;
};

// Hook customizado para requisição fetch
function useFetch<Type>(url: string): FetchData<Type>{
  // Estado para armazenar os dados, erro e estado de carregamento
  const [data, setData] = useState<Type | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Função para fazer a requisição fetch
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        // Verificar se a requisição foi bem-sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }

        const result = await response.json();
        setData(result); // Atualiza os dados no estado
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Atualiza o erro no estado
        }
      } finally {
        setIsLoading(false); // Define o carregamento como falso
      }
    };

    // Chama a função fetch
    fetchData();
  }, [url]); // O useEffect depende da URL, então será executado sempre que a URL mudar

  // Retorna os dados, erro e estado de carregamento
  return { data, error, isLoading };
}

export default useFetch;
