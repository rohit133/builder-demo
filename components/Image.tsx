
// components/Image.tsx
export default function Image({image, alt} : {image: string, alt: string}){
  return (
    <>
     { /*eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt}/>
    </>
  )
}


