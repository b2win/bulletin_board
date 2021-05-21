import React, { useEffect, useState } from "react";
import axios from "axios";

function Corona() {
  const [virusInfo, setVirusInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=3XfEcgs0f7zzFzM20eON8HHY3yhxyYIRFTnrtzot2THMlkFXP8yqZog2aInHHoPaliYK0SgriMXt4Fr1FKK0lw%3D%3D"
        );
        setVirusInfo(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {virusInfo && (
                      // {virusInfo.map((list) => (
                      //   <table className="message">
                      //     <tr>
                      //       <td>{list.id}</td>
                      //       <td>{list.name}</td>
                      //       <td>black9p</td>
                      //       <td>{list.phone}</td>
                      //     </tr>
                      //   </table>
      )}
    </div>
  );
}

export default Corona;
