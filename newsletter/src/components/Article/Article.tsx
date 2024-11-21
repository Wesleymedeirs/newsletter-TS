
interface ArticleProps {
    title: string;
    text: string[];
    tags: string[];
    image: string;
    alt: string;
    texto: string;
    index: number;
}

const Article = ({title, text, tags, image, alt}:ArticleProps) => {
  return (
    <div className="cards">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full flex flex-row justify-end gap-1">
          {
            tags.map((tag) => <span className="tags">{tag}</span>)
          }
        </div>
        <div className="grid gap-1">
            {
                text.map((texto, index) => <p key={index} className="text-alura-200 dark:text-gray-400 line-clamp-6 sm:line-clamp-none" >{texto}</p>)
            }
        </div>
        {image && <img className="sm:p-1 rounded-xl" src={image} />}
        {/*Acessibilidade */}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  )
}

export default Article