const IdPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h1>Welcome to the id page</h1>
      Id: {params.id}
    </div>
  );
};

export default IdPage;
