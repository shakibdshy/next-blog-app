export interface InitialStateProps {
  name: string,
  email: string,
  password: string
}

export interface DropdownProps {
  title?: string,
  image?: string,
  icon?: React.ReactNode,
  titleClassName?: string,
  imageClassName?: string,
  variant: "text" | "image" | "icon",
  className?: string,
  render?: React.ReactNode
}

export interface OffcanvasProps {
  position?: "top" | "bottom" | "left" | "right" | null | undefined,
  icon?: React.ReactNode,
  className?: string,
  render?: React.ReactNode
}