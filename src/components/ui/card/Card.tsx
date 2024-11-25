
export const Card = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="block w-full mt-5 max-w-lg py-7 px-6 bg-white border border-gray-200 rounded-lg">
      { children }
    </div>
  )
}
