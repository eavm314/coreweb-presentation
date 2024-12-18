const LinkButton = ({ href, text }: { href: string, text: string }) => {
  return (
    <a
      className="text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-lg"
      href={href} target="_blank" rel="noreferrer"
    >
      {text}
    </a>
  )
}

export default LinkButton;