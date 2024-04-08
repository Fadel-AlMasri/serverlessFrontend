"use client";
import { MyButton } from "@/components/Variants/Button/MyButton";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { useState } from "react";
import {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} from "./functions";
export default function PageUI() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState<any>([
    {
      email: { S: "" },
      firstName: { S: "" },
      lastName: { S: "" },
    },
  ]);
  console.log(users);
  return (
    <main>
      <div>
        <div className="p-2">
          <MyInput
            type="email"
            placeholder="Email"
            size="xs"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-2">
          <MyInput
            placeholder="First Name"
            size="xs"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="p-2">
          <MyInput
            placeholder="Last Name"
            size="xs"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-10">
        <MyButton
          color="success"
          padding="small"
          onPress={async () => {
            const users = await getUsers();
            setUsers(users);
          }}
        >
          get All users
        </MyButton>
        <MyButton
          color="primary"
          padding="small"
          onPress={async () => setUsers(await getUser(email))}
        >
          get user by email
        </MyButton>
        <MyButton
          color="secondary"
          padding="small"
          onPress={async () =>
            setUsers(await addUser(email, firstName, lastName))
          }
        >
          Add new user
        </MyButton>
        <MyButton
          color="green"
          padding="small"
          onPress={async () =>
            setUsers(await updateUser(email, firstName, lastName))
          }
        >
          Edit user
        </MyButton>
        <MyButton
          color="danger"
          padding="small"
          onPress={async () => setUsers(await deleteUser(email))}
        >
          Delete user
        </MyButton>
      </div>
      <div>
        {users[0]?.email ? (
          users?.map((user: any, index: number) => {
            return (
              <div className="mt-4" key={index}>
                <div className="flex gap-2">
                  <h1>Email: </h1>
                  <h2>{user.email.S}</h2>
                </div>
                <div className="flex gap-2">
                  <h1>Full name: </h1>
                  <h2>{user.firstName?.S + " " + user.lastName?.S}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <p>{users}</p>
        )}
      </div>
    </main>
  );
}
