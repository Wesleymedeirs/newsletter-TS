
interface ArticleProps {
    title: string;
    text: string[];
    tags: string[];
    imagem: string;
    alt: string;
    texto: string;
    index: number;
}

const Article = ({title, text, tags, imagem, alt}:ArticleProps) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="grid gap-1">
            {
                text.map((texto: string, index: number) => <p key={index} className="text-alura-200 dark:text-gray-400" >{texto}</p>)
            }
        </div>
    </div>
  )
}

export default Article