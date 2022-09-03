import Link from 'next/link'

export function Banner() {
  return (
    <Link href="/">
      <a>
        <picture>
          <img
            src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/2783/banner_img.jpg&w=1920&h=400&q=100"
            alt="Imagem promocional"
          />
        </picture>
      </a>
    </Link>
  )
}
