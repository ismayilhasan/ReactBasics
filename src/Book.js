export const Book = (props) => {
    const {imageSrc,title,author,number} = props
  
  
  
    return <article className="book">
        
       <img src={imageSrc}  alt={title} />
       <h1>salam</h1>
       <h2>{title}</h2>
       <h2>{author}</h2> 
       <span className="number">{`# ${number+1}`}</span>   
    </article>;
  };