import clsx from "clsx";

type ButtonVariants = 'primary' | 'ghost' | 'disabled';
interface Props {
  text: string;
  variant: ButtonVariants;
  rightIcon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({text, variant, rightIcon, onClick}: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        clsx (
          "w-full px-3 py-4 font-semibold rounded-full mb-3",
          {
            "bg-blue-500 text-white hover:bg-blue-700": variant === "primary",
            "bg-transparent text-blue-500 hover:bg-gray-200": variant === "ghost",
            "bg-gray-300": variant === "disabled"
          }
        )
      }
    >
      <div className="inline-flex items-center">
        {text} {rightIcon}
      </div>
    </button>
  )
}
