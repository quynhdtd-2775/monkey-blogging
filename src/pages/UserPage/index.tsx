import { collection, getDocs, onSnapshot } from "firebase/firestore";
import DashboardHeading from "../../../src/module/DashboardHeading";
import Table from "../../components/table";
import { db } from "../../../src/firebase-app/firebase-config";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [userList, setUserList] = useState([]);

  //   useEffect(() => {
  //     onSnapshot(colRef, (snapshot) => {
  //       const users: any = [];
  //       snapshot.docs.forEach((doc) => {
  //         users.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setUserList(users);
  //     });
  //   }, []);

  useEffect(() => {
    const colRef = collection(db, "users");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const fetchedUsers: any = [];
      snapshot.forEach((doc) => {
        fetchedUsers.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(fetchedUsers); // Cập nhật state với dữ liệu từ Firestore
    });

    return () => unsubscribe(); // Đảm bảo unsubscribe khi component unmount
  }, []);

  return (
    <div>
      <DashboardHeading title="Users" desc="Manage the user"></DashboardHeading>

      <div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Information</th>
              <th>User name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{}</td>
                  <td>Category 1</td>
                  <td>Author</td>
                  <td>Status</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default UserPage;
