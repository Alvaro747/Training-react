import React, {useEffect, useState} from "react";
import CustomerTable from "../components/CustomerTable";
import {get} from "../service/api.service";
import Spinner from "../components/skeleton/Spinner";

function TableView() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // this function get data from API
    const fetchData = async () => {
      try {
        const data = await get("https://jsonplaceholder.typicode.com/users");

        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      {loading ? <Spinner /> : <CustomerTable users={userData} />}
    </div>
  );
}

export default TableView;
