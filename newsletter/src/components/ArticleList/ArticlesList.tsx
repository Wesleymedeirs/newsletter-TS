import Article from "../Article/Article";
import useFetch from "../Hooks/useFetch";

// Definindo a interface para um artigo
interface ArticleProps {
    title: string;
    text: string[];
    tags: string[];
    image: string; 
    alt: string;    
}

const ArticlesList: React.FC = () => {
    // Usando o tipo Article para os dados retornados pelo hook
    const { data, error, isLoading } = useFetch<ArticleProps[]>('https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json');

    if (isLoading) {
        return <div className="flex flex-col items-center bg-gray-100  text-slate-900 p-5 mx-64">Carregando...</div>;
    }

    if (error) {
        return <div className="flex flex-col items-center bg-gray-100  text-red-500 p-5 mx-64">Erro ao carregar os artigos: {error}</div>;
    }

    return (
        <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
            {data?.map((dados, index) => <Article texto={""} index={index} key={index} {...dados}/> )}
            
        </div>
    );
}

export default ArticlesList;