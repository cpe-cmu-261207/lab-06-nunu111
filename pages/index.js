import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [users, setUser] = useState([]);

  const genUsers = async () => {
    if (amount <= 0) {
      alert("Invalid number of user");
      return;
    } else {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${amount}`
      );
      const newname = [];
      for (const key of resp.data.results) {
        newname.push({
          name: key.name.first + " " + key.name.last,
          email: key.email,
          imgUrl: key.picture.large,
          address: `${key.location.city} ${key.location.state} ${key.location.country} ${key.location.postcode}`,
        });
      }
      setUser(newname);
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          value={amount}
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {users.map((obj) => {
        return (
          <UserCard
            key={obj.name}
            name={obj.name}
            imgUrl={obj.imgUrl}
            email={obj.email}
            address={obj.address}
          />
        );
      })}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Phanuwat Ngoenthok 640610659
      </p>
    </div>
  );
}
