import React from "react";
import { TableStyle } from "./styles";

const Table = () => {
  const data = [
    {
      id: 1,
      column1: "Warranty",
      column2: "3 Years",
    },
    {
      id: 2,
      column1: "Graphic Memory Type",
      column2: "GDDR6",
    },
    {
      id: 3,
      column1: "GPU Model",
      column2: "GeForce RTX 4060 Ti",
    },
    {
      id: 4,
      column1: "GPU Series",
      column2: "NVDIA Geforce 40 Series",
    },
    {
      id: 5,
      column1: "Base Clock",
      column2: "2310 MHz",
    },
    {
      id: 6,
      column1: "Boost Clock",
      column2: "2655 MHz",
    },
  ];

  return (
    <TableStyle>
      <table>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="column1">{row.column1}</td>
              <td className="column2">{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyle>
  );
};

export default Table;
