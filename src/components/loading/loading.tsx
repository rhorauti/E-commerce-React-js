function Loading(props: { isLoading: boolean }) {
  const { isLoading = false } = props;

  if (isLoading) {
    return (
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black/80">
        <div className="size-32 animate-spin rounded-full border-8 border-gray-500 border-t-blue-500">
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Loading;
