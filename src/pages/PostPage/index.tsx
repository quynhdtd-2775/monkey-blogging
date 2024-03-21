import Table from "../../components/table";

const PostPage = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Post</th>
            <th>Category</th>
            <th>Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Post 1</td>
            <td>Category 1</td>
            <td>Author</td>
            <td>Status</td>
            <td></td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
};
export default PostPage;
