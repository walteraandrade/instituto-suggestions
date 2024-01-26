interface DeleteButtonProps {
  onClick?: () => Promise<void> | void;
}

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 text-white text-bold text-center rounded"
    >
      Deletar
    </button>
  );
};
