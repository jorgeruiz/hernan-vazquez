import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import Image from "next/image"
import remarkGfm from "remark-gfm"
import type { ComponentPropsWithoutRef } from "react"

function MdxLink(props: ComponentPropsWithoutRef<"a">) {
  const href = props.href ?? ""

  if (href.startsWith("http") || href.startsWith("//")) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline font-medium"
      />
    )
  }

  return (
    <Link href={href} className="text-primary hover:underline font-medium">
      {props.children}
    </Link>
  )
}

function MdxImage(props: ComponentPropsWithoutRef<"img">) {
  const { src, alt } = props
  if (!src || typeof src !== "string") return null
  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={800}
      height={450}
      className="rounded-xl my-6 w-full"
      sizes="(max-width: 768px) 100vw, 800px"
    />
  )
}

const components = {
  a: MdxLink,
  img: MdxImage,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl sm:text-2xl font-bold text-navy mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-lg font-bold text-navy mt-8 mb-3" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-midnight/80 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-5 space-y-2 mb-4 text-midnight/80" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-5 space-y-2 mb-4 text-midnight/80" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary/30 pl-4 py-1 my-6 text-midnight/70 italic"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="text-left font-semibold text-navy px-3 py-2 border-b-2 border-gray-200" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="px-3 py-2 border-b border-gray-100 text-midnight/80" {...props} />
  ),
  hr: () => <hr className="my-8 border-gray-100" />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-navy" {...props} />
  ),
}

interface Props {
  source: string
}

export default function MdxRenderer({ source }: Props) {
  return (
    <div className="mdx-content">
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  )
}
